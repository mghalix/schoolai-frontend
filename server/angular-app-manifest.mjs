
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3765, hash: 'af75713976c76ffd74cabfaad11f6d78c54c675ae84cd7c335c71c9a4d12737a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1430, hash: '972776305a9abb981ebb27134246802a38c757c1028c62f4b358fd569d419613', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-6ZCQNOV5.css', {size: 401720, hash: 'iRVNE92txlQ', text: () => import('./assets-chunks/styles-6ZCQNOV5_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
