/* global document, window */
var SearchAutocomplete = (function () {
  'use strict';

  function createSuggestionsEl() {
    var suggestions = document.createElement('ul');
    suggestions.className = 'app-search-suggestions';
    suggestions.setAttribute('role', 'listbox');
    suggestions.setAttribute('id', 'search-suggestions');
    suggestions.hidden = true;
    return suggestions;
  }

  function configureAria(searchInput) {
    searchInput.setAttribute('role', 'combobox');
    searchInput.setAttribute('aria-autocomplete', 'list');
    searchInput.setAttribute('aria-controls', 'search-suggestions');
    searchInput.setAttribute('aria-expanded', 'false');
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

    var link = document.createElement('a');
    link.className = 'app-search-suggestions__link';
    link.href = result.url;
    link.textContent = result.title;

    li.appendChild(link);
    return li;
  }

  function showSuggestions(suggestionsEl, searchInput, results) {
    suggestionsEl.innerHTML = '';

    if (!results.length) {
      suggestionsEl.hidden = true;
      searchInput.setAttribute('aria-expanded', 'false');
      return -1;
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
    return -1;
  }

  function setActive(suggestionsEl, searchInput, index) {
    var items = suggestionsEl.querySelectorAll('.app-search-suggestions__item');
    items.forEach(function (item) {
      item.classList.remove('app-search-suggestions__item--active');
    });

    if (index >= 0 && index < items.length) {
      items[index].classList.add('app-search-suggestions__item--active');
      searchInput.setAttribute('aria-activedescendant', 'suggestion-' + index);
      return index;
    }

    searchInput.removeAttribute('aria-activedescendant');
    return -1;
  }

  function init() {
    var searchInput = document.getElementById('search-field');
    var searchWrap = document.getElementById('wrap-search');
    if (!searchInput || !searchWrap) return;

    var suggestionsEl = createSuggestionsEl();
    searchWrap.appendChild(suggestionsEl);
    configureAria(searchInput);

    var debounceTimer;
    var activeIndex = -1;
    var pagefindInstance = null;

    function initPagefind() {
      if (pagefindInstance) return Promise.resolve(pagefindInstance);

      var basePath = getBaseUrl(searchInput) + 'pagefind/pagefind.js';

      return import(basePath)
        .then(function (pf) {
          pagefindInstance = pf;
          return pf.options({
            baseUrl: getBaseUrl(searchInput),
          });
        })
        .then(function () {
          return pagefindInstance;
        });
    }

    searchInput.addEventListener('input', function () {
      var query = searchInput.value.trim();
      clearTimeout(debounceTimer);

      if (query.length < 2) {
        activeIndex = hideSuggestions(suggestionsEl, searchInput);
        return;
      }

      debounceTimer = setTimeout(function () {
        initPagefind()
          .then(function (pf) {
            return pf.search(query);
          })
          .then(function (search) {
            var sliced = search.results.slice(0, 8);
            return Promise.all(
              sliced.map(function (r) {
                return r.data();
              }),
            );
          })
          .then(function (data) {
            var mapped = data.map(function (d) {
              return { title: d.meta.title, url: d.url };
            });
            activeIndex = showSuggestions(suggestionsEl, searchInput, mapped);
          })
          .catch(function () {
            activeIndex = hideSuggestions(suggestionsEl, searchInput);
          });
      }, 200);
    });

    searchInput.addEventListener('keydown', function (e) {
      var items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );
      if (!items.length) return;

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
      } else if (e.key === 'Escape') {
        activeIndex = hideSuggestions(suggestionsEl, searchInput);
      }
    });

    document.addEventListener('click', function (e) {
      if (!searchWrap.contains(e.target)) {
        activeIndex = hideSuggestions(suggestionsEl, searchInput);
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
