---
layout: article
title: "Markdown"
description: "How to enhance your documents with effective Markdown"
tags: playbook
order: 5
---
This guide shows you some playbook specific tips. For general guidance on Markdown consult these references:

* [Markdown][commonmark]
* [Markdown tutorial][commonmark_tutorial]

## Abbreviations

We use [markdown-it-abbr][markdown_it_abbr] to render abbreviations.

```text
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification is maintained by the W3C.
```

renders as:

> *[HTML]: Hyper Text Markup Language
> *[W3C]:  World Wide Web Consortium
> The HTML specification is maintained by the W3C.

## Admonition

We use [markdown-it-admonition][markdown_it_admonition] to render callouts. We currently only support styling for `warning` to align with the [NHS warning callout][nhs_warning_callout] component

```md
!!! warning Warning title
warning detail text
!!!
```

renders as:

> !!! warning Warning title
> warning detail text
> !!!

## Cards

We use [markdown-it-container][markdown_it_container] to wrap sections of content in additional HTML. This is used to format content as the [NHS Card design component][nhs_card].

Wrap the markdown content with `::: card` and `:::` markers

This is particularly effective when combined with [definition lists](../markdown#definition-list).

```text
::: card
### Section heading

Term 1
: Definition one

Term 2
: Definition two
:::
```

render as:

> ::: card
>
> ### Section heading
>
> Term 1
> : Definition one
>
> Term 2
> : Definition two
> :::

## Code tabs

We use [markdown-it-codetabs][markdown_it_codetabs] to provide code snippets in multiple languages.

```text
    ```java [g1:Java]
    logger.info("Here is some data - {}", data);
    ```

    ```javascript [g1:Javascript]
    logger.log('info', 'Here is some data -  %s', data);
    ```
```

renders as:

> ```java [g1:Java]
> logger.info("Here is some data - {}", data);
> ```
> 
> ```javascript [g1:Javascript]
> logger.log('info', 'Here is some data -  %s', data);
> ```

## Definition list

We use [markdown-it-deflist][markdown_it_deflist] to provide definition lists, styled to match the [NHS Summary list][nhs_summary_list] component.

```text
Term 1
: Definition one including `nested markdown`
  and multi line content

Term 2
: Definition two

```

renders as:

> Term 1
> : Definition one including `nested markdown`
>   and multi line content
>
> Term 2
> : Definition two

## Expanding details

We use [markdown-it-container][markdown_it_container] to provide an [expanding details component][nhs_expanding_details].

Wrap the markdown content with `::: details` and `:::` markers

```md
::: details show more
 
Content here

:::
```

renders as:

> ::: details show more
> 
> Content here
> 
> :::

## Highlight

We use [markdown-it-mark][markdown_it_mark] to provided highlight of text.

```text
==highlighted==
```

renders as:

> ==highlighted==

## Supertext and subtext

We use [markdown-it-sub][markdown_it_sub] and [markdown-it-sup][markdown_it_sup] to provide super-text and sub-text

```text
H~2~0
29^th^
```

renders as:

> H~2~0
> 29^th^

## Tables

We use a [MultiMarkdown][markdown_it_multimd_table] table syntax to enhance rendering of tables.

This provides:

* Cell spans over columns
* Cell spans over rows
* Divide rows into sections
* Multiple table headers
* Table caption
* Block-level elements such as lists, codes...
* Omitted table header

## Emojis

We use the [markdown-it-emoji][markdown_it_emoji] extension to render github supported emojis.

Here are some useful examples:

* :white_check_mark: `:white_check_mark:`
* :x: `:x:`
* :question: `:question:`
* :+1: `:+1:`
* :100: `:100:`
* :wrench: `:wrench:`
* :seedling: `:seedling:`
* :memo: `:memo:`
* :warning: `:warning:`
* :no_entry: `:no_entry:`

A complete list can be [found here](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

[commonmark]: <https://spec.commonmark.org/0.30/>
[commonmark_tutorial]: <https://commonmark.org/help/tutorial/>
[markdown_it_multimd_table]: <https://github.com/redbug312/markdown-it-multimd-table>
[markdown_it_admonition]: <https://www.npmjs.com/package/markdown-it-admonition>
[markdown_it_abbr]: <https://www.npmjs.com/package/markdown-it-abbr>
[markdown_it_codetabs]: <https://www.npmjs.com/package/markdown-it-codetabs>
[markdown_it_container]: <https://www.npmjs.com/package/markdown-it-container>
[markdown_it_deflist]: <https://www.npmjs.com/package/markdown-it-deflist>
[markdown_it_emoji]: <https://www.npmjs.com/package/markdown-it-emoji>
[markdown_it_mark]: <https://www.npmjs.com/package/markdown-it-mark>
[markdown_it_sub]: <https://www.npmjs.com/package/markdown-it-sub>
[markdown_it_sup]: <https://www.npmjs.com/package/markdown-it-sup>
[nhs_warning_callout]: <https://service-manual.nhs.uk/design-system/components/warning-callout>
[nhs_summary_list]: <https://service-manual.nhs.uk/design-system/components/summary-list>
[nhs_card]: <https://service-manual.nhs.uk/design-system/components/card>
[nhs_expanding_details]: <https://service-manual.nhs.uk/design-system/components/details>
