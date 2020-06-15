import color from 'color';
import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core/transport';


export const ArticleCardStyle = /*#__PURE__*/themedStyle<CodedocTheme>(theme => ({
  card: {
    display: 'flex',
    margin: '8px 0',
    alignItems: 'center',
    textDecoration: 'none !important',
    color: theme.light.text,
    borderRadius: 12,
    padding: 8,
    background: color(theme.light.text).alpha(0.05).toString(),
    transition: 'background .3s, color .3s !important',
    'body.dark &': {
      color: theme.dark.text,
      borderColor: theme.dark.border,
      background: color(theme.dark.text).alpha(0.05).toString(),
    },
    '@media (prefers-color-scheme: dark)': {
      'body:not(.dark-mode-animate)': {
        color: theme.dark.text,
        borderColor: theme.dark.border,
        background: color(theme.dark.text).alpha(0.05).toString(),
      }
    },

    '&:hover': {
      background: color(theme.light.text).alpha(0.1).toString(),
      'body.dark &': {
        background: color(theme.dark.text).alpha(0.1).toString(),
      },
      '@media (prefers-color-scheme: dark)': {
        'body:not(.dark-mode-animate)': {
          background: color(theme.dark.text).alpha(0.1).toString(),
        }
      },
    },
  },

  cardcol: {
    display: 'inline-flex',
    verticalAlign: 'top',
    alignItems: 'flex-end',
    flexBasis: 'end',
    width: 'calc(50% - 8px)',
    height: 256,
    padding: 0,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 2px 6px #00000021',

    '&.grid-even': {
      marginLeft: 16,
    },

    '@media screen and (max-width: 767px)': {
      width: '100%',
      '&.grid-even': {
        marginLeft: 0,
      },
    },
  },

  img: {
    width: 96,
    height: 96,
    backgroundColor: 'white',
    borderRadius: 8,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 2px 6px #00000021',
    marginRight: 16,
    flexShrink: 0,

    '$cardcol &': {
      position: 'absolute',
      width: '100%',
      height: '100%',
    }
  },

  text: {
    overflow: 'hidden',
    zIndex: 1,
    '& h1': {
      fontSize: 24,
      margin: 0,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },

    '& p': {
      margin: 0,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },

    '$cardcol &': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '75%',
      width: '100%',
      padding: 16,
      color: theme.dark.text,
      textShadow: `0 0 6px ${theme.dark.background}`,
      background: `linear-gradient(0deg, ${color(theme.dark.background).alpha(.65).toString()}, transparent)`,

      '& h1': {
        whiteSpace: 'initial',
      }
    },
  },
}));
