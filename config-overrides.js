const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess(config, env, {
    modifyVars: { 
      '@primary-color': '#6678DD',
      '@font-family': ['Work Sans', 'sans-serif'],
      '@background-color-base': '#F1F5F9',
      '@layout-body-background': '#F1F5F9'
    },
  })
  return config
}
