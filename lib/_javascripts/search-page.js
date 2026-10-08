/* global document, window, PagefindUI */
(function () {
  'use strict';

  var container = document.getElementById('search-results');
  var start = document.getElementById('search-start');
  var unavailable = document.getElementById('search-unavailable');
  if (typeof PagefindUI === 'undefined') {
    unavailable.hidden = false;
    return;
  }

  var search = new PagefindUI({
    element: '#search-results',
    showSubResults: true,
    showImages: false,
    resetStyles: false,
    excerptLength: 24,
    baseUrl: container.dataset.baseUrl,
    translations: {
      placeholder: 'For example, accessibility',
      search_label: 'Search the playbook',
      clear_search: 'Clear search',
      zero_results:
        'No results for [SEARCH_TERM]. Check the spelling or try fewer or different words.',
    },
  });

  var input = container.querySelector('input');
  input.id = 'playbook-search';
  input.setAttribute('aria-describedby', 'search-hint');

  function updateQuery(query) {
    query = query.trim();
    var url = new URL(window.location.href);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    window.history.replaceState(null, '', url);
    start.hidden = Boolean(query);
  }

  input.addEventListener('input', function () {
    updateQuery(input.value);
  });
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') updateQuery('');
  });
  container
    .querySelector('.pagefind-ui__search-clear')
    .addEventListener('click', function () {
      updateQuery('');
      input.focus();
    });

  var query = new URLSearchParams(window.location.search).get('q') || '';
  search.triggerSearch(query);
  start.hidden = Boolean(query.trim());
})();
