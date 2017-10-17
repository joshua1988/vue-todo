<template>
  <div class="todo-index">
    <p>TodoIndex</p>
    <div class="todo-wrapper">
      <todo-input :handleInput="handleInput"></todo-input>
      <todo-list
        :todos="todos"
        :handleCheck="handleCheck"
      ></todo-list>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import TodoInput from './TodoInput';
  import TodoList from './TodoList';
  
  const data = {
    todos: [],
  };

  const handleInput = (e) => {
    if (!_.isEmpty(e.target.value)) {
      const lastId = _.isEmpty(data.todos) ? 0 : _.last(data.todos).id;
      const newTodo = {
        id: lastId + 1,
        text: e.target.value,
        done: false,
      };

      data.todos.push(newTodo);
      e.target.value = '';
    }
  };

  const handleCheck = (id) => {
    const selectTodo = _.find(data.todos, todo => todo.id === id);
    selectTodo.done = !selectTodo.done;
  };

  export default {
    name: 'TodoIndex',
    components: {
      'todo-input': TodoInput,
      'todo-list': TodoList,
    },
    data: () => data,
    methods: {
      handleInput,
      handleCheck,
    },
  };
</script>