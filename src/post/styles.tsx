import { StaticRenderer } from '@connectv/sdh';


export function addStyles() {
  const renderer = new StaticRenderer();

  return function(html: HTMLDocument) {
    renderer.render(<fragment>
      <style>{`.container{padding-top: 0 !important}`}</style>
      <style>{`#-codedoc-toc { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px) }`}</style>
    </fragment>).on(html.head);
  }
}