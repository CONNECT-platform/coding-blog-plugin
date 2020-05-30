import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const WatermarkStyle = /*#__PURE__*/themedStyle<CodedocTheme>(theme => ({
  watermark: {
    fontSize: '1px',
    cursor: 'pointer',
    opacity: .2,
    display: 'block',
    color: theme.light.text,
    textDecoration: 'none !important',
    transition: 'opacity .15s',

    'body.dark-mode-animate &': {
      transition: 'opacity .15s, color .3s',
    },

    '&:hover': {
      opacity: 1,
      textDecoration: 'none',
    },

    '@media (prefers-color-scheme: dark)': {
      'body:not(.dark-mode-animate) &': {
        color: theme.dark.text,
      },
    },

    'body.dark &': {
      color: theme.dark.text,
    },

    '& svg': {
      height: '2rem',
      margin: '.25rem 0',
      '& g': {
        fill: theme.light.text,

        'body.dark-mode-animate &': {
          transition: 'fill .3s',
        },

        'body.dark &': {
          fill: theme.dark.text,
        },

        '@media (prefers-color-scheme: dark)': {
          'body:not(.dark-mode-animate) &': {
            fill: theme.dark.text,
          },
        },
      }
    }
  }
}));
