import * as types from '../mutation-types';

export default {
  state: {
    todoList: [],
  },
  mutations: {
    [types.ADD_TODO]: (state, todo) => {
      state.todoList.push(todo);
    },
  },
};
