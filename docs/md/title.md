> :Hero src=https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1990&h=600&fit=crop

# Title

The `Title` component is useful for the title of the page. It will be shown in a prominent
manner, will be picked up by **CODEDOC**'s automatic title guessing mechanism, but will not show-up
in the content navigation list:

```md
> :Title
>
> Title of The Page
```

> > :Title
> >
> > Title of The Page

You can override the default size of the title using `size` property:

```md
> :Title size=32px
>
> Title of The Page
```

> > :Title size=32px
> >
> > Title of The Page

---

## Lead

A title can also have a _lead_, which is a sentence preceding it, displayed
in a smaller font:

```md
> :Title lead=The lead will be here
>
> Title of The Page
```

> > :Title lead=The lead will be here
> >
> > Title of The Page

You can also override the default size of the lead using `leadSize` property:

```md
> :Title lead=The lead will be here, leadSize=14px
>
> Title of The Page
```

> > :Title lead=The lead will be here, leadSize=14px
> >
> > Title of The Page

---

## Color

You can specify the color using `color` property:

```md
> :Title color=#c72c41
>
> Title of The Page
```

> > :Title color=#c72c41
> >
> > Title of The Page

Besides standard CSS color values, you can also provide the following special values:

- `text` (default): will set the color to text color according to theme
- `primary`: will set the color to primary color according to theme
- `primary-contrast`: will set the color to primary contrast color (black or white based on brightness of primary color)
- `background`: will set the color to background color according to theme

These special values have the benefit of adapting to light mode / dark mode and the theme,
though if you want to _leak_ the title upon a hero image (via [`leak` property](/hero#leaking-text-on-hero-images))
it might be a better idea to provide a static color for maximizing readability on the hero image.

---

## Shadow

In case you want to [_leak_ the title upon a hero image](/hero#leaking-text-on-hero-images),
sometimes a text-shadow can increase its readability drastically. You can provide that
via the `shadow` property:

```md
> :Title shadow=0 2px 6px #0000009e, color=white
>
> Title of The Page
```

> > :Title shadow=0 2px 6px #0000009e, color=white
> >
> > Title of The Page


> :ToCPrevNext

---

_Hero image by [AbsolutVision](https://unsplash.com/@freegraphictoday) from [Unsplash](https://unsplash.com)_

<br>

> :Author src=github