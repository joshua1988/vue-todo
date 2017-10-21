<template>
  <div>
    <todo-index
      :todoList="todoList"
      :addTodo="addTodo"
      :checkTodo="checkTodo"
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
      'addTodo',
      'checkTodo',
    ]),
  },
  computed: {
    ...mapGetters([
      'todoList',
      'isWriting',
    ]),
  },
};
</script>

