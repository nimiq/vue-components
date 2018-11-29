import vue from 'rollup-plugin-vue';
// import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify-es';
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
import minimist from 'minimist';
import svg from 'rollup-plugin-svg';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/entry.js',
  output: {
    name: 'NimiqVueComponents',
    exports: 'named',
  },
  external: ['vue', 'vue-property-decorator', '@nimiq/iqons'],
  plugins: [
    typescript({
      tsconfig: false,
      declaration: true,
      declarationDir: 'dist/types/',
      experimentalDecorators: true,
      module: 'es2015'
    }),
    vue({
      css: true,
      compileTemplate: true,
    }),
    // buble(),
    svg(),
    resolve()
  ],
};

// Only minify browser (iife) version and bundle all dependencies
if (argv.format === 'iife') {
    config.external = [];
    config.plugins.push(uglify());
}

export default config;
