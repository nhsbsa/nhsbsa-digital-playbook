/**
 * @jest-environment jsdom
 */
/* global document, window, KeyboardEvent */

describe('Search page', () => {
  let mockTriggerSearch;

  beforeEach(() => {
    jest.resetModules();
    window.history.replaceState(null, '', '/search/');
    document.body.innerHTML = `
      <label for="playbook-search">Search by keyword or topic</label>
      <p id="search-hint">Results update as you type.</p>
      <div id="search-results" data-base-url="/nhsbsa-digital-playbook/"></div>
      <div id="search-start" hidden></div>
      <p id="search-unavailable" hidden></p>
    `;
    mockTriggerSearch = jest.fn();
    global.PagefindUI = jest.fn(function () {
      document.getElementById('search-results').innerHTML = `
        <input type="search">
        <button class="pagefind-ui__search-clear">Clear</button>
      `;
      this.triggerSearch = mockTriggerSearch;
    });
  });

  afterEach(() => {
    delete global.PagefindUI;
    document.body.innerHTML = '';
  });

  test('shouldSearchInitialQueryWhenUrlContainsQuery', () => {
    // Given
    window.history.replaceState(null, '', '/search/?q=design+%26+research');

    // When
    require('../../_javascripts/search-page');

    // Then
    expect(mockTriggerSearch).toHaveBeenCalledWith('design & research');
    expect(document.getElementById('search-start').hidden).toBe(true);
    expect(document.querySelector('label').control).toBe(
      document.getElementById('playbook-search'),
    );
    expect(
      document
        .getElementById('playbook-search')
        .getAttribute('aria-describedby'),
    ).toBe('search-hint');
  });

  test('shouldShowBrowseLinksWhenQueryIsEmpty', () => {
    // Given
    window.history.replaceState(null, '', '/search/?q=%20%20');

    // When
    require('../../_javascripts/search-page');

    // Then
    expect(document.getElementById('search-start').hidden).toBe(false);
  });

  test('shouldUpdateQueryAndPreserveOtherUrlPartsWhenInputChanges', () => {
    // Given
    window.history.replaceState(null, '', '/search/?source=header#results');
    require('../../_javascripts/search-page');
    const input = document.getElementById('playbook-search');
    input.value = '  design & research  ';

    // When
    input.dispatchEvent(new Event('input'));

    // Then
    const url = new URL(window.location.href);
    expect(url.searchParams.get('q')).toBe('design & research');
    expect(url.searchParams.get('source')).toBe('header');
    expect(url.hash).toBe('#results');
    expect(document.getElementById('search-start').hidden).toBe(true);
  });

  test.each([
    { condition: 'ClearIsClicked', action: 'click' },
    { condition: 'EscapeIsPressed', action: 'Escape' },
  ])('shouldClearUrlAndShowBrowseLinksWhen$condition', ({ action }) => {
    // Given
    window.history.replaceState(null, '', '/search/?q=design');
    require('../../_javascripts/search-page');
    const input = document.getElementById('playbook-search');
    // Pagefind updates the input after the event handler has run.
    input.value = 'design';

    // When
    if (action === 'click')
      document.querySelector('.pagefind-ui__search-clear').click();
    else input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    // Then
    expect(new URL(window.location.href).searchParams.has('q')).toBe(false);
    expect(document.getElementById('search-start').hidden).toBe(false);
    if (action === 'click') expect(document.activeElement).toBe(input);
  });

  test('shouldShowFallbackWhenPagefindIsUnavailable', () => {
    // Given
    delete global.PagefindUI;

    // When
    require('../../_javascripts/search-page');

    // Then
    expect(document.getElementById('search-unavailable').hidden).toBe(false);
  });
});
