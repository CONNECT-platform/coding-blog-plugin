import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const PageHeadStyle = themedStyle<CodedocTheme>(theme => ({
  h: {
    '&.white': {color: 'white'},
    '&.black': {color: 'black'},
    '&.primary': {
      color: theme.light.primary,
      'body.dark &': { color: theme.dark.primary, },
      '@media (prefers-color-scheme: dark)': { 'body:not(.dark-mode-animate) &': { color: theme.dark.primary, } },
    },
    '&.primary-contrast': {
      color: theme.light.primaryContrast,
      'body.dark &': { color: theme.dark.primaryContrast },
      '@media (prefers-color-scheme: dark)': { 'body:not(.dark-mode-animate)': { color: theme.dark.primaryContrast } },
    },
    '&.text': {
      color: theme.light.text,
      'body.dark &': { color: theme.dark.text, },
      '@media (prefers-color-scheme: dark)': { 'body:not(.dark-mode-animate) &': { color: theme.dark.text, } },
    },
    '&.background': {
      color: theme.light.background,
      'body.dark &': { color: theme.dark.background },
      '@media (prefers-color-scheme: dark)': { 'body:not(.dark-mode-animate)': { color: theme.dark.background } },
    }
  }
}));
