import { StaticRenderer } from '@connectv/sdh';
import { CodedocConfig } from '@codedoc/core';


export function addGitHubConfig() {
  const renderer = new StaticRenderer();
  return function(html: HTMLDocument, _: any, config: CodedocConfig) {
    if (config.misc?.github) {
      renderer.render(<script>{`window.githubConfig=${JSON.stringify(config.misc.github)}`}</script>).on(html.head);
    }
  }
}
