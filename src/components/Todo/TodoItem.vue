<template>
  <div>
    <div
      :class="[{ done: todo.done }, 'btn-check']"
      @click="checkTodo(todo.id)"
    />
    <div
      :class="[{ done: todo.done }, 'item']"
    >
      todo item {{ todo.text }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',
  props: ['todo', 'checkTodo'],
};
</script>

<style lang="scss" scoped>
  .btn-check {
    border: 1px solid black;
    border-radius: 50%;
    display: inline-block;
    width: 10px;
    height: 10px;
    vertical-align: middle;

    &:hover {
      cursor: pointer;
    }

    &.done {
      background-color: gray;
      background-clip: content-box;
      padding: 1px;
    }
  }

  .item {
    display: inline-block;
    vertical-align: middle;

    &.done {
      color: gray;
      text-decoration: line-through;
    }
  }
</style>

