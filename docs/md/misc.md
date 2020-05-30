> :Hero src=https://images.unsplash.com/photo-1492540747731-d05a66dc2461?w=1990&h=600&fit=crop

# Miscellaneous Components

## Big Text

The `Big` component allows you to write bigger texts than usual (that are not titles):

```md
> :Big
>
> Hellow **World**!
```

> > :Big
> >
> > Hellow **World**!

---

## Space

The `Space` component allows for controllable empty space inside your content:

```md
So some stuff

> :Space

Some other stuff, spaced from those
```

> So some stuff
>
> > :Space
>
> Some other stuff, spaced from those

You can manage the height of the empty area using `space` attribute:


```md
So some stuff

> :Space space=32px

Some other stuff, spaced from those

> :Space space=64px

And some other stuff still
```

> So some stuff
>
> > :Space space=32px
>
> Some other stuff, spaced from those
>
> > :Space space=64px
>
> And some other stuff still

You can also provide responsive spacing using `target` attribute. It can assume `desktop` and `mobile`
values, and would only appear on the target device defined:

```md
> :Space space=24px, target=mobile       <!--> This guy only appears on mobile -->

> :Space space=48px, target=desktop      <!--> This guy only appears on desktops -->
```

> :ToCPrevNext

---

_Hero image by [Mikael Kristenton](https://unsplash.com/@mikael_k) from [Unsplash](https://unsplash.com)_

<br>

> :Author src=github