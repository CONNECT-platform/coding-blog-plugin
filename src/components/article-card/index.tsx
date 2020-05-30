import { RendererLike, rl } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core/transport';
import { BehaviorSubject } from 'rxjs';

import { ArticleCardStyle } from './style';


export interface ArticleCardOptions {
  src: string;
  style: 'row' | 'box'
}


function extractTitle(title: string | null) {
  if (title) {
    if ((window as any).source?.title) {
      const prefix = (window as any).source.title.base + (window as any).source.title.connector;
      if (title.startsWith(prefix)) return title.substr(prefix.length);
      else return title;
    }
  } else return title;
}


export function ArticleCard(
  this: ThemedComponentThis<CodedocTheme>,
  options: ArticleCardOptions,
  renderer: RendererLike<any, any>,
) {
  const classes = this.theme.classes(ArticleCardStyle);

  const src = new BehaviorSubject<string>(options.src);
  const img = new BehaviorSubject<string>('https://coding.blog/banner.svg');
  const title = new BehaviorSubject<string>('Some Article');
  const desc = new BehaviorSubject<string>('Some description for this article');

  this.track({
    bind() {
      let url = options.src;
      if (options.src.startsWith('/')) {
        url = `${(window as any).source?.namespace || ''}${options.src}`;
      }

      src.next(url);

      fetch(url)
      .then(response => response.text())
      .then(html => {
        const marker = <div/>;
        marker.innerHTML = html;
        let candidate;

        if (candidate = marker.querySelector('meta[property="og:title"], meta[name="twitter:title"]'))
          title.next(extractTitle(candidate.getAttribute('content')) || title.value);
        else if (candidate = marker.querySelector('head > title'))
          title.next(extractTitle(candidate.textContent) || title.value);

        if (candidate = marker.querySelector(
          'meta[property="og:description"],' +
          'meta[name="twitter:description"],' +
          'meta[name="description"]'
        )) {
          desc.next(candidate.getAttribute('content') || '');
        } else if (candidate = marker.querySelector('#-codedoc-container > p')) {
          desc.next(candidate.textContent || '');
        }else {
          desc.next('');
        }

        if (candidate = marker.querySelector('meta[property="og:image"], meta[name="twitter:image"]'))
          img.next(candidate.getAttribute('content') || img.value);
        else if (candidate = marker.querySelector('img[data-hero]')) {
          img.next(candidate.getAttribute('src') || img.value);
        }
      });
    }
  });

  return <a {...(options.style==='box'?{'data-article-card-grid':''}:{})}
            href={src}
            class={`${classes.card} ${options.style === 'box' ? classes.cardcol: ''}`}>
    <div style={rl`background-image: url('${img}')`} class={classes.img}/>
    <div class={classes.text}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  </a>
}


export const ArticleCard$ = /*#__PURE__*/transport(ArticleCard);