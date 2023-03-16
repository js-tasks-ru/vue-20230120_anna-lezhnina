<template>
  <slot v-if="state === $options.states.FULFILLED" name="fulfilled" :result="result"/>
  <slot v-else-if="state === $options.states.REJECTED" name="rejected" :error="error"/>
  <slot v-else name="pending"/>
</template>

<script>
const states = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

export default {
  name: 'PromiseWrapper',

  states,

  props: {
    promise: {
      type: Promise,
      required: true,
    },
  },

  data() {
    return {
      state: states.PENDING,
      error: undefined,
      result: undefined,
    }
  },

  watch: {
    promise: {
      immediate: true,
      handler() {
        this.state = states.PENDING;
        this.error = undefined;
        this.result = undefined;
        this.promise
          .then((result) => {
            this.result = result;
            this.state = states.FULFILLED;
          })
          .catch((error) => {
            this.error = error;
            this.state = states.REJECTED;
          });
      },
    },
  }
};
</script>
