---
layout: article
title: "Writing an article"
description: "Step by step instructions on how to write a playbook article"
tags: playbook
order: 5
---
To write a new article:

* Create a new file in a subdirectory of the `/src` folder.
  Read about our [information architecture](../information-architecture) to decide which subdirectory to use.
  Name the file with a `.md` file extension.

  e.g. `my-article.md`

* Add this standard snippet of [frontmatter][11ty_frontmatter] at the top

```yaml
---
layout: article
title: "Your title here"
description: "Your description here"
status: DRAFT
tags: your-tag-here
order: numeric-order
---
## First article heading
```

* Leave the `layout` value as `article`.

* Update the `title` and `description` values as required.

* The article should be set at `DRAFT` status until you are ready to `REVIEW` or publish as `FINAL`.

* The `tags` and `order` frontmatter control where the article appears in the site. This is covered below.

* Write your content

### Document control

You can declare status, issue sheet and document review information in the frontmatter data.

See the [document control](../document-control) article for details.

### Content

Content should come after the last `---` in the front matter and use [Markdown][commonmark] syntax.

Content is usually written in plain text using Markdown to apply a standardised formatting for things like headings and hyperlinks. Markdown files use a file extension of `.md`.

* [Markdown tutorial][commonmark_tutorial]

### Linking to related articles

You can link to other articles by using the [Markdown links][commonmark_tutorial_links] syntax in your content. You should omit the `.md` extension and use `../` syntax to go up a directory: So if linking to an article `my-article.md` in the same directory, you should use this link syntax:

```md
[My article](../my-article)
```

You can also display a group of related articles, by adding a 'related' attribute to your front matter:

```yaml
related:
  title: Related articles
  tag: another-tag
```

In this example, we will display all articles that have the tag, `another-tag`. If you look at the bottom of the [how to contribute article](../../how-to-contribute), you can see how related articles appear.

### Using tags and order

* __Tags__
  The `tags` attribute should be defined if you want the file to appear in 'related' articles. For articles to appear on the homepage, use `home`.

* __Order__
  The numeric `order` attribute should be defined to control where this article appears amongst others with the same tag.. Low values come first.

* __Multiple tags__
  You can define multiple tags using this syntax so that the file appears in multiple collections.

```markdown
tags: [home, dev]
```

Sometimes you may want to apply a different order in the different collections however. In this case you should use this syntax:

```markdown
order:
    home: 1
    dev: 100
```

## Tips

### Adopt clear file names

Directory and File names are reflected in the final URL in the playbook so choose something that will read well.

Use all lower case with dashes to separate words.

### Use directories to organise the articles

Directories aren't specifically needed, but they make it easier for playbook authors to organise the information.

### Use headings to structure content

[Headings][commonmark_tutorial_headings] will display in the navigable _table of contents_ and can be bookmarked by our users.

## References

* [Markdown][commonmark]
* [Markdown tutorial][commonmark_tutorial]

[commonmark]: <https://spec.commonmark.org/0.30/>
[commonmark_tutorial]: <https://commonmark.org/help/tutorial/>
[commonmark_tutorial_links]: <https://commonmark.org/help/tutorial/07-links.html>
[commonmark_tutorial_headings]: <https://commonmark.org/help/tutorial/04-headings.html>
[11ty_frontmatter]: <https://www.11ty.dev/docs/data-frontmatter/>
