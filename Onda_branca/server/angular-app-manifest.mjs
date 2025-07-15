
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/search"
  },
  {
    "renderMode": 2,
    "route": "/sobre"
  },
  {
    "renderMode": 2,
    "route": "/publicacao"
  },
  {
    "renderMode": 2,
    "route": "/contactos"
  },
  {
    "renderMode": 2,
    "route": "/comunidade"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4587, hash: 'f274409dc597dd0cd94c0fc8b05e20ff79269ae37844c59e45d1875c395d6573', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4743, hash: '79df702edcf356f5cf470643ba815d8d4b2c6c729a854427e72009c1db0bbc85', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contactos/index.html': {size: 25483, hash: '22d5a50b97b50d27defbf5e78da2f8d274de7ea8ff536e78c74b2c7d7d26cd4f', text: () => import('./assets-chunks/contactos_index_html.mjs').then(m => m.default)},
    'publicacao/index.html': {size: 18970, hash: 'e280c92bd443678f5f76b06e616a211ffda6e671457b759aa73fa5e7bfc93dfc', text: () => import('./assets-chunks/publicacao_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 18256, hash: '798e992647d094d6909105278fd235dc5398d8a3ddb84cba9a68b84a4b255de0', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'sobre/index.html': {size: 32035, hash: '1c51c69403cf0bf63927f1ba276d691550e41dc3020d78741079fb3bae599d01', text: () => import('./assets-chunks/sobre_index_html.mjs').then(m => m.default)},
    'comunidade/index.html': {size: 26035, hash: '343006981947b28b90eaea640f7a50c89baae88edbbb6398799ffd1f91a16fd5', text: () => import('./assets-chunks/comunidade_index_html.mjs').then(m => m.default)},
    'index.html': {size: 55226, hash: '862516f3e23a439f7fb949e488550dd33560b5c32d17f6a59b88f3535c7ebc23', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XAQXIQCO.css': {size: 16035, hash: 'Q+hHIyECmJg', text: () => import('./assets-chunks/styles-XAQXIQCO_css.mjs').then(m => m.default)}
  },
};
