import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      required: true
    }
  },

  template: `<button type="button" @click="$emit('update:count', isNaN(count) ? 1 : count + 1)">{{ isNaN(count) ? 0 : count }}</button>`,
});
