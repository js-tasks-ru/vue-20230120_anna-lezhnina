import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
      required: true,
    },
  },

  template: `<button type="button" @click="$emit('update:count', count + 1)">{{ count }}</button>`,
});
