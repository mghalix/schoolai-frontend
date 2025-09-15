
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3918, hash: '01882908db11ecf3a30e41687a8b66a08293dff477c9b3860fe6dc76fa078227', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1583, hash: '10af13b6d5a7ab35d6f12f9107afa23943bdff620ee76673bef22a24c804446c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-HS2AK2UU.css', {size: 402371, hash: 'aX5alosG+mw', text: () => import('./assets-chunks/styles-HS2AK2UU_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
