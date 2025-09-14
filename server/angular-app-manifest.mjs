
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3918, hash: '67fd657854966afee3939ef018db96b0d3a4f8ad02e897f8fb907f884b56e479', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1583, hash: '641f6a0752292b0ceca39c237745e7a52ddb67e4f46b1c4e26c9633a04762d6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-K6TNXSD5.css', {size: 402562, hash: 'bdtcHOKMCHc', text: () => import('./assets-chunks/styles-K6TNXSD5_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
