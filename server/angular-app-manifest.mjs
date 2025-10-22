
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3918, hash: 'be378ffdc59473dcbf6be12da421b7a266b57b7a1b3933f80179e55018680da9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1583, hash: '8ea355f9d8ddef8e705a24e09fca6b4f12025c84a0d74937862787ca0b168258', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-LRGT4ITI.css', {size: 404675, hash: '2pBuRZJ3cxM', text: () => import('./assets-chunks/styles-LRGT4ITI_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
