> :DarkLight
> > :InLight
> >
> > ![banner](/img/cb-banner.svg)
>
> > :InDark
> > 
> > ![banner](https://connect-platform.github.io/coding-blog-boilerplate/img/cb-banner-dark.svg)

> :Big
>
>`coding.blog` Plugin

A plugin designed to help you
create a nice programming blog using [**CODEDOC**](https://codedoc.cc), 
with config helpers for hosting it on [`coding.blog`](https://coding.blog),
though you can host it anywhere you see fit (i.e. [GitHub Pages](https://pages.github.com/)).

---

## What is CODEDOC?

[**CODEDOC**](https://codedoc.cc) is an open-source tool for easily creating modern, elegant articles
about programming. It creates beautiful and feature-rich JAMStack apps from a bunch
of markdown files, which can then be hosted on services like GitHub Pages or `coding.blog`.

**CODEDOC** was designed to help with writing documentation and tutorials, but due
to its customizability it can be easily adapted for writing beautiful blogs as well, which
is basically what this plugin provides.

<br>

> :Buttons
> > :Button label=CODEDOC Documentation, url=https://codedoc.cc

---

## What is `coding.blog`?

[`coding.blog`](https://coding.blog) is a semi-centralized blog platform for all things coding.
You maintain your content on your own git repo (which must be a **CODEDOC** project), and hook it up
to `<your>.coding.blog`. The `coding.blog` curators team will then make sure that people who would
like to hear about your posts, do hear about it.

<br>

> :Buttons
> > :Button label=Learn More about coding.blog, url=https://coding.blog

---

## What does this plugin provide?

Most importantly, a set of **CODEDOC** components specifically for blogging:

> :ArticleCard src=/hero, style=box

> :ArticleCard src=/title, style=box

> :ArticleCard src=/author, style=box

> :ArticleCard src=/article-card, style=box

> :ArticleCard src=/tags, style=box

> :ArticleCard src=/rss, style=box

> :ArticleCard src=/misc, style=box

It also provides stylesheets for making your posts more _blog-looking_, plugs in post-processors
that automatically add Twitter and Open-Graph meta tags for each page, and offers a convenient
way of [configuring your assets for hosting on `coding.blog`](/assets).

---

## Getting Started

The recommended way of creating a blog for `coding.blog` is to [fork this repository](https://github.com/CONNECT-platform/coding-blog-boilerplate/fork), as it has all the necessary plugins and dependencies (including this plugin)
pre-installed, and is pre-configured for easy deployment to GitHub Pages and `coding.blog`.

<br>

### On Existing CODEDOC Repo

If you already have a blog repo based on **CODEDOC**, you can install this plugin like this:


**STEP 1**\
Install the plugin:
```bash
cd .codedoc && npm i @codedoc/coding-blog-plugin
```
> :Buttons
> > :CopyButton

**STEP 2**\
Edit `.codedoc/config.ts` and add the plugin to `plugins`:

```ts | .codedoc/config.ts
import { configuration } from '@codedoc/core';
/*!*/import { codingBlog } from '@codedoc/coding-blog-plugin';  // --> import the plugin

// ...

export const config = /*#__PURE__*/configuration({
  // ...
  plugins: [
    // ...
/*!*/    codingBlog()                                           // --> plug the plugin in
  ],
  // ...
});
```

> :MetaOverride target=description
>
> A CODEDOC plugin for blogging. Write elegant blogs on programming using Markdown, host on GitHub Pages or coding.blog or any CDN.

> :ToCPrevNext

---

> :Author src=github