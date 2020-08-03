import { ThemedComponentThis, themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const QuoteStyle = themedStyle<CodedocTheme>(theme => ({
  quote: {
    fontSize: 20,
    padding: '0 56px',
  },

  text: {
    position: 'relative',
    padding: '1px 0',

    '& .begin, & .end': {
      fontSize: 48,
      position: 'absolute',
      opacity: .25,
      '&.begin': {
        top: 8, left: -56,
        transform: 'rotate(180deg)'
      },
      '&.end': {
        bottom: 8, right: -56,
      }
    },
  },

  source: {
    textAlign: 'right',
    fontStyle: 'italic',
  }
}));


export interface QuoteOptions {
  from?: string;
}


export function Quote(
  this: ThemedComponentThis<CodedocTheme>,
  options: QuoteOptions, 
  renderer: any,
  content: any
) {
  const classes = this.theme.classes(QuoteStyle);
  return <div class={classes.quote}>
    <div class={classes.text}>
      <div class="icon-font begin">format_quote</div>
      {content}
      <div class="icon-font end">format_quote</div>
    </div>
    {options.from ? <div class={classes.source}>{options.from}</div> : '' }
  </div>
}
