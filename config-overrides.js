const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess(config, env, {
    modifyVars: { 
      '@primary-color': '#6678DD',
      '@font-family': 'Open Sans',
      '@background-color-base': '#F1F5F9',
      '@layout-body-background': '#F1F5F9',
      '@btn-padding-base': '.5rem 1.5rem',
      '@font-size-base': '0.85rem',
      '@font-size-lg': '1.05rem',
      '@input-height-base': '2.2rem',
      '@input-height-sm': '2rem',
      '@input-height-lg': '2.4rem',
      '@btn-height-base': '2.25rem',
      '@btn-height-lg': '2.4rem',
      '@btn-height-sm': '2rem',
      '@border-radius-base': '.3rem'
    },
  })
  return config
}
