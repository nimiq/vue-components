import { VueConstructor, CreateElement } from 'vue';

export default (component: VueConstructor) => ({
  functional: true,
  render(createElement: CreateElement) {
    return createElement(component, { class: 'nq-icon' });
  },
});
