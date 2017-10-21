<template>
  <div class="todo-index">
    <p>TodoIndex</p>
    <div class="todo-wrapper">
      <todo-input
        :addTodo="addTodo"
      ></todo-input>
      <todo-list
        :todos="todoList"
        :checkTodo="checkTodo"
      ></todo-list>
    </div>
  </div>
</template>

<script>
  import TodoInput from './TodoInput';
  import TodoList from './TodoList';

  const handleCheck = () => {
    // const selectTodo = _.find(data.todos, todo => todo.id === id);
    // selectTodo.done = !selectTodo.done;
  };

  const data = {

  };

  export default {
    name: 'TodoIndex',
    components: {
      'todo-input': TodoInput,
      'todo-list': TodoList,
    },
    props: {
      todoList: Array,
      addTodo: Function,
      checkTodo: Function,
    },
    data: () => data,
    methods: {
      handleCheck,
    },
  };
</script>