import { ThemedComponentThis, themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';


export const CenterStyle = themedStyle<CodedocTheme>(theme => ({
  center: {
    textAlign: 'center'
  }
}));

export function Center(
  this: ThemedComponentThis<CodedocTheme>,
  _: any, 
  renderer: any,
  content: any
) {
  const classes = this.theme.classes(CenterStyle);
  return <div class={classes.center}>{content}</div>
}
