(function () {
  const document = globalThis.document;
  if (!document) return;

  const window = document.defaultView;

  document
    .querySelectorAll('[data-content-tabs]')
    .forEach((group, groupIndex) => {
      if (group.dataset.enhanced) return;

      const panels = Array.from(group.children).filter((child) =>
        child.matches('[data-content-tab]'),
      );
      if (panels.length < 2) return;

      const tablist = document.createElement('div');
      tablist.className = 'app-content-tabs__list';
      tablist.setAttribute('role', 'tablist');
      tablist.setAttribute('aria-label', group.dataset.label);

      const tabs = panels.map((panel, panelIndex) => {
        const prefix = `content-tabs-${groupIndex + 1}-${panelIndex + 1}`;
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = 'app-content-tabs__tab';
        tab.id = `${prefix}-tab`;
        tab.textContent = panel.dataset.label;
        tab.setAttribute('role', 'tab');
        panel.id = `${prefix}-panel`;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', tab.id);
        panel.tabIndex = 0;
        tab.setAttribute('aria-controls', panel.id);
        tablist.appendChild(tab);
        return tab;
      });

      function selectTab(selectedIndex) {
        tabs.forEach((tab, index) => {
          const selected = index === selectedIndex;
          tab.setAttribute('aria-selected', String(selected));
          tab.tabIndex = selected ? 0 : -1;
          panels[index].hidden = !selected;
        });
      }

      function revealTarget(hash) {
        if (!hash) return;

        let target;
        try {
          target = document.getElementById(decodeURIComponent(hash.slice(1)));
        } catch {
          return;
        }

        const index = panels.findIndex((panel) => panel.contains(target));
        if (index !== -1) {
          selectTab(index);
          target.scrollIntoView();
        }
      }

      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectTab(index));
        tab.addEventListener('keydown', (event) => {
          const destinations = {
            ArrowRight: (index + 1) % tabs.length,
            ArrowLeft: (index + tabs.length - 1) % tabs.length,
            Home: 0,
            End: tabs.length - 1,
          };
          const nextIndex = destinations[event.key];
          if (nextIndex === undefined) return;
          event.preventDefault();
          selectTab(nextIndex);
          tabs[nextIndex].focus();
        });
      });

      group.prepend(tablist);
      group.dataset.enhanced = 'true';
      selectTab(0);
      revealTarget(window.location.hash);

      window.addEventListener('hashchange', () =>
        revealTarget(window.location.hash),
      );
      document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href]');
        if (!link) return;

        const url = new window.URL(link.href, window.location.href);
        if (
          url.origin === window.location.origin &&
          url.pathname === window.location.pathname
        ) {
          revealTarget(url.hash);
        }
      });
    });
})();
