/**
 * @jest-environment jsdom
 */
/* global document, KeyboardEvent, MouseEvent, FocusEvent */

const SearchAutocomplete = require('../../_javascripts/search-autocomplete');
const {
  buildSuggestionItem,
  showSuggestions,
  hideSuggestions,
  setActive,
  configureAria,
  getBaseUrl,
} = SearchAutocomplete._testExports;

describe('SearchAutocomplete', () => {
  test('shouldExportObjectWhenModuleIsLoaded', () => {
    // Given
    const exportedModule = SearchAutocomplete;

    // When
    const result = typeof exportedModule;

    // Then
    expect(result).toBe('object');
  });

  test('shouldExposeInitFunctionWhenModuleIsLoaded', () => {
    // Given
    const exportedModule = SearchAutocomplete;

    // When
    const result = typeof exportedModule.init;

    // Then
    expect(result).toBe('function');
  });

  test('shouldExposeTestHelpersWhenModuleIsLoaded', () => {
    // Given
    const exportedModule = SearchAutocomplete;

    // When
    const result = typeof exportedModule._testExports;

    // Then
    expect(result).toBe('object');
  });
});

describe('configureAria', () => {
  test('shouldSetComboboxRoleWhenInputIsConfigured', () => {
    // Given
    const input = document.createElement('input');

    // When
    configureAria(input);

    // Then
    expect(input.getAttribute('role')).toBe('combobox');
  });

  test('shouldSetListAutocompleteWhenInputIsConfigured', () => {
    // Given
    const input = document.createElement('input');

    // When
    configureAria(input);

    // Then
    expect(input.getAttribute('aria-autocomplete')).toBe('list');
  });

  test('shouldAssociateSuggestionsWhenInputIsConfigured', () => {
    // Given
    const input = document.createElement('input');

    // When
    configureAria(input);

    // Then
    expect(input.getAttribute('aria-controls')).toBe('search-suggestions');
  });

  test('shouldMarkComboboxCollapsedWhenInputIsConfigured', () => {
    // Given
    const input = document.createElement('input');

    // When
    configureAria(input);

    // Then
    expect(input.getAttribute('aria-expanded')).toBe('false');
  });
});

describe('getBaseUrl', () => {
  test('shouldExtractBaseUrlWhenSearchActionIncludesPlaybookPrefix', () => {
    // Given
    const form = document.createElement('form');
    form.action = 'http://localhost/nhsbsa-digital-playbook/search/';
    const input = document.createElement('input');
    form.appendChild(input);
    document.body.appendChild(form);

    // When
    const result = getBaseUrl(input);

    // Then
    expect(result).toBe('http://localhost/nhsbsa-digital-playbook/');

    document.body.removeChild(form);
  });

  test('shouldExtractBaseUrlWhenSearchActionUsesAnotherPrefix', () => {
    // Given
    const form = document.createElement('form');
    form.action = 'http://localhost/playbook/search/';
    const input = document.createElement('input');
    form.appendChild(input);
    document.body.appendChild(form);

    // When
    const result = getBaseUrl(input);

    // Then
    expect(result).toBe('http://localhost/playbook/');

    document.body.removeChild(form);
  });
});

describe('buildSuggestionItem', () => {
  test('shouldCreateListItemWhenSuggestionIsBuilt', () => {
    // Given
    const result = { title: 'Test', url: '/test/' };

    // When
    const item = buildSuggestionItem(result, 0);

    // Then
    expect(item.tagName).toBe('LI');
    expect(item.className).toBe('app-search-suggestions__item');
  });

  test('shouldSetOptionRoleWhenSuggestionIsBuilt', () => {
    // Given
    const result = { title: 'Test', url: '/test/' };

    // When
    const item = buildSuggestionItem(result, 0);

    // Then
    expect(item.getAttribute('role')).toBe('option');
  });

  test('shouldSetIndexedIdWhenSuggestionIsBuilt', () => {
    // Given
    const result = { title: 'Test', url: '/test/' };

    // When
    const item = buildSuggestionItem(result, 3);

    // Then
    expect(item.getAttribute('id')).toBe('suggestion-3');
  });

  test('shouldCreateArticleLinkWhenSuggestionIsBuilt', () => {
    // Given
    const result = { title: 'My Article', url: '/articles/my-article/' };

    // When
    const item = buildSuggestionItem(result, 0);
    const link = item.querySelector('a');

    // Then
    expect(link).not.toBeNull();
    expect(link.className).toBe('app-search-suggestions__link');
    expect(link.href).toContain('/articles/my-article/');
    expect(link.textContent).toBe('My Article');
  });
});

describe('showSuggestions', () => {
  let suggestionsEl;
  let searchInput;

  beforeEach(() => {
    suggestionsEl = document.createElement('ul');
    suggestionsEl.hidden = true;
    searchInput = document.createElement('input');
    searchInput.setAttribute('aria-expanded', 'false');
  });

  test('shouldHideSuggestionsWhenResultsAreEmpty', () => {
    // Given
    const results = [];

    // When
    const result = showSuggestions(suggestionsEl, searchInput, results);

    // Then
    expect(suggestionsEl.hidden).toBe(true);
    expect(searchInput.getAttribute('aria-expanded')).toBe('false');
    expect(result).toBe(-1);
  });

  test('shouldShowSuggestionsWhenResultsAreProvided', () => {
    // Given
    const results = [
      { title: 'Page One', url: '/page-one/' },
      { title: 'Page Two', url: '/page-two/' },
    ];

    // When
    const result = showSuggestions(suggestionsEl, searchInput, results);

    // Then
    expect(suggestionsEl.hidden).toBe(false);
    expect(searchInput.getAttribute('aria-expanded')).toBe('true');
    expect(suggestionsEl.children.length).toBe(2);
    expect(result).toBe(-1);
  });

  test('shouldReplaceSuggestionsWhenNewResultsAreProvided', () => {
    // Given
    showSuggestions(suggestionsEl, searchInput, [
      { title: 'Old', url: '/old/' },
    ]);

    // When
    showSuggestions(suggestionsEl, searchInput, [
      { title: 'New One', url: '/new-one/' },
      { title: 'New Two', url: '/new-two/' },
    ]);

    // Then
    expect(suggestionsEl.children.length).toBe(2);
    expect(suggestionsEl.children[0].querySelector('a').textContent).toBe(
      'New One',
    );
  });
});

describe('hideSuggestions', () => {
  test('shouldCollapseComboboxWhenSuggestionsAreHidden', () => {
    // Given
    const suggestionsEl = document.createElement('ul');
    suggestionsEl.hidden = false;
    const searchInput = document.createElement('input');
    searchInput.setAttribute('aria-expanded', 'true');

    // When
    const result = hideSuggestions(suggestionsEl, searchInput);

    // Then
    expect(suggestionsEl.hidden).toBe(true);
    expect(searchInput.getAttribute('aria-expanded')).toBe('false');
    expect(result).toBe(-1);
  });
});

describe('setActive', () => {
  let suggestionsEl;
  let searchInput;

  beforeEach(() => {
    suggestionsEl = document.createElement('ul');
    searchInput = document.createElement('input');

    for (let i = 0; i < 3; i++) {
      const li = document.createElement('li');
      li.className = 'app-search-suggestions__item';
      li.setAttribute('id', 'suggestion-' + i);
      const a = document.createElement('a');
      a.textContent = 'Item ' + i;
      li.appendChild(a);
      suggestionsEl.appendChild(li);
    }
  });

  test('shouldActivateOptionWhenIndexIsValid', () => {
    // Given
    const index = 1;

    // When
    const result = setActive(suggestionsEl, searchInput, index);

    const items = suggestionsEl.querySelectorAll(
      '.app-search-suggestions__item',
    );

    // Then
    expect(
      items[1].classList.contains('app-search-suggestions__item--active'),
    ).toBe(true);
    expect(
      items[0].classList.contains('app-search-suggestions__item--active'),
    ).toBe(false);
    expect(result).toBe(1);
  });

  test('shouldSetActiveDescendantWhenOptionIsActivated', () => {
    // Given
    const index = 2;

    // When
    setActive(suggestionsEl, searchInput, index);

    // Then
    expect(searchInput.getAttribute('aria-activedescendant')).toBe(
      'suggestion-2',
    );
  });

  test('shouldDeactivatePreviousOptionWhenSelectionChanges', () => {
    // Given
    setActive(suggestionsEl, searchInput, 0);

    // When
    setActive(suggestionsEl, searchInput, 2);

    const items = suggestionsEl.querySelectorAll(
      '.app-search-suggestions__item',
    );

    // Then
    expect(
      items[0].classList.contains('app-search-suggestions__item--active'),
    ).toBe(false);
    expect(
      items[2].classList.contains('app-search-suggestions__item--active'),
    ).toBe(true);
  });

  test('shouldClearSelectionWhenIndexIsOutOfBounds', () => {
    // Given
    const index = 5;

    // When
    const result = setActive(suggestionsEl, searchInput, index);

    // Then
    expect(result).toBe(-1);
    expect(searchInput.hasAttribute('aria-activedescendant')).toBe(false);
  });

  test('shouldClearSelectionWhenIndexIsNegative', () => {
    // Given
    const index = -1;

    // When
    const result = setActive(suggestionsEl, searchInput, index);

    // Then
    expect(result).toBe(-1);
  });
});

describe('init', () => {
  test('shouldNotThrowWhenSearchElementsAreMissing', () => {
    // Given
    document.body.innerHTML = '';

    // When
    const initialise = () => SearchAutocomplete.init();

    // Then
    expect(initialise).not.toThrow();
  });

  test('shouldSetUpSuggestionsWhenSearchElementsExist', () => {
    // Given
    const form = document.createElement('form');
    form.action = 'http://localhost/search/';

    const input = document.createElement('input');
    input.id = 'search-field';
    form.appendChild(input);

    const wrap = document.createElement('div');
    wrap.id = 'wrap-search';
    wrap.appendChild(form);

    document.body.appendChild(wrap);

    // When
    SearchAutocomplete.init();

    const suggestionsEl = wrap.querySelector('#search-suggestions');

    // Then
    expect(suggestionsEl).not.toBeNull();
    expect(suggestionsEl.getAttribute('role')).toBe('listbox');
    expect(suggestionsEl.hidden).toBe(true);
    expect(input.getAttribute('role')).toBe('combobox');
    expect(input.getAttribute('aria-expanded')).toBe('false');

    document.body.removeChild(wrap);
  });
});

describe('init event handlers', () => {
  let wrap, form, input, suggestionsEl;

  beforeEach(() => {
    jest.useFakeTimers();

    // Build DOM structure
    form = document.createElement('form');
    form.action = 'http://localhost/nhsbsa-digital-playbook/search/';

    input = document.createElement('input');
    input.id = 'search-field';
    form.appendChild(input);

    wrap = document.createElement('div');
    wrap.id = 'wrap-search';
    wrap.appendChild(form);

    document.body.appendChild(wrap);

    SearchAutocomplete.init();

    suggestionsEl = wrap.querySelector('#search-suggestions');
  });

  afterEach(() => {
    jest.useRealTimers();
    document.body.removeChild(wrap);
  });

  describe('input event', () => {
    test('shouldHideSuggestionsWhenQueryHasOneCharacter', () => {
      // Given
      input.value = 'a';

      // When
      input.dispatchEvent(new Event('input'));

      // Then
      expect(suggestionsEl.hidden).toBe(true);
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    test('shouldHideSuggestionsWhenQueryIsWhitespace', () => {
      // Given
      input.value = '   ';

      // When
      input.dispatchEvent(new Event('input'));

      // Then
      expect(suggestionsEl.hidden).toBe(true);
    });

    test('shouldHideSuggestionsWhenPagefindFailsToLoad', async () => {
      // Given
      input.value = 'testing query';

      // When
      input.dispatchEvent(new Event('input'));

      // Dynamic import fails in jsdom after the debounce expires.
      jest.advanceTimersByTime(250);

      // Let the rejected promise from import() settle
      await Promise.resolve();
      await Promise.resolve();

      // The catch handler should have hidden suggestions

      // Then
      expect(suggestionsEl.hidden).toBe(true);
    });

    test('shouldDelaySuggestionsWhenInputChangesBeforeDebounce', () => {
      // Given
      input.value = 'ab';
      input.dispatchEvent(new Event('input'));

      // Type again before debounce fires

      // When
      input.value = 'abc';
      input.dispatchEvent(new Event('input'));

      // The debounce has not expired since the second input.
      jest.advanceTimersByTime(100);

      // Then
      expect(suggestionsEl.hidden).toBe(true);
    });
  });

  describe('keydown event - ArrowDown', () => {
    test('shouldActivateFirstOptionWhenArrowDownIsPressed', () => {
      // Populate suggestions manually
      // Given
      showSuggestions(suggestionsEl, input, [
        { title: 'Item A', url: '/a/' },
        { title: 'Item B', url: '/b/' },
      ]);

      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      jest.spyOn(event, 'preventDefault');

      // When
      input.dispatchEvent(event);

      // Then
      expect(event.preventDefault).toHaveBeenCalled();
      const items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );
      expect(
        items[0].classList.contains('app-search-suggestions__item--active'),
      ).toBe(true);
    });

    test('shouldWrapToFirstOptionWhenArrowDownIsPressedAtEnd', () => {
      // Given
      showSuggestions(suggestionsEl, input, [
        { title: 'Item A', url: '/a/' },
        { title: 'Item B', url: '/b/' },
      ]);

      // Press down twice to reach last item, then once more to wrap
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));

      // When
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));

      const items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );

      // Then
      expect(
        items[0].classList.contains('app-search-suggestions__item--active'),
      ).toBe(true);
    });
  });

  describe('keydown event - ArrowUp', () => {
    test('shouldActivateLastOptionWhenArrowUpIsPressedWithoutSelection', () => {
      // Given
      showSuggestions(suggestionsEl, input, [
        { title: 'Item A', url: '/a/' },
        { title: 'Item B', url: '/b/' },
        { title: 'Item C', url: '/c/' },
      ]);

      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      jest.spyOn(event, 'preventDefault');

      // When
      input.dispatchEvent(event);

      // Then
      expect(event.preventDefault).toHaveBeenCalled();
      const items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );
      expect(
        items[2].classList.contains('app-search-suggestions__item--active'),
      ).toBe(true);
    });

    test('shouldActivatePreviousOptionWhenArrowUpIsPressed', () => {
      // Given
      showSuggestions(suggestionsEl, input, [
        { title: 'Item A', url: '/a/' },
        { title: 'Item B', url: '/b/' },
      ]);

      // Select the last option before moving up.
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));

      // When
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));

      const items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );

      // Then
      expect(
        items[0].classList.contains('app-search-suggestions__item--active'),
      ).toBe(true);
    });
  });

  describe('keydown event - Enter', () => {
    test('shouldPreventFormSubmissionWhenEnterSelectsActiveOption', () => {
      // Given
      showSuggestions(suggestionsEl, input, [
        { title: 'Target Page', url: '/target/' },
      ]);

      // Activate first item
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));

      const event = new KeyboardEvent('keydown', {
        key: 'Enter',
        cancelable: true,
      });
      jest.spyOn(event, 'preventDefault');

      // jsdom cannot navigate. Check the selected link and prevented submission.

      // When
      input.dispatchEvent(event);

      // Then
      expect(event.preventDefault).toHaveBeenCalled();
      const activeItem = suggestionsEl.querySelector(
        '.app-search-suggestions__item--active a',
      );
      expect(activeItem).not.toBeNull();
      expect(activeItem.href).toContain('/target/');
    });

    test('shouldAllowFormSubmissionWhenEnterHasNoActiveOption', () => {
      // Given
      showSuggestions(suggestionsEl, input, [{ title: 'Item A', url: '/a/' }]);

      const event = new KeyboardEvent('keydown', {
        key: 'Enter',
        cancelable: true,
      });
      jest.spyOn(event, 'preventDefault');

      // When
      input.dispatchEvent(event);

      // Then
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('keydown event - Escape', () => {
    test('shouldHideSuggestionsWhenEscapeIsPressed', () => {
      // Given
      showSuggestions(suggestionsEl, input, [{ title: 'Item A', url: '/a/' }]);

      // When
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      // Then
      expect(suggestionsEl.hidden).toBe(true);
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('keydown with no suggestions', () => {
    test('shouldAllowArrowKeyDefaultWhenSuggestionsAreEmpty', () => {
      // Given
      const event = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        cancelable: true,
      });
      jest.spyOn(event, 'preventDefault');

      // When
      input.dispatchEvent(event);

      // Then
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('click outside', () => {
    test('shouldHideSuggestionsWhenClickIsOutsideSearch', () => {
      // Given
      showSuggestions(suggestionsEl, input, [{ title: 'Item A', url: '/a/' }]);

      const outside = document.createElement('div');
      document.body.appendChild(outside);

      // When
      outside.dispatchEvent(new MouseEvent('click', { bubbles: true }));

      // Then
      expect(suggestionsEl.hidden).toBe(true);
      expect(input.getAttribute('aria-expanded')).toBe('false');

      document.body.removeChild(outside);
    });

    test('shouldKeepSuggestionsOpenWhenClickIsInsideSearch', () => {
      // Given
      showSuggestions(suggestionsEl, input, [{ title: 'Item A', url: '/a/' }]);

      // When
      input.dispatchEvent(new MouseEvent('click', { bubbles: true }));

      // Then
      expect(suggestionsEl.hidden).toBe(false);
    });
  });
});

describe('asynchronous suggestions', () => {
  let input, suggestions, pending, mockPagefind;

  beforeEach(() => {
    jest.useFakeTimers();
    document.body.innerHTML =
      '<div id="wrap-search"><form action="/nhsbsa-digital-playbook/search/"><input id="search-field"></form></div>';
    input = document.getElementById('search-field');
    pending = {};
    mockPagefind = {
      options: jest.fn().mockResolvedValue(),
      search: jest.fn(
        (query) =>
          new Promise((resolve) => {
            pending[query] = resolve;
          }),
      ),
    };
    SearchAutocomplete.init(() => Promise.resolve(mockPagefind));
    suggestions = document.getElementById('search-suggestions');
  });

  afterEach(() => {
    jest.useRealTimers();
    document.body.innerHTML = '';
  });

  async function flush() {
    await new Promise(jest.requireActual('timers').setImmediate);
  }

  async function type(query) {
    input.value = query;
    input.dispatchEvent(new Event('input'));
    jest.advanceTimersByTime(200);
    await flush();
  }

  async function resolve(query, title) {
    pending[query]({
      results: [
        { data: () => Promise.resolve({ meta: { title }, url: '/result/' }) },
      ],
    });
    await flush();
  }

  test('shouldKeepLatestResultsWhenOlderSearchFinishesLast', async () => {
    // Given
    await type('design');
    await type('research');

    // When
    await resolve('research', 'Research guidance');
    await resolve('design', 'Old design result');

    // Then
    expect(suggestions.textContent).toContain('Research guidance');
    expect(suggestions.textContent).not.toContain('Old design result');
    expect(mockPagefind.options).toHaveBeenCalledTimes(1);
  });

  test.each([
    { condition: 'EscapeIsPressed', action: 'Escape' },
    { condition: 'QueryIsCleared', action: 'clear' },
    { condition: 'ClickIsOutsideSearch', action: 'outside' },
    { condition: 'FocusLeavesSearch', action: 'blur' },
  ])('shouldKeepSuggestionsClosedWhen$condition', async ({ action }) => {
    // Given
    await type('design');

    // When
    if (action === 'Escape')
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    if (action === 'clear') {
      input.value = '';
      input.dispatchEvent(new Event('input'));
    }
    if (action === 'outside')
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    if (action === 'blur')
      input.dispatchEvent(
        new FocusEvent('focusout', {
          bubbles: true,
          relatedTarget: document.body,
        }),
      );
    await resolve('design', 'Design guidance');

    // Then
    expect(suggestions.hidden).toBe(true);
    expect(input.getAttribute('aria-expanded')).toBe('false');
    expect(input.hasAttribute('aria-activedescendant')).toBe(false);
  });

  test('shouldAllowEnterAndArrowKeysWhenSuggestionsAreDismissed', async () => {
    // Given
    await type('design');
    await resolve('design', 'Design guidance');
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    const escape = new KeyboardEvent('keydown', {
      key: 'Escape',
      cancelable: true,
    });

    // When
    input.dispatchEvent(escape);
    const events = [];
    for (const key of ['Enter', 'ArrowDown']) {
      const event = new KeyboardEvent('keydown', { key, cancelable: true });
      input.dispatchEvent(event);
      events.push(event);
    }

    // Then
    expect(escape.defaultPrevented).toBe(true);
    expect(input.value).toBe('design');
    expect(input.getAttribute('aria-expanded')).toBe('false');
    expect(events.every((event) => !event.defaultPrevented)).toBe(true);
  });

  test('shouldEncodeQueryWhenAllResultsLinkIsCreated', async () => {
    // Given
    await type('design & research');

    // When
    await resolve('design & research', 'Design guidance');
    const link = suggestions.lastChild.querySelector('a');

    // Then
    expect(new URL(link.href).searchParams.get('q')).toBe('design & research');
    expect(link.textContent).toBe('View all results for "design & research"');
  });
});
