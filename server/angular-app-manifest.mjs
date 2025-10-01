
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3918, hash: 'fb8ce6c75eda631dca313e14b2d2a474a3fddcf1ba891221d4097ceb82e03bfb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1583, hash: '0640abb2e977b0189c18a8124a3c1f6207230fa72471f6ceccae698152e63add', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-FQPYHO5N.css', {size: 403655, hash: '9fbzZxeHVTg', text: () => import('./assets-chunks/styles-FQPYHO5N_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
