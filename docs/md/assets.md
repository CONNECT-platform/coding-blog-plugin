> :Hero src=https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1990&h=600&fit=crop

# Assets

If you want to host your own static assets (images, stylesheets, scripts, etc) and 
reference them in your blog posts, you need to tell `coding.blog`'s build pipeline
to pull them from your repo and put them alongside the rest of your content on the CDNs.

You can simply do that by providing a list of files/folders that should be pulled
from the root of your blog's repo to the plugin function:

```ts | .codedoc/config.ts
import { configuration } from '@codedoc/core';
/*!*/import { codingBlog } from '@codedoc/coding-blog-plugin';  // --> import the plugin

// ...

export const config = /*#__PURE__*/configuration({
  // ...
  plugins: [
    // ...
/*!*/    codingBlog({             // --> plug the plugin in
/*!*/      assets: [              // --> indicate your assets
/*!*/        'favicon.ico',       // --> indicate your assets
/*!*/        'docs/img',          // --> indicate your assets
/*!*/      ]                      // --> indicate your assets
/*!*/    })
  ],
  // ...
});
```

You can subsequently link to your assets using `/<path-to-asset-from-repo-root>` format.
For example, with the config setup above, you can set the fav icon of your blog like this:

```ts | .codedoc/config.ts
import { configuration } from '@codedoc/core';

// ...

export const config = /*#__PURE__*/configuration({
  // ...
  page: {
/*!*/    favicon: '/favicon.ico'        // --> link to the favicon
    // ...
  }
  // ...
});
```

Or you can use the images in `docs/img` folder like this:

```md | some-blog.md
<!-- ... -->

/*!*/![Image Alt Text](/docs/img/something.png)

<!-- ... -->
```

---

## Dev Setup

Since `coding.blog` fetches and routes to static files relative to the root of your repo, in order
to keep your **CODEDOC** dev server in sync, you should also set the root of the assets that it would
fetch to the root of the repo:

```ts | .codedoc/config.ts
import { configuration } from '@codedoc/core';
/*!*/import { codingBlog } from '@codedoc/coding-blog-plugin';  // --> import the plugin

// ...

export const config = /*#__PURE__*/configuration({
  // ...
  dest: {
/*!*/    assets: '.',             // --> so the local dev-server fetches assets from the root folder of repo
    // ...
  },
  // ...
  plugins: [
    // ...
    codingBlog({             // --> plug the plugin in
      assets: [              // --> indicate your assets
        'favicon.ico',       // --> indicate your assets
        'docs/img',          // --> indicate your assets
      ]                      // --> indicate your assets
    })
  ],
  // ...
});
```

> [info](:Icon) **NOTE**
>
> By default, you do not have to configure this as this is the default configuration of **CODEDOC**.

---

## Other Hosting Providers

The `assets` config of this property is only designed to inform [`coding.blog`](https://coding.blog)'s 
build pipeline on how to manage your assets. For other hosting providers, you would need to
figure out how to configure their settings to properly serve your assets, and keep your local dev
config in sync with that for dev convenience.

For example, GitHub Pages by default will also serve static files from the root of the repo. This
is in sync with how `coding.blog` and **CODEDOC**'s default work, so you wouldn't need any extra
configuration to make your blog simultaenously publishable on `coding.blog` and GitHub Pages.

That said, it is sometimes useful to be able to have different configurations for different
hosting environments at the same time. For example, in case of GitHub Pages,
it is recommended practice to isolate build files into a _git ignored_ folder such as `dist` and 
then use GitHub Actions to build using **CODEDOC** on each push and deploy contents of `dist` folder
to root of `gh-pages` branch, as this would help keep generated files separate from the `master` branch
which eases version control and collaboration 
([read this for more info on this setup](https://codedoc.cc/docs/config/output#build-files-on-git)).

The recommended solution for such a situation is using environment variables to mark build for different
environments. In case of the aforementioned setup, you could for example configure **CODEDOC** and
GitHub Actions like this to be able to publish to GitHub Pages and `coding.blog` at the same time:

> :Tabs
> > :Tab title=CODEDOC config
> > ```ts | .codedoc/config.ts
> > import { configuration } from '@codedoc/core';
> > 
> > // ...
> > 
> > export const config = /*#__PURE__*/configuration({
> >   // ...
> >/*!*/   dest: {
> >/*!*/     namespace: '/<your-repo-name>',                                           // --> in case you are not using a custom domain with your GitHub Pages
> >/*!*/     html: 'dist',                                                             // --> build everything to `dist`
> >/*!*/     assets: process.env.GITHUB_BUILD === 'true' ? 'dist' : '.',               // --> build assets to `dist` if building for GitHub Pages
> >/*!*/     bundle: process.env.GITHUB_BUILD === 'true' ? 'bundle' : 'dist/bundle',   // --> build assets to `dist` if building for GitHub Pages
> >/*!*/     styles: process.env.GITHUB_BUILD === 'true' ? 'styles' : 'dist/styles',   // --> build assets to `dist` if building for GitHub Pages
> >/*!*/     // ...
> >/*!*/   },
> >   // ...
> > });
> > ```
>
> > :Tab title=GitHub Action config
> > ```yml | .github/workflows/deploy-to-gh-pages.yml
> > name: Deploy to GitHub Pages
> > on:
> >   push:
> >     branches:
> >       - master
> > jobs:
> >   build-and-deploy:
> >     runs-on: ubuntu-latest
> >     steps:
> >       - name: Checkout
> >         uses: actions/checkout@v2
> > 
> >       - name: Build
> >         run: |
> >           # install .codedoc dependencies
> >           (cd .codedoc && npm install)
> >           # install codedoc
> >           npm install @codedoc/cli
> >           # build repo
> >           (PATH=$(npm bin):$PATH && codedoc build)
> >/*!*/          # copy assets
> >/*!*/          cp favicon.ico dist/
> >/*!*/          ...
> >/*!*/         env:                           # --> set the environment variable
> >/*!*/           GITHUB_BUILD: true           # --> set the environment variable
> > 
> >       - name: Deploy
> >         uses: JamesIves/github-pages-deploy-action@releases/v3
> >         with:
> >           GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
> >           BRANCH: gh-pages
> >           FOLDER: dist
> > ```


> :ToCPrevNext

---

_Hero image by [Mr Cup / Fabien Barral](https://unsplash.com/@iammrcup) from [Unsplash](https://unsplash.com)_

<br>

> :Author src=github