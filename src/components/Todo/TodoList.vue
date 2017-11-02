<template>
  <div>
    <todo-filter
      :setFilter="setFilter"
      :activeFilter="filter"
    />
    <indicator v-if="isListLoading"/>
    <div v-else>
      <div v-if="todoList.length > 0">
        <todo-item
          v-for="todo in filterTodos(todoList)"
          :key="todo.id"
          :todo="todo"
          :checkTodo="checkTodo"
        />
      </div>
      <div v-else>Empty Todo</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Indicator from '@/components/common/Indicator';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';

const ALL = 'all';
const COMPLETE = 'complete';
const PROGRESS = 'progress';

const data = {
  filter: ALL,
};

function filterTodos(todoList) {
  if (_.isEmpty(todoList)) return null;
  return data.filter === ALL ? todoList : todoList.filter(todo => todo.done === !!data.filter);
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
    indicator: Indicator,
  },
  props: {
    todoList: Array,
    isListLoading: Boolean,
    checkTodo: Function,
    getTodoList: Function,
  },
  data: () => data,
  methods: {
    filterTodos,
    setFilter,
  },
  computed: {
    isTodolistEmpty: {
      get: () => _.isEmpty(this.todoList),
    },
  },
  mounted() {
    this.getTodoList();
  },
};
</script>