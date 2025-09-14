
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3918, hash: '16d2a9dc627b55bbdd59485cc989dbd0a58946451ec4c2672ddb8da45ed8c30a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1583, hash: '9132617964a2d99ac4180aac8f7665bd1d17097d7f5d5fba7f720809ae08976a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-K6TNXSD5.css', {size: 402562, hash: 'bdtcHOKMCHc', text: () => import('./assets-chunks/styles-K6TNXSD5_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
