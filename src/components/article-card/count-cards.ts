import { onReady, transport } from '@connectv/sdh/transport';


export function countCards() {
  onReady(() => {
    const _exec = () => {
      document.querySelectorAll('[data-article-card-grid]').forEach(el => {
        if (!el.previousSibling || !(el.previousSibling as HTMLElement).hasAttribute('data-article-card-grid')) {
          el.classList.add('grid-odd');
        } else if ((el.previousSibling as HTMLElement).classList.contains('grid-odd')) {
          el.classList.add('grid-even');
        } else el.classList.add('grid-odd');
      });
    };

    _exec();
    setTimeout(_exec, 300);
    window.addEventListener('navigation', _exec);
  });
}


export const countCards$ = /*#__PURE__*/transport(countCards);