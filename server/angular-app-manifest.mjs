
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3901, hash: 'ecbd170a7e3d626c8f153b5a69b364a3beabf6cabfbe6f16f40e3f0a288bab6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1583, hash: 'e2ddcd9593477d9640c4deb9a74941cf1031f03d637d34392427d00696c57518', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-7LYG3C4F.css', {size: 395003, hash: 'QmUVDdzbpJk', text: () => import('./assets-chunks/styles-7LYG3C4F_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
