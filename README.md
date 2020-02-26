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
