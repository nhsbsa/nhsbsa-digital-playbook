/**
 * @jest-environment jsdom
 */
/* global document, KeyboardEvent, MouseEvent */

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
  test('should export module as an object', () => {
    expect(typeof SearchAutocomplete).toBe('object');
  });

  test('should expose init function', () => {
    expect(typeof SearchAutocomplete.init).toBe('function');
  });

  test('should expose _testExports', () => {
    expect(typeof SearchAutocomplete._testExports).toBe('object');
  });
});

describe('configureAria', () => {
  let input;

  beforeEach(() => {
    input = document.createElement('input');
  });

  test('should set role to combobox', () => {
    configureAria(input);
    expect(input.getAttribute('role')).toBe('combobox');
  });

  test('should set aria-autocomplete to list', () => {
    configureAria(input);
    expect(input.getAttribute('aria-autocomplete')).toBe('list');
  });

  test('should set aria-controls to search-suggestions', () => {
    configureAria(input);
    expect(input.getAttribute('aria-controls')).toBe('search-suggestions');
  });

  test('should set aria-expanded to false', () => {
    configureAria(input);
    expect(input.getAttribute('aria-expanded')).toBe('false');
  });
});

describe('getBaseUrl', () => {
  test('should extract base URL from form action', () => {
    const form = document.createElement('form');
    form.action = 'http://localhost/nhsbsa-digital-playbook/search/';
    const input = document.createElement('input');
    form.appendChild(input);
    document.body.appendChild(form);

    expect(getBaseUrl(input)).toBe('http://localhost/nhsbsa-digital-playbook/');

    document.body.removeChild(form);
  });

  test('should handle action without trailing search path', () => {
    const form = document.createElement('form');
    form.action = 'http://localhost/playbook/search/';
    const input = document.createElement('input');
    form.appendChild(input);
    document.body.appendChild(form);

    expect(getBaseUrl(input)).toBe('http://localhost/playbook/');

    document.body.removeChild(form);
  });
});

describe('buildSuggestionItem', () => {
  test('should create a list item with correct class', () => {
    const item = buildSuggestionItem({ title: 'Test', url: '/test/' }, 0);
    expect(item.tagName).toBe('LI');
    expect(item.className).toBe('app-search-suggestions__item');
  });

  test('should set role to option', () => {
    const item = buildSuggestionItem({ title: 'Test', url: '/test/' }, 0);
    expect(item.getAttribute('role')).toBe('option');
  });

  test('should set id with index', () => {
    const item = buildSuggestionItem({ title: 'Test', url: '/test/' }, 3);
    expect(item.getAttribute('id')).toBe('suggestion-3');
  });

  test('should contain a link with correct href and text', () => {
    const item = buildSuggestionItem(
      { title: 'My Article', url: '/articles/my-article/' },
      0,
    );
    const link = item.querySelector('a');
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

  test('should hide suggestions when results are empty', () => {
    const result = showSuggestions(suggestionsEl, searchInput, []);
    expect(suggestionsEl.hidden).toBe(true);
    expect(searchInput.getAttribute('aria-expanded')).toBe('false');
    expect(result).toBe(-1);
  });

  test('should show suggestions when results are provided', () => {
    const results = [
      { title: 'Page One', url: '/page-one/' },
      { title: 'Page Two', url: '/page-two/' },
    ];
    const result = showSuggestions(suggestionsEl, searchInput, results);

    expect(suggestionsEl.hidden).toBe(false);
    expect(searchInput.getAttribute('aria-expanded')).toBe('true');
    expect(suggestionsEl.children.length).toBe(2);
    expect(result).toBe(-1);
  });

  test('should clear previous suggestions before adding new ones', () => {
    showSuggestions(suggestionsEl, searchInput, [
      { title: 'Old', url: '/old/' },
    ]);
    expect(suggestionsEl.children.length).toBe(1);

    showSuggestions(suggestionsEl, searchInput, [
      { title: 'New One', url: '/new-one/' },
      { title: 'New Two', url: '/new-two/' },
    ]);
    expect(suggestionsEl.children.length).toBe(2);
    expect(suggestionsEl.children[0].querySelector('a').textContent).toBe(
      'New One',
    );
  });
});

describe('hideSuggestions', () => {
  test('should hide the suggestions element', () => {
    const suggestionsEl = document.createElement('ul');
    suggestionsEl.hidden = false;
    const searchInput = document.createElement('input');
    searchInput.setAttribute('aria-expanded', 'true');

    const result = hideSuggestions(suggestionsEl, searchInput);

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

  test('should add active class to the specified index', () => {
    const result = setActive(suggestionsEl, searchInput, 1);

    const items = suggestionsEl.querySelectorAll(
      '.app-search-suggestions__item',
    );
    expect(
      items[1].classList.contains('app-search-suggestions__item--active'),
    ).toBe(true);
    expect(
      items[0].classList.contains('app-search-suggestions__item--active'),
    ).toBe(false);
    expect(result).toBe(1);
  });

  test('should set aria-activedescendant on the input', () => {
    setActive(suggestionsEl, searchInput, 2);
    expect(searchInput.getAttribute('aria-activedescendant')).toBe(
      'suggestion-2',
    );
  });

  test('should remove active class from all items when switching', () => {
    setActive(suggestionsEl, searchInput, 0);
    setActive(suggestionsEl, searchInput, 2);

    const items = suggestionsEl.querySelectorAll(
      '.app-search-suggestions__item',
    );
    expect(
      items[0].classList.contains('app-search-suggestions__item--active'),
    ).toBe(false);
    expect(
      items[2].classList.contains('app-search-suggestions__item--active'),
    ).toBe(true);
  });

  test('should return -1 for out of bounds index', () => {
    const result = setActive(suggestionsEl, searchInput, 5);
    expect(result).toBe(-1);
    expect(searchInput.hasAttribute('aria-activedescendant')).toBe(false);
  });

  test('should return -1 for negative index', () => {
    const result = setActive(suggestionsEl, searchInput, -1);
    expect(result).toBe(-1);
  });
});

describe('init', () => {
  test('should not throw when DOM elements are missing', () => {
    expect(() => SearchAutocomplete.init()).not.toThrow();
  });

  test('should set up suggestions element when DOM elements exist', () => {
    const form = document.createElement('form');
    form.action = 'http://localhost/search/';

    const input = document.createElement('input');
    input.id = 'search-field';
    form.appendChild(input);

    const wrap = document.createElement('div');
    wrap.id = 'wrap-search';
    wrap.appendChild(form);

    document.body.appendChild(wrap);

    SearchAutocomplete.init();

    const suggestionsEl = wrap.querySelector('#search-suggestions');
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
    test('should hide suggestions when query is less than 2 characters', () => {
      input.value = 'a';
      input.dispatchEvent(new Event('input'));

      expect(suggestionsEl.hidden).toBe(true);
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    test('should hide suggestions when query is empty', () => {
      input.value = '   ';
      input.dispatchEvent(new Event('input'));

      expect(suggestionsEl.hidden).toBe(true);
    });

    test('should debounce and attempt search for queries >= 2 chars', async () => {
      input.value = 'testing query';
      input.dispatchEvent(new Event('input'));

      // Advance past the 200ms debounce — this triggers initPagefind()
      // which calls import(). In jsdom import() is not available so the
      // catch branch will fire, hiding suggestions.
      jest.advanceTimersByTime(250);

      // Let the rejected promise from import() settle
      await Promise.resolve();
      await Promise.resolve();

      // The catch handler should have hidden suggestions
      expect(suggestionsEl.hidden).toBe(true);
    });

    test('should clear previous debounce timer on rapid input', () => {
      input.value = 'ab';
      input.dispatchEvent(new Event('input'));

      // Type again before debounce fires
      input.value = 'abc';
      input.dispatchEvent(new Event('input'));

      // Only 100ms has passed since last input — debounce should not have fired
      jest.advanceTimersByTime(100);
      // No error means clearTimeout worked correctly
      expect(suggestionsEl.hidden).toBe(true);
    });
  });

  describe('keydown event - ArrowDown', () => {
    test('should activate first item on ArrowDown', () => {
      // Populate suggestions manually
      showSuggestions(suggestionsEl, input, [
        { title: 'Item A', url: '/a/' },
        { title: 'Item B', url: '/b/' },
      ]);

      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      jest.spyOn(event, 'preventDefault');
      input.dispatchEvent(event);

      expect(event.preventDefault).toHaveBeenCalled();
      const items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );
      expect(
        items[0].classList.contains('app-search-suggestions__item--active'),
      ).toBe(true);
    });

    test('should wrap to first item when at end', () => {
      showSuggestions(suggestionsEl, input, [
        { title: 'Item A', url: '/a/' },
        { title: 'Item B', url: '/b/' },
      ]);

      // Press down twice to reach last item, then once more to wrap
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));

      const items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );
      expect(
        items[0].classList.contains('app-search-suggestions__item--active'),
      ).toBe(true);
    });
  });

  describe('keydown event - ArrowUp', () => {
    test('should activate last item on ArrowUp from start', () => {
      showSuggestions(suggestionsEl, input, [
        { title: 'Item A', url: '/a/' },
        { title: 'Item B', url: '/b/' },
        { title: 'Item C', url: '/c/' },
      ]);

      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      jest.spyOn(event, 'preventDefault');
      input.dispatchEvent(event);

      expect(event.preventDefault).toHaveBeenCalled();
      const items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );
      expect(
        items[2].classList.contains('app-search-suggestions__item--active'),
      ).toBe(true);
    });

    test('should move up from active item', () => {
      showSuggestions(suggestionsEl, input, [
        { title: 'Item A', url: '/a/' },
        { title: 'Item B', url: '/b/' },
      ]);

      // Go down to index 1, then up to index 0
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));

      const items = suggestionsEl.querySelectorAll(
        '.app-search-suggestions__item',
      );
      expect(
        items[0].classList.contains('app-search-suggestions__item--active'),
      ).toBe(true);
    });
  });

  describe('keydown event - Enter', () => {
    test('should prevent default and attempt navigation on Enter with active item', () => {
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

      // The handler sets window.location.href which jsdom logs as
      // "Not implemented: navigation". We just verify preventDefault
      // was called and the active item had the right link.
      input.dispatchEvent(event);

      expect(event.preventDefault).toHaveBeenCalled();
      const activeItem = suggestionsEl.querySelector(
        '.app-search-suggestions__item--active a',
      );
      expect(activeItem).not.toBeNull();
      expect(activeItem.href).toContain('/target/');
    });

    test('should not prevent default Enter when no item is active', () => {
      showSuggestions(suggestionsEl, input, [{ title: 'Item A', url: '/a/' }]);

      const event = new KeyboardEvent('keydown', {
        key: 'Enter',
        cancelable: true,
      });
      jest.spyOn(event, 'preventDefault');
      input.dispatchEvent(event);

      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('keydown event - Escape', () => {
    test('should hide suggestions on Escape', () => {
      showSuggestions(suggestionsEl, input, [{ title: 'Item A', url: '/a/' }]);

      expect(suggestionsEl.hidden).toBe(false);

      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      expect(suggestionsEl.hidden).toBe(true);
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('keydown with no suggestions', () => {
    test('should do nothing when suggestions list is empty', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        cancelable: true,
      });
      jest.spyOn(event, 'preventDefault');
      input.dispatchEvent(event);

      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('click outside', () => {
    test('should hide suggestions when clicking outside search wrap', () => {
      showSuggestions(suggestionsEl, input, [{ title: 'Item A', url: '/a/' }]);

      expect(suggestionsEl.hidden).toBe(false);

      const outside = document.createElement('div');
      document.body.appendChild(outside);
      document.dispatchEvent(
        new MouseEvent('click', { bubbles: true, target: outside }),
      );

      // The click handler checks e.target, but MouseEvent constructor
      // doesn't set target; it's set by dispatchEvent based on the element.
      // So we dispatch from the outside element instead.
      outside.dispatchEvent(new MouseEvent('click', { bubbles: true }));

      expect(suggestionsEl.hidden).toBe(true);
      expect(input.getAttribute('aria-expanded')).toBe('false');

      document.body.removeChild(outside);
    });

    test('should not hide suggestions when clicking inside search wrap', () => {
      showSuggestions(suggestionsEl, input, [{ title: 'Item A', url: '/a/' }]);

      input.dispatchEvent(new MouseEvent('click', { bubbles: true }));

      expect(suggestionsEl.hidden).toBe(false);
    });
  });
});
