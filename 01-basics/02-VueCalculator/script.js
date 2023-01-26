import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      operator: undefined,
      firstValue: 0,
      secondValue: 0,
    };
  },

  computed: {
    result() {
      switch (this.operator) {
        case 'sum':
          return this.firstValue + this.secondValue;
        case 'subtract':
          return this.firstValue - this.secondValue;
        case 'multiply':
          return this.firstValue * this.secondValue;
        case 'divide':
          return this.firstValue / this.secondValue;
        default:
          return 0;
      }
    },
  },
});

const app = createApp(App);
app.mount('#app');
