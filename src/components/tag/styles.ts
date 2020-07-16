import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const TagStyle = themedStyle<CodedocTheme>(theme => ({
  tag: {
    cursor: 'pointer',
    fontWeight: 'bold',
    '& code': {
      background: 'transparent !important',
    }
  },
  indicator: {
    display: 'inline-flex',
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    marginRight: 2,
    background: theme.light.border,
    transition: 'background .3s',
    'body.dark &': {
      background: theme.dark.border,
    },
    '@media (prefers-color-scheme: dark)': {
      'body:not(.dark-mode-animate) &': {
        background: theme.dark.border,
      }
    }
  }
}));