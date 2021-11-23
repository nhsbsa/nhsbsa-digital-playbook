---
layout: article
title: "How to contribute to the playbook"
tags: home
order: 1000
---

## Information architecture

The playbook is written using two _types_ of file:

* Article
  An article contains the real content of the playbook.
  We use [Markdown][commonmark_tutorial] to structure and format the content.

* Collection
  A collection contains links to a group of qsimilar articles. The articles are layed out as 'cards' showing the title, description and last modified date.

Articles define the order in which they appear and can be shared across more than one collection using tags.

## Writing an article file

* Create a new file _somewhere_ under the `/src` directory.

* Add this standard snippet of text

```markdown
---
layout: article
title: "Your title here"
description: "Your description here"
tags: your-tag-here
order: numeric-order
---
## First heading
```

* Amend the [frontmatter][11ty_frontmatter] with the correct `title`, `description`, `tags` and `order`.

* Write your content

## Writing a collection file

* Create a new directory _somewhere_ under the `/src` directory

* Create a file called `index.md` in that directory

* Add this standard snippet of text

```markdown
---
layout: collection
title: "Your title here"
description: "Your description here"
tags: home
order: numeric-order
collection_tag: your-collection-tag
pagination:
    data: collections.your-collection-tag
    size: 50
---
## First heading
```

* Amend the [frontmatter][11ty_frontmatter] with the correct `title`, `description`, `tags` and `order`.
  Note that the `tags` and `order` attributes refer to the collection you want _this collection_ to appear in. In most cases, you should use the `home` tag to show your new collection on the playbook homepage.

* Amend the [frontmatter][11ty_frontmatter] with the correct `collection_tag` and `pagination.data`.
  The `pagination.data` value must start with `collection.` as this is part of the underlying framework.

## Using tags and order in collections

### Tags

The `tags` attribute should be defined in both file types (collection or article). If you want the file to appear in the homepage, use the `home` tag.

### Order

The numeric `order` attribute should be defined in both file types (collection or article). The value will be compared against the `order` of other articles in a collection to determine where it appears. Low values come first.

### Multiple tags

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

## Technologies

The playbook uses these technologies to generate the playbook.

### Git and Github

The source files for the Playbook are held in a [Git][git] repository hosted at [Github][github_nhsbsa_digital_playbook].

* [Git tutorial][git_tutorial]

### Markdown

Content is usually written in plain text using [Markdown][commonmark] to apply a standardised formatting for things like headings and hyperlinks. Markdown files use a file extension of `.md`.

* [Markdown tutorial][commonmark_tutorial]

### Eleventy

We use a tool called _Eleventy_ to generate the playbook documentation. If you need more functionality than we've described here, take a look at their [documentation][11ty] to find out what's possible.

If you want to enhance the playbook with more advanced features, you'll find most of the source under the `/lib` folder in Github.

## References

* [Git][git]
* [Github][github_nhsbsa_digital_playbook]
* [Git tutorial][git_tutorial]
* [Markdown][commonmark]
* [Markdown tutorial][commonmark_tutorial]
* [Eleventy][11ty]

[github_nhsbsa_digital_playbook]: <https://github.com/nhsbsa/nhsbsa-digital-playbook>
[Git]: <https://git-scm.com/>
[git_tutorial]: <https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners>
[commonmark]: <https://spec.commonmark.org/0.30/>
[commonmark_tutorial]: <https://commonmark.org/help/tutorial/>
[commonmark_tutorial_headings]: <https://commonmark.org/help/tutorial/04-headings.html>
[11ty]: <https://www.11ty.dev/docs/>
[11ty_frontmatter]: <https://www.11ty.dev/docs/data-frontmatter/>
