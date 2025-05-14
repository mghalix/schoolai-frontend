
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 2756, hash: '5e8c76086d6d2bdd008867766922fe3120cc7f19e9c32481f66d8d4f16333c6d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1430, hash: '0acef7001b4a2ffb9bfd20d2a498f5b6e9ba0914f3b9694cfe15ae3c8c40cf5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-VWCFH54H.css', {size: 355268, hash: 'PPdBKKL9/A0', text: () => import('./assets-chunks/styles-VWCFH54H_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
