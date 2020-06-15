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
  const svgRule = config.module.rule('svg');
  const svgDefaultHandler = svgRule.uses.values()[0];
  svgRule.uses.clear();

  config.module
    .rule('svg')
      // Add new icon SVG rule
      .oneOf('icons')
        .test(/icons/)
        .use('vue-svg-loader')
          .loader('vue-svg-loader')
          .options({ svgo: false })
          .end()
        .end()
      // Re-add default SVG rule
      .oneOf('default')
        .use()
          .loader(svgDefaultHandler.get('loader'))
          .options(svgDefaultHandler.get('options'))
          .end()
        .end()
    .rule('po')
      .test(/\.pot?$/)
      .use('po-loader')
        .loader('webpack-i18n-tools')
        .end()
      .end();
}

module.exports = { configureWebpack, chainWebpack };
