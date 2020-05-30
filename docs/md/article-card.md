> :Hero src=https://images.unsplash.com/photo-1532152865523-267662aa4483?w=1990&h=600&fit=crop&crop=bottom

# Article Cards

It is a common thing to reference your other blog posts in a particular blog post. For example
you might want to highlight your latest blog posts on your blog's first page.

While simply links do the trick, you can use the `ArticleCard` component to achieve the same
with much more eye-catching results:

```md
> :ArticleCard src=/hero
```

> :ArticleCard src=/hero

The `src` attribute notifies the URL of the referenced article. The `ArticleCard` component will
first try to fetch card information using social media meta tags (OpenGraph and Twitter cards), which
are by default set on each blogpost generated with `coding-blog-plugin`. If that strategy fails,
it will fallback to the following:

- It will use the first hero image of the page as the card image
- It will use the title of the page ([guessed by **CODEDOC**](https://codedoc.cc/docs/config/page#page-title))
- It will use the first paragraph of the page for the description

---

## Card Style

Article cards support two styles: `row` (as seen above, the default) and `box`. You
can set the style via `style` property:

```md
> :ArticleCard src=/hero, style=box

> :ArticleCard src=/title, style=box
```

> :ArticleCard src=/hero, style=box

> :ArticleCard src=/title, style=box

> :ToCPrevNext

---

_Hero image by [Annie Spratt](https://unsplash.com/@anniespratt) from [Unsplash](https://unsplash.com)_

<br>

> :Author src=github
