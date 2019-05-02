const path = require('path');

const configureWebpack = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  }
}

if (process.argv.includes('build')) {
  configureWebpack.externals = {
    'vue': 'vue',
    'vue-class-component': 'vue-class-component',
    'vue-property-decorator': 'vue-property-decorator',
  };
  configureWebpack.mode = 'production';
  configureWebpack.optimization = {
    providedExports: true,
    usedExports: true,
    sideEffects: true,
  };
}

const chainWebpack = config => {
  // Delete default SVG rule to replace it
  config.module.rules.delete('svg');

  config.module
    .rule('svg')
      .test(/\.(svg)(\?.*)?$/)
        // Add new icon SVG rule
        .oneOf('icons')
          .test(/icons/)
          .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
              symbolId: filePath => `nq-${path.basename(filePath, '.svg')}`
            })
            .end()
          .end()
        // Re-add default svg rule
        .oneOf('normal')
          .use('file-loader')
            .loader('file-loader')
            .options({
              name: 'img/[name].[hash:8].[ext]'
            })
            .end()
          .end()
}

module.exports = { configureWebpack, chainWebpack };
