<template>
  <div>
    <todo-filter
      :setFilter="setFilter"
      :activeFilter="filter"
    ></todo-filter>
    <todo-item
      v-for="todo in filterTodos(todos)"
      :key="todo.id"
      :todo="todo"
      :checkTodo="checkTodo"
    >
    </todo-item>
    {{ filteredTodos }}
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';

const ALL = 'all';
const COMPLETE = 'complete';
const PROGRESS = 'progress';

const data = {
  filter: ALL,
};

function filterTodos(todos) {
  return data.filter === ALL ? todos : todos.filter(todo => todo.done === !!data.filter);
}

function setFilter(options) {
  if (options === COMPLETE) {
    data.filter = true;
  } else if (options === PROGRESS) {
    data.filter = false;
  } else {
    data.filter = ALL;
  }
}


export default {
  name: 'TodoList',
  components: {
    'todo-item': TodoItem,
    'todo-filter': TodoFilter,
  },
  props: ['todos', 'checkTodo'],
  data: () => data,
  methods: {
    filterTodos,
    setFilter,
  },
  computed: {
    filteredTodos: {
      get: () => this.todos && this.todos.length,
    },
  },
};
</script>