
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 21718, hash: '9bda18eedd83f375b1f3622ad82ae796a669910f8c5277e80759d28a68507c15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 18516, hash: 'f2f7e9742258f12c65f546d7864c7b308f6cf6e0548d31f386f21a605d175fa4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-BIUNVAQ2.css', {size: 411720, hash: 'GQ1BORFUuP8', text: () => import('./assets-chunks/styles-BIUNVAQ2_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
