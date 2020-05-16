import { ThemedComponentThis, themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const SpaceStyle = themedStyle<CodedocTheme>(theme => ({
  space: {
    '@media screen and (max-width: 1024px)': {
      '&[data-target="desktop"]': {
        display: 'none'
      }
    },

    '@media screen and (min-width: 1025px)': {
      '&[data-target="mobile"]': {
        display: 'none'
      }
    },
  }
}));


export interface SpaceOptions {
  space?: string;
  target?: 'mobile' | 'desktop';
}


export function Space(this: ThemedComponentThis<CodedocTheme>, options: SpaceOptions, renderer: any) {
  const classes = this.theme.classes(SpaceStyle);
  const opts: {[key: string]: string} = {};
  if (options.target) opts['data-target'] = options.target;
  return <div class={classes.space} style={`height: ${options.space || '72px'}`} {...opts}/>
}
