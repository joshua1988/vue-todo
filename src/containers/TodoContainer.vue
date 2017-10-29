<template>
  <div>
    <todo-index
      :todoList="todoList"
      :addTodo="addTodo"
      :checkTodo="checkTodo"
      :getTodoList="getTodoList"
      :isListLoading="isListLoading"
    ></todo-index>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoIndex from '../components/TodoIndex';

export default {
  name: 'TodoContainer',
  components: {
    'todo-index': TodoIndex,
  },
  methods: {
    ...mapActions([
      'getTodoList',
      'addTodo',
      'checkTodo',
    ]),
  },
  computed: {
    ...mapGetters([
      'todoList',
      'todoByIndex',
      'isWriting',
      'isListLoading',
    ]),
  },
};
</script>

