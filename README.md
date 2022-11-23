# Nimiq vue-components

This component library provides components written for the [Vue frontend framework](https://vuejs.org/) for use in Nimiq
Ecosystem apps. Have a look at the [demo page](https://nimiq.github.io/vue-components/) for an overview of included
components.

## Installation

```bash
yarn add github:nimiq/vue-components#build/master
```

This will install the complete component collection. To install only a subset for reduced bundle size, see section
[Advanced setup](#advanced-setup).

Some components require additional lazy-loaded assets which have to be copied over to your project. Specifically, these
are translation files (if you want to support other languages than English), the Identicon svg asset and the QR scanner
worker.

If your project has been created with the
[vue-cli](https://cli.vuejs.org/) / gets bundled via [webpack](https://webpack.js.org/), this can be conveniently done
with the [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/):

```js
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
    new CopyWebpackPlugin([
        // for translation files and additional, unnamed js chunks (currently only the qr scanner worker)
        {
            from: 'node_modules/@nimiq/vue-components/dist/NimiqVueComponents.umd.min.+(lang-*|[0-9]).js',
            to: './',
            flatten: true,
            transformPath(path) {
                // If you are bundling a non-minified build of the components (for later minification in your build
                // process; the default) it tries to also load the the non-minified language files, but we want
                // to load the minified files instead, so we rename them.
                return path.replace('.min', '');
            },
        },
        // for the identicons
        {
            from: 'node_modules/@nimiq/vue-components/dist/iqons.min.*.svg',
            to: './',
            flatten: true,
        },
    ]),
    ...
];

// webpack.config.js:
module.exports = {
  plugins,
  ...
};

// Or for projects created via vue-cli:
module.exports = {
    configureWebpack: {
        plugins,
    },
    ...
};
```

By default, these assets are resolved relatively to the importing script's location (the importing script's
currentScript src) as base path. Alternatively, you can also specify a custom path:

```js
import { setAssetPublicPath } from '@nimiq/vue-components';

setAssetPublicPath('/my-path/');

// Useful for projects setup via vue-cli to apply the app's public path to the vue-component assets
setAssetPublicPath(process.env.BASE_URL);

// You can also specify a separate folder for image assets
setAssetPublicPath('/js', '/img');
```

## Updating

```bash
yarn upgrade @nimiq/vue-components
```

## Usage

Import the components you want to use in your Vue component and define them as child `components`, for example:

```js
import { LoadingSpinner } from '@nimiq/vue-components';

Vue.component('my-component', {
    components: { LoadingSpinner },
    template: `
        <div>
            Loading stuff...
            <LoadingSpinner />
        </div>
    `,
});
```

## Advanced Setup

As this component library is built with webpack which does unfortunately currently not support outputting a
tree-shakeable es6 module yet, we currently do not provide a package that supports tree-shaking and
dead-code-elimination. To fix this, we will either wait for
[es6 module output support to be added to webpack](https://github.com/webpack/webpack/issues/2933), switch to
[building with rollup](https://github.com/nimiq/vue-components/issues/8) or release each component as separate package.

Until then, you have two options for including only a subset of the components in your code to reduce your bundle size:

1. Import the unprocessed `.vue` single file components directly, for example `import LoadingSpinner from
'@nimiq/vue-components/src/components/LoadingSpinner.vue'`. Note that for this to work, you need a bundler and build
process that can handle `.vue` single file components and typescript. Also note that for some components additional
setup might be required, for example for icon components imported from
[Icons.ts](https://github.com/nimiq/vue-components/blob/master/src/components/Icons.ts) (see
[vue.config.js](https://github.com/nimiq/vue-components/blob/master/vue.config.js)).

2. Create a custom build of the vue-components that only includes the components you need. To do this, follow these
steps:
    1. Fork this repository and `git clone` the fork to your computer.
    2. Comment-out all components and icons in
       [main.ts](https://github.com/nimiq/vue-components/blob/master/src/main.ts) and
       [Icons.ts](https://github.com/nimiq/vue-components/blob/master/src/components/Icons.ts) that you do not need.
    3. Build the source code via `yarn && yarn build`.
    4. Remove `dist` from [.gitignore](https://github.com/nimiq/vue-components/blob/master/.gitignore), then `git add
       dist .gitignore` to add the build output to your repository.
    5. Create a `git commit` and `git push` it to your fork respository.
    6. In your project, include the vue components from your fork, i.e. `yarn add github:<your github organization or
       username>/vue-components`

## Development and testing

To install dependencies run:
```bash
yarn
```

To run the demo page locally with hot-reloading on changes to the code base:
```bash
yarn storybook
```

To check for linting errors:
```bash
yarn lint
```

To build the component library:
```bash
yarn build
```

## Internationalization

First of all, a big thank you to all translators!

The Nimiq Vue-components are fully internationalized and ready for the community to add translations in different languages.

To help translate Vue-components, the procedure is as follows:
- Clone this repository.

- The translations are located in the `src/i18n` folder. A translation file for a language is named as the language's
  two letter [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) plus file extension `.po`. For
  example, for French with two letter code `fr` the translations are located at `src/i18n/fr.po`. If that file doesn't
  exist yet, i.e. you're starting a new translation, please duplicate `en.po` as starting point, rename it
  accordingly and then add the language to the `SUPPORTED_LANGUAGES` in `I18nMixin.ts`.

- In the language files, the source strings to be translated are between double quotes after the word `msgid`.
  For Example:
  ```
  msgid "Account Created"
  ```
  The translations of these must be provided in the same way, following the word `msgstr`. For Example:
  ```
  msgid "Account Created"
  msgstr "Compte Créé"
  ```
  Please only edit the translations, not the source strings.

- Please also don't change the `.json` language files as these are auto-generated. Only edit the `.po` language files.

- You can test your translations locally by running the demo page as described in section
  [Development and testing](#development-and-testing) and then setting a language cookie in the served page. To do so,
  open your browser's developer console (ctrl + shift + c) and input `document.cookie = 'lang=<lang>'` where `<lang>`
  should be replaced by the two letter language code of the language you want to test, for example `document.cookie =
  'lang=fr'`. After reloading the page, the components should be displayed in your chosen language. Note that the demos
  themselves are not translated, only the components. If you struggle setting up the local demo you can ask us to setup
  an online demo for you after opening a pull request.

- Once the file has been fully translated or you are done updating an existing language file, you can open a pull
  request here in github.

- The pull request will then be reviewed and, if all goes well, merged into the master branch and published asap.

#### Additional information

- Multiline translations are possible by inserting line breaks as `\n`. For example:
  ```
  msgid ""
  "Imagine if paying with\n"
  "crypto was easy"
  msgstr ""
  "Imaginez si payer avec\n"
  "de la crypto était facile."
  ```
  Please only insert line breaks into translations for source strings which already include a line break. Otherwise,
  they might break the layout of the component or not work as intended.

- Words between curly brackets are variables which must not be translated nor edited. They will be replaced by a value
  during app runtime. The name of the variable should be obvious enough for you to understand what it will be replaced
  by so you can place it at the right position in the translated string. For example:
  ```
  msgid "Cancel {payment}"
  msgstr "Annuler {payment}"
  ```

- If you're a transifex collaborator, and need some information about how to get started, here are two links for you:
  - How to get started as a translator: https://docs.transifex.com/getting-started-1/translators
  - How translate using the web editor: https://docs.transifex.com/translation/translating-with-the-web-editor
