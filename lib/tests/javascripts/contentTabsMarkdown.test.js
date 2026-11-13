const markdown = require('../../_libraries/markdown');

describe('content tabs Markdown', () => {
  test('renders prose and code in separate panels without hiding content', () => {
    const html = markdown.render(
      ':::: tabs Dependency manager\n\n::: tab uv\n\n### uv-managed projects\n\nReview dependencies.\n\n```bash\nuv sync --locked\n```\n\n:::\n\n::: tab conda\n\n### conda-managed projects\n\n- Review channels.\n\n:::\n\n::::',
    );

    expect(html).toContain('data-content-tabs data-label="Dependency manager"');
    expect(html).toContain('data-content-tab data-label="uv"');
    expect(html).toContain('data-content-tab data-label="conda"');
    expect(html).toContain('id="uv-managed-projects"');
    expect(html).toContain('id="conda-managed-projects"');
    expect(html).toContain('<p>Review dependencies.</p>');
    expect(html).toContain('uv sync --locked');
    expect(html).not.toContain('hidden');
    expect(html.match(/<section /g)).toHaveLength(2);
    expect(html.match(/<\/section>/g)).toHaveLength(2);
  });

  test('escapes labels used as HTML attributes', () => {
    const html = markdown.render(
      ':::: tabs Tools "quoted"\n\n::: tab uv "quoted"\n\nContent\n\n:::\n\n::::',
    );

    expect(html).toContain('data-label="Tools &quot;quoted&quot;"');
    expect(html).toContain('data-label="uv &quot;quoted&quot;"');
  });

  test('does not change ordinary Markdown', () => {
    const html = markdown.render('## Guidance\n\nShared requirements.');

    expect(html).toContain('id="guidance"');
    expect(html).not.toContain('data-content-tabs');
  });
});
