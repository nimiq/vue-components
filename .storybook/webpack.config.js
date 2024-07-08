const path = require('path');

// Fix build for Node version with OpenSSL 3
const crypto = require('crypto');
const origCreateHash = crypto.createHash;
crypto.createHash = (alg, opts) => {
    return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
};

// Process source files and specified dependencies by babel to be able to use more modern js syntax than supported by
// our Webpack version. Should be kept in sync with transpileDependencies in vue.config.js
const transpileDependencies = ['@nimiq/utils'];
const babel = {
    loader: require.resolve('babel-loader'),
    // By default, options from babel.config.js are used. If you're encountering issues with some syntax not being
    // transpiled sufficiently, experiment with different @vue/babel-preset-app or @babel/preset-env options. As this is
    // only for a demo page, the resulting file size by code being transpiled too aggressively or too many polyfills
    // being included, doesn't really matter.
    // options: {
    //     presets: [
    //         ['@babel/preset-env', {
    //             targets: { node: 14 },
    //             // useBuiltIns: 'usage',
    //             // corejs: '3.37',
    //             // include: ["@babel/plugin-transform-logical-assignment-operators"],
    //             debug: true,
    //         }]
    //     ],
    // },
};

module.exports = (storybookBaseConfig, env, config) => {
    // Save and remove default SVG rule to add a custom one below
    const svgRule = config.module.rules.find(rule => rule.test.toString().includes('svg'));
    config.module.rules = config.module.rules.filter(rule => !rule.test.toString().includes('svg'));

    return {
        ...config,
        plugins: [...config.plugins, new (require('vue-loader/lib/plugin'))()],
        module: {
            ...config.module,
            rules: [...config.module.rules, {
                test: /\.tsx?$/,
                use: [babel, {
                    loader: require.resolve('ts-loader'),
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true
                    }
                }]
            }, {
                test: svgRule.test,
                oneOf: [{
                    // Add new icon SVG rule
                    test: /icons/,
                    loader: 'vue-svg-loader',
                    options: { svgo: false }
                }, {
                    // Re-add default SVG rule
                    loader: svgRule.loader,
                    options: svgRule.options
                }],
            }, {
                test: /\.(?:js|mjs|cjs)$/,
                include: [
                    'src', // Process js files in src, basically index.stories.js
                    ...transpileDependencies.map((dependency) => path.join('node_modules', dependency)),
                ].map((dependency) => path.join(__dirname, '..', dependency)),
                ...babel,
            }]
        },
        resolve: {
            ...config.resolve,
            extensions: [...config.resolve.extensions, '.ts', '.tsx']
        }
    };
};
