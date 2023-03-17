<template>
  <div class="pagination-container">
    <!-- Получается, что у элементов нет никакого уникального свойства (о котором мы точно знаем),
    которое можно было бы использовать как ключ. -->
    <slot v-for="(item, index) in pageItems" :item="item" :key="index"/>
  </div>
</template>

<script>
export default {
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    pageItems() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    },
  },
};
</script>

<style></style>
