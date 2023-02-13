<template>
  <div class="toasts">
    <TheToast
      v-for="(toast, index) in toasts"
      :key="index"
      :type="toast.type"
      :text="toast.text"
      :timeout="toast.timeout"
    />
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import TheToast from './TheToast';

export default {
  name: 'TheToaster',

  components: {
    TheToast,
    UiIcon,
  },

  data() {
    return {
      toasts: [],
    };
  },

  methods: {
    success: function (text) {
      this.toasts.push({ type: 'success', text: text });
    },
    error: function (text) {
      this.toasts.push({ type: 'error', text: text });
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
