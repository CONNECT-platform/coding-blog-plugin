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

## Small Text

The `Small` component similarly allows you to write smaller pieces of text (for disclaimers perhaps):

```md
> :Small
>
> Goodbye _Blue sky!_
```

> > :Small
> >
> > Goodbye _Blue sky!_

---

## Centering Content

You can center content (images or text) using `Center` component:

```md
> :Center
>
> Hellow, this is now centered:
>
> ![some image](https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?fit=crop&w=256&h=256&q=80)
> > :Small
> >
> > _Image by [RhondaK Native Florida Folk Artist](https://unsplash.com/@rhondak) from [Unsplash](https://unsplash.com)_
```

> > :Center
> >
> > Hellow, this is now centered:
> >
> > ![some image](https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?fit=crop&w=256&h=256&q=80)
> > > :Small
> > >
> > > _Image by [RhondaK Native Florida Folk Artist](https://unsplash.com/@rhondak) from [Unsplash](https://unsplash.com)_

---

## Quotes

You can use the `Quote` component to quote from other people:

```md
> :Quote from=Douglas Adams
>
> A common mistake that people make when trying to design something completely foolproof
> is to underestimate the inenuitiy of complete fools.
```

> :Quote from=Douglas Adams
>
> A common mistake that people make when trying to design something completely foolproof
> is to underestimate the inenuitiy of complete fools.

The `from` argument is optional and can be omitted.

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

---

## Moved Pages

It sometimes happen that you want to move pages to a different URL (for example there is a typo in its address).
In such a case, maintain the old markdown file (with the same pathname), and add a `Moved` component
to it, pointing to the new new URL:

```md | /posts/old.md

> :Moved to=/new

```

You can see this in action on this link (which redirects back to this page):

<div>
<a href="/moved-sample" target="_blank">Moved Sample</a>
</div>

> :ToCPrevNext

---

_Hero image by [Mikael Kristenton](https://unsplash.com/@mikael_k) from [Unsplash](https://unsplash.com)_

<br>

> :Author src=github