import vue from 'rollup-plugin-vue';
// Using rollup-plugin-typescript2 because rollup-plugin-typescript does not actually check types and has
// issue https://github.com/rollup/rollup-plugin-typescript/issues/28
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/main.ts',
    external: ['vue', 'vue-class-component', 'vue-property-decorator'],
    output: [
        {
            format: 'esm',
            file: 'dist/NimiqVueComponents.esm.js',
        }, {
            format: 'umd',
            file: 'dist/NimiqVueComponents.umd.js',
            name: 'NimiqVueComponents',
        }
    ],
    plugins: [
        // Documentation: https://github.com/ezolenko/rollup-plugin-typescript2
        typescript({
            clean: true, // clean build (wipes out cache on every build)
            // verbosity: 3,
        }),
        // Documentation: https://rollup-plugin-vue.vuejs.org/options.html
        vue({
            //sourceRoot: `${__dirname}/src/components`,
        }),
    ]
}
