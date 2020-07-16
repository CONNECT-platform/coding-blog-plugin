import { RendererLike } from '@connectv/html';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';

import { TagStyle } from './styles';


export function Tag(
  this: ThemedComponentThis<CodedocTheme>,
  _: any,
  renderer: RendererLike<any, any>,
  content: any,
) {
  const classes = this.theme.classes(TagStyle);
  const el$ = <span>{content}</span>;
  let tag = (el$.textContent || '').trim().replace(/\s/g, '_').replace(/[^\w-]/g, '');
  if (tag.startsWith('#')) tag = tag.substr(1);
  return <a class={classes.tag} data-page-tag={tag}>
    <code>
      <span class={classes.indicator}>#</span>
      {tag}
    </code>
  </a>;
}