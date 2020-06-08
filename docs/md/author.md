> :Hero src=https://images.unsplash.com/photo-1530819568329-97653eafbbfa?w=1990&h=600&fit=crop&crop=bottom

# Author Information

You can easily provide author and publishing (latest publish date) information using `Author` markdown component:

```md
> :Author name=Jackie Chan,                                                           <!--> name of the author -->
>         date=Today,                                                                 <!--> last publish date (of this article) -->
>         avatar=https://www.sueddeutsche.de/image/sz.1.1643818/704x396?v=1522204548, <!--> avatar URL -->
>         url=https://en.wikipedia.org/wiki/Jackie_Chan                               <!--> author profile URL -->
```

<br>

> :Author name=Jackie Chan,
>         date=Today,
>         avatar=https://www.sueddeutsche.de/image/sz.1.1643818/704x396?v=1522204548,
>         url=https://en.wikipedia.org/wiki/Jackie_Chan

The `Author` component accepts the following attributes:

- `name`: name of the author
- `avatar`: URL of the avatar of the author
- `url`: the profile URL for the author (like GitHub account, Twitter account, etc)
- `date`: the last publish date of the article

---

## Automatic Inference

If your blog is hosted on GitHub, the `Author` component can also automatically fetch
all necessary information from GitHub. In that case, instead of all the aforementioned
attributes, just set `src` attribute to `github`:

```md
> :Author src=github
```

<br>

> :Author src=github

For automatic inference, name, avatar and GitHub profile of the author will be used (the user with
last commit on the markdown file). The last publish date will also be set to the date of the last commit on
the markdown file.

> [warning](:Icon) **IMPORTANT**
>
> For automatic inference to work, you need to configure your blog's github repository properly, via `.codedoc/config.ts`:
> ```ts | .codedoc/config.ts
> import { configuration } from '@codedoc/core';
> 
> //...
> 
> export const config = /*#__PURE__*/configuration({
>   //...
>   misc: {
>/*!*/     github: {
>/*!*/       user: 'johndoe',          // --> name of the user on GitHub owning the repo
>/*!*/       repo: 'my-blog',         // --> name of the repo on GitHub
>/*!*/     },
>     // ...
>   },
>   //...
> });
> ```

When using automatic inference, you can also override the publish date by providing the `date` attribute:

```md
> :Author src=github, date=4 Apr 1968
```

<br>

> :Author src=github, date=4 Apr 1968

> :ToCPrevNext

---

_Hero image by [Da Kraplak](https://unsplash.com/@darya_kraplak) from [Unsplash](https://unsplash.com)_

<br>

> :Author src=github
