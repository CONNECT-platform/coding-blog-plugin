> :Hero src=https://images.unsplash.com/photo-1533069027836-fa937181a8ce?w=2000&h=600&fit=crop

# Hero Images

Hero images help you quickly establish the general mood of your blog post. You can add
them to your posts using `Hero` markdown component:

```md
> :Hero src=https://images.unsplash.com/photo-1533069027836-fa937181a8ce?w=2000&h=600&fit=crop

# Hero Images

...
```

If you use Hero images on your page, the first image will be used as an automatic banner
for social media cards (i.e. when you share on Twitter or Facebook). You of-course override
this by providing [page-specific meta overrides](https://codedoc.cc/docs/markdown/meta-override).

---

## Captions

You can add captions to your hero images by adding some content to the blockquote:

```md
> :Hero src=https://images.unsplash.com/photo-1533069027836-fa937181a8ce?w=2000&h=600&fit=crop
>
> Photo by [Paweł Czerwiński](https://unsplash.com/@pawel_czerwinski) on [Unsplash](https://unsplash.com)
```

> :Hero src=https://images.unsplash.com/photo-1533069027836-fa937181a8ce?w=2000&h=600&fit=crop
>
> Photo by [Paweł Czerwiński](https://unsplash.com/@pawel_czerwinski) on [Unsplash](https://unsplash.com)

> [warning](:Icon) **CAUTION**
>
> I would recommend against adding captions to first hero image of the page, as it might confuse
> the automatic title guessing mechanism of **CODEDOC**.

---

## Dark Mode / Light Mode

You can limit a particular hero image to dark mode or light mode, in case you prefer using different
images for each mode. Simply set the `mode` attribute to `dark` or `light`, to limit the hero for that mode:

```md
> :Hero src=https://images.unsplash.com/photo-1540850840617-cae8f6e46284?w=2000&h=600&fit=crop,
/*!*/>       mode=dark
>
> Photo by [David Severin](https://unsplash.com/@desiderius) on [Unsplash](https://unsplash.com)

> :Hero src=https://images.unsplash.com/photo-1533069027836-fa937181a8ce?w=2000&h=600&fit=crop,
/*!*/>       mode=light
>
> Photo by [Paweł Czerwiński](https://unsplash.com/@pawel_czerwinski) on [Unsplash](https://unsplash.com)
```

> :Hero src=https://images.unsplash.com/photo-1540850840617-cae8f6e46284?w=2000&h=600&fit=crop,
>       mode=dark
>
> Photo by [David Severin](https://unsplash.com/@desiderius) on [Unsplash](https://unsplash.com)

> :Hero src=https://images.unsplash.com/photo-1533069027836-fa937181a8ce?w=2000&h=600&fit=crop,
>       mode=light
>
> Photo by [Paweł Czerwiński](https://unsplash.com/@pawel_czerwinski) on [Unsplash](https://unsplash.com)

---

## Responsive Heroes

You can similarly restrict a hero image to a particular target device via `target` attribute,
that can be set to either `mobile` or `desktop`:

```md
> :Hero src=https://images.unsplash.com/photo-1540850840617-cae8f6e46284?w=2000&h=600&fit=crop,
/*!*/>       target=desktop
>
> Photo by [David Severin](https://unsplash.com/@desiderius) on [Unsplash](https://unsplash.com)

> :Hero src=https://images.unsplash.com/photo-1540850840617-cae8f6e46284?w=1200&h=600&fit=crop,
/*!*/>       target=mobile
>
> Photo by [David Severin](https://unsplash.com/@desiderius) on [Unsplash](https://unsplash.com)
```

> :Hero src=https://images.unsplash.com/photo-1540850840617-cae8f6e46284?w=2000&h=600&fit=crop,
>       target=desktop
>
> Photo by [David Severin](https://unsplash.com/@desiderius) on [Unsplash](https://unsplash.com)

> :Hero src=https://images.unsplash.com/photo-1540850840617-cae8f6e46284?w=1200&h=600&fit=crop,
>       target=mobile
>
> Photo by [David Severin](https://unsplash.com/@desiderius) on [Unsplash](https://unsplash.com)

---

## Leaking Text On Hero Images

It is a cool effect to have text leak upon a hero image. You can replicate this effect via 
`leak` attribute:

```md
> :Hero src=https://images.unsplash.com/photo-1497005367839-6e852de72767?w=2000&h=600&fit=crop,
/*!*/>       leak=64px,
>       mode=light

> :Hero src=https://images.unsplash.com/photo-1545376823-0fb35ac6a3e0?w=2000&h=600&fit=crop,
/*!*/>       leak=64px,
>       mode=dark
```


> :Hero src=https://images.unsplash.com/photo-1497005367839-6e852de72767?w=2000&h=600&fit=crop,
>       leak=64px,
>       mode=light

> :Hero src=https://images.unsplash.com/photo-1545376823-0fb35ac6a3e0?w=2000&h=600&fit=crop,
>       leak=64px,
>       mode=dark

Some text that follows the Hero image, going on top of it now. You need to be careful since
the color of the text changes based on dark mode/light mode, so pick a proper image with proper contrast
for each mode. Alternatively, you can use the [Title](/title) component on top of your hero images
and make its color invariant towards light mode / dark mode.

Also be careful that it is usually better to use distinct leak values for mobile and desktop.

> :ToCPrevNext

---

_P.S. the credits for the last photos goes to [Arus Cengiz](https://unsplash.com/@arzucengiz) and 
[Hello I'm Nik](https://unsplash.com/@helloimnik) both from [Unsplash](https://unsplash.com) as well._

<br>

> :Author src=github