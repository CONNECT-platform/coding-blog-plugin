> :Hero src=https://images.unsplash.com/photo-1485579149621-3123dd979885?w=1990&h=600&fit=crop&crop=top

# RSS

You can add RSS to your blog by providing a simple configuration in `.codedoc/config.ts`:

```ts | .codedoc/config.ts
import { configuration } from '@codedoc/core';
import { codingBlog } from '@codedoc/coding-blog-plugin';  // --> import the plugin

// ...

export const config = /*#__PURE__*/configuration({
  // ...
  plugins: [
    // ...
/*!*/    codingBlog({                                           // --> plug the plugin in
/*!*/      // ...
/*!*/      feed: {
/*!*/        url: 'https://<your>.coding.blog',                 // --> the base URL for your RSS feed
/*!*/      }
/*!*/    })
  ],
  // ...
});
```

<br>

The base-url is dependent on your hosting provider. In case of `coding.blog`, it will simply
be the root URL of your blog. If you are hosting your blog on somewhere else and your blog is
not hosted on the root of the domain (e.g. it is `https://some.where/my-blog/` instead of `https://some.where`),
then set it to the address of the root domain, not your blog URL.

Once configured, the plugin will generate the associated files, `_feed.atom`, `_feed.json` and `_feed.rss`,
in the same folder where the rest of your HTML files will be generated to. These files will be generated
upon each build, using git logs to determine when a file was created, when was it last updated, who is the author, etc.

---

## Providing RSS Links

RSS files are generated in 3 formats:
- [Atom](https://tools.ietf.org/html/rfc4287#:~:text=Atom%20is%20an%20XML%2Dbased,each%20entry%20has%20a%20title.),
  which will be accessible on `https://<your>.coding.blog/_feed.atom`
- [RSS2.0](https://validator.w3.org/feed/docs/rss2.html),
  which will be accessible on `https://<your>.coding.blog/_feed.rss`
- [JSON Feed](https://www.jsonfeed.org/),
  which will be accessible on `https://<your>.coding.blog/_feed.json`

<br>

Based on your preferences, you can provide the link for any of these resources in your blogs. The following example
shows how you can add a nice RSS link to your footer:

```tsx | .codedoc/content/footer.tsx
import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer, Icon } from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  return <_Footer>
    ...
/*!*/    <a href="https://<your>.coding.blog/_feed.rss" target="_blank">
/*!*/      <Icon>rss_feed</Icon> RSS
/*!*/    </a>
  </_Footer>;
}
```

---

## Excluding Files

By default, `index.md` and `404.md` will be excluded from the feed. You can expand this list by
writing markdown file addresses (relative to **CODEDOC** search base) in the plugin's config:

```ts | .codedoc/config.ts
import { configuration } from '@codedoc/core';
import { codingBlog } from '@codedoc/coding-blog-plugin';  // --> import the plugin

// ...

export const config = /*#__PURE__*/configuration({
  // ...
  plugins: [
    // ...
/*!*/    codingBlog({                                           // --> plug the plugin in
/*!*/      // ...
/*!*/      feed: {
/*!*/        url: 'https://<your>.coding.blog',                 // --> the base URL for your RSS feed
/*!*/        exclude: ['this.md', 'path/to/that.md'],           // --> exclude these files from the feed
/*!*/      }
/*!*/    })
  ],
  // ...
});
```

> :ToCPrevNext

---

_Hero image by [Matt Botsford](https://unsplash.com/@mattbotsford) from [Unsplash](https://unsplash.com)_

<br>

> :Author src=github