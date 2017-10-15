<template>
  <div>
    todo item {{ todo.text }}
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
};
</script>

