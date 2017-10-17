<template>
  <div>
    <div
      v-for="option in options"
      :key="option"
      @click="setFilter(option.toLowerCase())"
    >
      {{ option }}
    </div>
  </div>
</template>

<script>
const options = ['All', 'Complete', 'Progress'];

const data = {
  options,
};

export default {
  name: 'TodoFilter',
  props: ['setFilter'],
  data: () => data,
};
</script>
