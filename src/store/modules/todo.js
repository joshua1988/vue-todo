import * as types from '../mutation-types';

export default {
  state: {
    todoList: [],
  },
  mutations: {
    [types.ADD_TODO]: (state, todo) => {
      /* eslint-disable no-console */
      console.log(todo);
      state.todoList.push(todo);
    },
  },
};
