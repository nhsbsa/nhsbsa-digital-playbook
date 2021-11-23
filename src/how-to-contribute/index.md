---
layout: article
title: "How to contribute to the playbook"
tags: home
order: 1000
---

## Information architecture

The playbook is written as two _types_ of file:

* Article
  An article contains the real content of the playbook. Articles should use headings so that a navigable table of contents allows people to

* Collection
  A collection contains links to a group of _similar_ articles. The articles are layed out as 'cards' showing the title, description and last modified date.

### Tags

Each collections will only show articles that are tagged apropriately. For example, the _Development_ collection will show all articles that




---

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

---

## References

* [Github][github_nhsbsa_digital_playbook]
* [Git][git]
* [Git tutorial][git_tutorial]
* [Markdown][commonmark]
* [Markdown tutorial][commonmark_tutorial]
* [Eleventy][11ty]

[github_nhsbsa_digital_playbook]: <https://github.com/nhsbsa/nhsbsa-digital-playbook>
[Git]: <https://git-scm.com/>
[git_tutorial]: <>
[commonmark]: <https://spec.commonmark.org/0.30/>
[commonmark_tutorial]: <https://commonmark.org/help/tutorial/>
[11ty]: <https://www.11ty.dev/docs/>
