import { StaticRenderer } from '@connectv/sdh';


export function addRedirectMeta() {
  const renderer = new StaticRenderer();
  return function(html: HTMLDocument) {
    const redirect = html.querySelector('[data-meta-redirect]');
    if (redirect) {
      renderer.render(<meta 
        http-equiv="refresh"
        content={`3;${redirect.getAttribute('href') || '/'}`}/>
      ).on(html.head);
    }
  }
}
