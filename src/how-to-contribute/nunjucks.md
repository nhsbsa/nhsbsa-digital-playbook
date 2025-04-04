---
layout: article
title: "Nunjucks"
description: "How to enhance your documents with Nunjucks"
tags: playbook
order: 7
---
{% from "colorBlock/macro.njk" import colorBlock %}
{% from "colorCard/macro.njk" import colorCard %}

[Markdown](../markdown/) is the easiest way to start writing content, but the playbook can use other tools to layout content, including Nunjucks macros:

* [Nunjucks][nunjucks]

Nunjucks macros can be used in markdown files when they are imported at the top of the document, just after the _frontmatter_:

```text
{% raw %}
{% from "colorBlock/macro.njk" import colorBlock %}
{% endraw %}
```

The macro can then be used anywhere within the markdown file.

## Colour block

Renders a square colour block to illustrate a Hex colour value.

::: details Attributes
| Name | Type | Required | Description
 ------|------|----------|------------|
| color      | String | true  | a Hex encoded RGB color |
| blockSize  | String | false | `xs`, `s`, `m`, `l`, `xl` |\
|            |        |       | defaults to `m` |
:::

```text
{% raw %}
{% from "colorBlock/macro.njk" import colorBlock %}

{{ colorBlock({
    "color": "#005EB8",
    "blockSize": "l"})
}}
{% endraw %}
```

renders as:

{{ colorBlock({
    "title": "NHS Blue",
    "color": "#005EB8",
    "blockSize": "l"})
}}

## Colour card

Renders a 'card' showing a colorBlock and colour information.

::: details Attributes
| Name | Type | Required | Description
 ------|------|----------|------------|
| heading      | String | false  | A heading for the colour card |
| headingLevel | String | false  | The HTML heading level (`h1`-`h4`). Defaults to `h2` |
| color        | String | true  | a Hex encoded RGB colour |
| pantone      | String | false | The [Pantone](https://www.pantone-colours.com/) colour code |
| ral          | String | false | The [RAL](https://www.ralcolorchart.com/) colour code |
| blockSize    | String | false | `xs`, `s`, `m`, `l`, `xl` |\
|              |        |       | defaults to `m` |
:::

```text
{% raw %}
{% from "colorCard/macro.njk" import colorCard %}

{{ colorCard({
    "heading": "NHS Blue",
    "color": "#005EB8",
    "pantone": "300",
    "ral": "5017",
    "blockSize": "l"})
}}
{% endraw %}
```

renders as:


<ul class="nhsuk-grid-row nhsuk-card-group">
	<li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
        {{ colorCard({
        "heading": "NHS Blue",
        "color": "#005EB8",
        "pantone": "300",
        "ral": "5017",
        "blockSize": "l"})
        }}
    </li>
 </ul>



[nunjucks]: <https://mozilla.github.io/nunjucks/>
