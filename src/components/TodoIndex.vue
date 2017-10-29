<template>
  <div class="todo-index">
    <p>TodoIndex</p>
    <div class="todo-wrapper">
      <todo-input
        :addTodo="addTodo"
      />
      <todo-list
        :todoList="todoList"
        :isListLoading="isListLoading"
        :checkTodo="checkTodo"
        :getTodoList="getTodoList"
      />
    </div>
  </div>
</template>

<script>
  import TodoInput from './TodoInput';
  import TodoList from './TodoList';

  export default {
    name: 'TodoIndex',
    components: {
      'todo-input': TodoInput,
      'todo-list': TodoList,
    },
    props: {
      todoList: Array,
      isListLoading: Boolean,
      getTodoList: Function,
      addTodo: Function,
      checkTodo: Function,
    },
  };
</script>