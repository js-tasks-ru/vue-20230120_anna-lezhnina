<template>
  <div class="toasts">
    <toast-item v-for="(toast, index) in toasts" :key="index" :type="toast.type" :text="toast.text" />
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import ToastItem from './Toast';

export default {
  name: 'TheToaster',

  timeout: 5000,

  components: {
    ToastItem,
    UiIcon,
  },

  data() {
    return {
      toasts: new Set(),
      count: 0,
    };
  },

  methods: {
    success: function (text) {
      this.createToast('success', text);
    },
    error: function (text) {
      this.createToast('error', text);
    },
    createToast: function (type, text, timeout = this.$options.timeout) {
      const toast = { type, text, id: this.count };
      this.toasts.add(toast);
      this.count++;

      setTimeout(() => {
        this.toasts.delete(toast);
      }, timeout);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
