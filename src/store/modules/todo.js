import _ from 'lodash';
import * as types from '../mutation-types';

export default {
  state: {
    todoWriting: false,
    todoList: [],
  },
  mutations: {
    [types.ADD_TODO_LOADING]: (state) => {
      state.todoWriting = true;
    },

    [types.ADD_TODO]: (state, todo) => {
      state.todoList.push(todo);
      state.todoWriting = false;
    },

    [types.SELECT_TODO]: (state, id) => {
      const selectTodo = _.find(state.todoList, todo => todo.id === id);
      selectTodo.done = !selectTodo.done;
    },
  },
};
