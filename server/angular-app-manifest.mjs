
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3918, hash: '9a56e762687027df59e4a2072ae9f860790a5c17592c62dba837b3af82527649', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1583, hash: '037468b62000c60c49865a05786ccc250cd4000ea7fc433566d51048d32b2dbe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-HS2AK2UU.css', {size: 402371, hash: 'aX5alosG+mw', text: () => import('./assets-chunks/styles-HS2AK2UU_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
