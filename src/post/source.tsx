import { StaticRenderer, Compiled } from '@connectv/sdh';
import { CodedocConfig } from '@codedoc/core';
import { File } from 'rxline/fs';


export function addSource() {
  const renderer = new StaticRenderer();
  return function(html: HTMLDocument, file: File<Compiled>, config: CodedocConfig) {
    const source = {
      base: config.src.base,
      path: file.path,
    };
    renderer.render(<script>{`window.source = ${JSON.stringify(source)}`}</script>)
      .on(html.body.querySelector('#-codedoc-container') || html.head);
  }
}
