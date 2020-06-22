import { RendererLike } from '@connectv/html';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';

import { HeroStyle } from './style';


export interface HeroOptions {
  src: string;
  mode?: 'light' | 'dark';
  target?: 'mobile' | 'desktop';
  leak?: number;
}


export function Hero(
  this: ThemedComponentThis<CodedocTheme>,
  options: HeroOptions,
  renderer: RendererLike<any, any>,
  content: any,
) {
  const classes = this.theme.classes(HeroStyle);
  const opts: {[key: string]: string} = { class: classes.hero };
  if (options.mode) opts['data-mode'] = options.mode;
  if (options.target) opts['data-target'] = options.target;
  if (options.leak) opts['style'] = `margin-bottom: -${options.leak}`;

  let img$ = <img src={options.src} class={classes.image} data-hero/>;
  if (options.target) {
    let media = '';
    if (options.target === 'desktop') media = '(min-width: 1025px)';
    else media = '(max-width: 1024px)';
    img$ = <picture>
      <source media={media} srcset={options.src}/>
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        class={classes.image} data-src={options.src} data-hero/>
    </picture>;
  }

  return <div {...opts}>
    {img$}
    <span class={classes.caption}>{content}</span>
  </div>;
}