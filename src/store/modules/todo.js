import _ from 'lodash';
import * as types from '../mutation-types';

export default {
  state: {
    todoWriting: false,
    todoList: [],
    isTodolistLoading: false,
  },
  mutations: {
    [types.GET_TODO_LIST]: (state) => {
      state.isTodolistLoading = true;
    },

    [types.GET_TODO_LIST_SUCCESS]: (state, todoList) => {
      state.todoList = todoList;
      state.isTodolistLoading = false;
    },

    [types.ADD_TODO_LOADING]: (state) => {
      state.todoWriting = true;
    },

    [types.ADD_TODO]: (state) => {
      state.todoWriting = false;
    },

    [types.SELECT_TODO]: (state, id) => {
      const selectTodo = _.find(state.todoList, todo => todo.id === id);
      selectTodo.done = !selectTodo.done;
    },
  },
};
