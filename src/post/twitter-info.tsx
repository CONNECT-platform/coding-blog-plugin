import { StaticRenderer } from '@connectv/sdh';


const URLRegex = /^http(s)\:\/\//;


export function addTwitterMeta() {
  const renderer = new StaticRenderer();
  return function(html: HTMLDocument) {
    const title$ = html.head.querySelector('title');
    const desc$ = html.head.querySelector('meta[name="description"]');

    if (title$ && !html.head.querySelector('meta[name="twitter:title"]')) {
      renderer.render(<meta name="twitter:title" content={title$.textContent || ''}/>).on(html.head);
    }

    if (desc$ && !html.head.querySelector('meta[name="twitter:description"]')) {
      renderer.render(<meta name="twitter:description" content={desc$.getAttribute('content') || ''}/>).on(html.head);
    }

    if (!html.head.querySelector('meta[name="twitter:image"]')) {
      const container$ = html.body.querySelector('#-codedoc-container');
      if (container$) {
        let img$: HTMLElement | undefined = undefined; 

        container$.querySelectorAll('img[data-hero]').forEach(hero$ => {
          if (!img$ && URLRegex.test(hero$.getAttribute('src') || '')) {
            img$ = hero$ as HTMLElement;
          }
        });

        if (!img$) {
          container$.querySelectorAll('img').forEach(hero$ => {
            if (!img$ && URLRegex.test(hero$.getAttribute('src') || '')) {
              img$ = hero$ as HTMLElement;
            }
          });
        }

        if (img$) {
          const src = (img$ as HTMLElement).getAttribute('src') || '';
          renderer.render(<meta name="twitter:image" content={src}/>).on(html.head);
        }
      }
    }
  }
}
