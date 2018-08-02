import { configure } from "@storybook/vue";

const req = require.context("../src/stories", true, /.stories.(js|ts)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
