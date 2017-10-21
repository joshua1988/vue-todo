<template>
  <div>
    <div
      v-for="option in options"
      :key="option"
      :class="[{ active: option === activeFilter }]"
      @click="setFilter(option.toLowerCase())"
    >
      {{ option }}
    </div>
  </div>
</template>

<script>
const options = ['all', 'complete', 'progress'];

const data = {
  options,
};

export default {
  name: 'TodoFilter',
  props: ['setFilter', 'activeFilter'],
  data: () => data,
};
</script>

<style lang="scss" scoped>
  .active {
    color: red;
  }
</style>

