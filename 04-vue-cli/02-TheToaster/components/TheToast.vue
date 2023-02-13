<template>
  <div v-if="shown" :class="`toast toast_${type}`">
    <ui-icon class="toast__icon" :icon="$options.icons[type]" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

const icons = {
  success: 'check-circle',
  error: 'alert-circle',
};

export default {
  name: 'TheToast',

  icons,

  components: { UiIcon },

  props: {
    type: {
      type: String,
      default: 'success',
    },
    text: {
      type: String,
    },
    timeout: {
      type: Number,
      default: 5000,
    },
  },

  data() {
    return {
      shown: null,
    };
  },

  created() {
    this.shown = true;

    setTimeout(() => {
      this.shown = false;
    }, this.timeout);
  },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
