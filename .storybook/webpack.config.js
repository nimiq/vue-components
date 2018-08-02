module.exports = (storybookBaseConfig, env, config) => {
    return {
        ...config,
        plugins: [...config.plugins, new (require('vue-loader/lib/plugin'))()],
        module: {
            ...config.module,
            rules: [...config.module.rules, {
                test: /\.tsx?$/,
                loader: require.resolve('ts-loader'),
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                }
            }]
        },
        resolve: {
            ...config.resolve,
            extensions: [...config.resolve.extensions, '.ts', '.tsx']
        }
    };
};
