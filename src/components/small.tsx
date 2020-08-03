import { ThemedComponentThis, themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const SmallStyle = themedStyle<CodedocTheme>(theme => ({
  small: {
    '& *': {
      fontSize: 12,
    },
  }
}));

export function Small(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: any,
  content: any
) {
  const classes = this.theme.classes(SmallStyle);
  return <div class={classes.small}>{content}</div>
}
