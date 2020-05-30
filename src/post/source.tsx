import { StaticRenderer, Compiled } from '@connectv/sdh';
import { CodedocConfig } from '@codedoc/core';
import { File } from 'rxline/fs';


export function addSource() {
  const renderer = new StaticRenderer();
  return function(html: HTMLDocument, file: File<Compiled>, config: CodedocConfig) {
    const source = {
      base: config.src.base,
      path: file.path,
      namespace: config.dest.namespace,
      title: config.page.title,
    };

    const script = <script>{`window.source = ${JSON.stringify(source)}`}</script>;

    const container = html.body.querySelector('#-codedoc-container');
    if (container) {
      if (container.firstChild) renderer.render(script).before(container.firstChild);
      else renderer.render(script).on(container);
    } else {
      renderer.render(script).on(html.head);
    }
  }
}
