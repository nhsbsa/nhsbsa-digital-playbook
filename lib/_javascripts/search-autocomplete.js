/* global document, window */
var SearchAutocomplete = (function () {
  'use strict';

  function createSuggestionsEl() {
    var suggestions = document.createElement('ul');
    suggestions.className = 'app-search-suggestions';
    suggestions.setAttribute('role', 'listbox');
    suggestions.setAttribute('id', 'search-suggestions');
    suggestions.setAttribute('aria-label', 'Suggested pages');
    suggestions.hidden = true;
    return suggestions;
  }

  function configureAria(searchInput) {
    searchInput.setAttribute('role', 'combobox');
    searchInput.setAttribute('aria-autocomplete', 'list');
    searchInput.setAttribute('aria-controls', 'search-suggestions');
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.setAttribute('aria-label', 'Search the playbook');
  }

  function getBaseUrl(searchInput) {
    return searchInput.closest('form').action.replace(/search\/$/, '');
  }

  function buildSuggestionItem(result, index) {
    var li = document.createElement('li');
    li.className = 'app-search-suggestions__item';
    li.setAttribute('role', 'option');
    li.setAttribute('id', 'suggestion-' + index);
    li.setAttribute('tabindex', '-1');
    li.setAttribute('aria-selected', 'false');

    var link = document.createElement('a');
    link.className = 'app-search-suggestions__link';
    link.href = result.url;
    link.textContent = result.title;
    link.setAttribute('tabindex', '-1');

    li.appendChild(link);
    return li;
  }

  function showSuggestions(suggestionsEl, searchInput, results) {
    suggestionsEl.innerHTML = '';
    searchInput.removeAttribute('aria-activedescendant');

    if (!results.length) {
      return hideSuggestions(suggestionsEl, searchInput);
    }

    results.forEach(function (result, index) {
      suggestionsEl.appendChild(buildSuggestionItem(result, index));
    });

    suggestionsEl.hidden = false;
    searchInput.setAttribute('aria-expanded', 'true');
    return -1;
  }

  function hideSuggestions(suggestionsEl, searchInput) {
    suggestionsEl.hidden = true;
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.removeAttribute('aria-activedescendant');
    return -1;
  }

  function setActive(suggestionsEl, searchInput, index) {
    var items = suggestionsEl.querySelectorAll('.app-search-suggestions__item');
    items.forEach(function (item) {
      item.classList.remove('app-search-suggestions__item--active');
      item.setAttribute('aria-selected', 'false');
    });

    if (index >= 0 && index < items.length) {
      items[index].classList.add('app-search-suggestions__item--active');
      items[index].setAttribute('aria-selected', 'true');
      if (items[index].scrollIntoView) {
        items[index].scrollIntoView({ block: 'nearest' });
      }
      searchInput.setAttribute('aria-activedescendant', 'suggestion-' + index);
      return index;
    }

    searchInput.removeAttribute('aria-activedescendant');
    return -1;
  }

  function init(loadPagefind) {
    var searchInput = document.getElementById('search-field');
    var searchWrap = document.getElementById('wrap-search');
    if (!searchInput || !searchWrap) return;
    if (searchWrap.querySelector('#search-suggestions')) return;
    var searchForm = searchInput.closest('form');
    var baseUrl = getBaseUrl(searchInput);

    loadPagefind =
      loadPagefind ||
      function (path) {
        return import(path);
      };

    var suggestionsEl = createSuggestionsEl();
    searchWrap.appendChild(suggestionsEl);
    configureAria(searchInput);
    searchInput.placeholder = 'Search the playbook';
    searchForm.setAttribute('aria-label', 'Search the playbook');

    var debounceTimer;
    var activeIndex = -1;
    var pagefindPromise = null;
    var requestVersion = 0;
    var status = document.createElement('span');
    status.className = 'nhsuk-u-visually-hidden';
    status.setAttribute('role', 'status');
    searchWrap.appendChild(status);

    function initPagefind() {
      if (pagefindPromise) return pagefindPromise;

      var basePath = baseUrl + 'pagefind/pagefind.js';

      pagefindPromise = loadPagefind(basePath)
        .then(function (pf) {
          return pf.options({ baseUrl: baseUrl }).then(function () {
            return pf;
          });
        })
        .catch(function (error) {
          pagefindPromise = null;
          throw error;
        });
      return pagefindPromise;
    }

    function dismiss() {
      requestVersion++;
      clearTimeout(debounceTimer);
      activeIndex = hideSuggestions(suggestionsEl, searchInput);
      status.textContent = '';
    }

    function searchSuggestions() {
      var query = searchInput.value.trim();
      dismiss();
      var version = requestVersion;

      if (query.length < 2) return;

      debounceTimer = setTimeout(function () {
        initPagefind()
          .then(function (pf) {
            return pf.search(query);
          })
          .then(function (search) {
            var sliced = search.results.slice(0, 5);
            return Promise.all(
              sliced.map(function (r) {
                return r.data();
              }),
            );
          })
          .then(function (data) {
            if (version !== requestVersion) return;
            var mapped = data.map(function (d) {
              return { title: d.meta.title, url: d.url };
            });
            var url = new URL(searchForm.action);
            url.searchParams.set('q', query);
            mapped.push({
              title: mapped.length
                ? 'View all results for "' + query + '"'
                : 'Search the playbook for "' + query + '"',
              url: url.href,
            });
            activeIndex = showSuggestions(suggestionsEl, searchInput, mapped);
            status.textContent = data.length
              ? data.length +
                ' suggested pages. Use the up and down arrow keys to choose a page, or press Enter to see all results.'
              : 'No suggested pages. Press Enter to search the playbook.';
          })
          .catch(function () {
            if (version === requestVersion) dismiss();
          });
      }, 200);
    }

    searchInput.addEventListener('input', searchSuggestions);
    searchInput.addEventListener('focus', searchSuggestions);
    searchWrap.addEventListener('focusout', function (e) {
      if (!searchWrap.contains(e.relatedTarget)) dismiss();
    });
    searchForm.addEventListener('submit', dismiss);

    searchInput.addEventListener('keydown', function (e) {
      var items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );
      if (e.key === 'Escape') {
        // Native search inputs clear on Escape. Keep the query when closing
        // the combobox so Enter can still open its full results.
        if (searchInput.value) e.preventDefault();
        dismiss();
        return;
      }
      if (!items.length || suggestionsEl.hidden) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = setActive(
          suggestionsEl,
          searchInput,
          activeIndex < items.length - 1 ? activeIndex + 1 : 0,
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = setActive(
          suggestionsEl,
          searchInput,
          activeIndex > 0 ? activeIndex - 1 : items.length - 1,
        );
      } else if (e.key === 'Enter' && activeIndex >= 0) {
        e.preventDefault();
        var link = items[activeIndex].querySelector('a');
        if (link) window.location.href = link.href;
      }
    });

    document.addEventListener('click', function (e) {
      if (!searchWrap.contains(e.target)) {
        dismiss();
      }
    });
  }

  return {
    init: init,
    _testExports: {
      buildSuggestionItem: buildSuggestionItem,
      showSuggestions: showSuggestions,
      hideSuggestions: hideSuggestions,
      setActive: setActive,
      configureAria: configureAria,
      getBaseUrl: getBaseUrl,
    },
  };
})();

if (typeof document !== 'undefined') {
  SearchAutocomplete.init();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SearchAutocomplete;
}
