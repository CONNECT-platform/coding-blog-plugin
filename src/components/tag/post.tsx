import { StaticRenderer } from '@connectv/sdh';

export function addTagMeta() {
  const renderer = new StaticRenderer();
  return function(html: HTMLDocument) {
    const tags: string[] = [];
    html.querySelectorAll('[data-page-tag]').forEach(el$ => {
      const tag = el$.getAttribute('data-page-tag') || '';
      if (tag.length > 0) tags.push(tag);
    });

    let metaKeywords = html.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = <meta name='keywords' content=""/>
      renderer.render(metaKeywords).on(html.head);
    }

    metaKeywords.setAttribute('content', [
      ...(metaKeywords.getAttribute('content')?.split(',').map(_ => _.trim()).filter(_ => _?.length > 0) || []),
      ...tags,
      ].join(', ')
    );

    renderer.render(<meta property="blog-tags" content={tags.join(', ')}/>).on(html.head);
  }
}
