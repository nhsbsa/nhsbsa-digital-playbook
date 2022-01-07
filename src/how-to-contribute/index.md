---
layout: article
title: "How to contribute to the playbook"
tags: [home, 11ty]
order: 1000
related:
  tag: playbook
---
## Information architecture

We have a Miro board that describes the intended structure for the Playbook.

We generally have three levels in our heirarchy:

* Home
* Section
* Additional detail

### Home content

The home page displays a list of articles that are jumping off points into different sections. These include

* _Role based content_
  * Delivery (including agile)
  * Content Design
  * Research
  * Design
  * Architecture
  * Development
  * Test
  * Platform
  * Support
* _People and ways of working content including_
  * Communities
  * Our people
  * Admin
  * Meetings

### Section content

Each section will contain further articles related to a section heading.

### Additional content

For more extensive and detailed content we may link from section articles into further specialist articles. 

For instance the _Developer/testing_ section article links to articles about _writing clean tests_, or _writing integration tests_.

## Writing an article file

* Create a new file _somewhere_ under the `/src` directory. Name it with a `.md` file extension.

  e.g. `my-article.md`

* Add this standard snippet of text at the top

```yaml
---
layout: article
title: "Your title here"
description: "Your description here"
tags: your-tag-here
order: numeric-order
---
```

* Amend the [frontmatter][11ty_frontmatter] with the correct `title`, `description`, `tags` and `order`.
  `tags` and `order` control where this article will appear as related articles elsewhere in the site. This is covered later in this how-to.

* Write your content

### Content

Content should come after the last `---` in the front matter and use [Markdown][commonmark] syntax.

Content is usually written in plain text using Markdown to apply a standardised formatting for things like headings and hyperlinks. Markdown files use a file extension of `.md`.

* [Markdown tutorial][commonmark_tutorial]

### Linking to related articles

You _can_ link to other articles just by using the [Markdown links][commonmark_tutorial_links] syntax in your prose.

You can also display a group of related articles, by adding a 'related' attribute to your front matter:

```yaml
related:
  tag: another-tag
```

In this example, we will display all articles that have the tag, `another-tag`. If you look at the bottom of this article, you can see how rfelated articles appear.

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
