> :Hero src=https://images.unsplash.com/photo-1577634667308-ee53b03ee1c9?w=1990&h=600&fit=crop

# Tags

You can add tags to any part of your blog-post, using the inline `Tag` component:

```md
> So this is some text that has [some tags](:Tag).
```

> So this is some text that has [some tags](:Tag).

<br>

In tags, whitespaces are replaced by underlines, and any characters beyond letters (uppercase or lowercase),
digits, underline and dash will get removed automatically from the tag. Additionally,
you may or may not include the `#` character at the beginning, the `Tag` component will add it if it is absent.

Tags will be added to `<meta name='keywords'/>` header. They will also be added to a specific
meta tag with property `blog-tags`, which will in the future be used by `coding.blog` for categorization of blog posts.
Additionally, in the future they will be linked to tag search pages on `coding.blog` (and perhaps other domains,
this will be configurable when it is deployed).


> :ToCPrevNext

---

_Hero image by [Jan Baborák](https://unsplash.com/@one_more_jan) from [Unsplash](https://unsplash.com)_

<br>

> :Author src=github