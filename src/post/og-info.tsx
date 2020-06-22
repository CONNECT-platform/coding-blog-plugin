import { StaticRenderer } from '@connectv/sdh';


const URLRegex = /^http(s)\:\/\//;


export function addOGMeta() {
  const renderer = new StaticRenderer();
  return function(html: HTMLDocument) {
    const title$ = html.head.querySelector('title');
    const desc$ = html.head.querySelector('meta[name="description"]');

    if (!html.head.querySelector('meta[property="og:type"]')) {
      renderer.render(<meta property="og:type" content="article"/>).on(html.head);
    }

    if (title$ && !html.head.querySelector('meta[property="og:title"]')) {
      renderer.render(<meta property="og:title" content={title$.textContent || ''}/>).on(html.head);
    }

    if (desc$ && !html.head.querySelector('meta[property="og:description"]')) {
      renderer.render(<meta property="og:description" content={desc$.getAttribute('content') || ''}/>).on(html.head);
    }

    if (!html.head.querySelector('meta[property="og:image"]')) {
      const container$ = html.body.querySelector('#-codedoc-container');
      if (container$) {
        let src: string | undefined = undefined; 

        container$.querySelectorAll('img[data-hero]').forEach(hero$ => {
          if (!src) {
            const potential = hero$.getAttribute('data-src') || hero$.getAttribute('src') || '';
            if (URLRegex.test(potential)) src = potential;
          }
        });

        if (!src) {
          container$.querySelectorAll('img').forEach(hero$ => {
            if (!src && URLRegex.test(hero$.getAttribute('src') || '')) {
              src = hero$.getAttribute('src') || '';
            }
          });
        }

        if (src) {
          renderer.render(<meta property="og:image" content={src}/>).on(html.head);
        }
      }
    }
  }
}
