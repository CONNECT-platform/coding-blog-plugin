import { RendererLike } from '@connectv/html';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';

import { PageHeadStyle } from './style';


export type PageHeadColorPreset = 'black' | 'white' | 'text' | 'background' | 'primary' | 'primary-contrast';


export function isPreset(color: string): color is PageHeadColorPreset {
  return color === 'black' || color === 'white' || color === 'text' ||
         color === 'primary' || color === 'primary-contrast' || color === 'background';
}


export interface PageHeadOptions {
  lead?: string;
  color?: PageHeadColorPreset | string;
  shadow?: string;
  size?: string;
  leadSize?: string;
}


export function PageHead(
  this: ThemedComponentThis<CodedocTheme>,
  options: PageHeadOptions, 
  renderer: RendererLike<any, any>, 
  content: any
) {
  const classes = this.theme.classes(PageHeadStyle);
  let _color = undefined;
  let _class = undefined;

  if (options.color) {
    if (isPreset(options.color)) _class = options.color;
    else _color = options.color;
  }

  return <h1 class={`${classes.h} ${_class || ''}`}>
    <span style={`${_color?`color: ${_color};`:''} 
      text-shadow: ${options.shadow || '0 2px 6px #000000C8'}; 
      font-size: ${options.size || '48px'}`
    }>
    {options.lead? 
      <span style={`font-size: ${options.leadSize || '24px'};  margin-bottom: -48px; display: block`}>
        {options.lead}&nbsp;
      </span>
      : ''}
    {content}
    </span>
  </h1>
}