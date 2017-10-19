import * as types from '../mutation-types';

export const addTodo = ({ commit }, todo) => {
  commit(types.ADD_TODO, todo);
};

export const removeTodo = ({ commit }, todo) => {
  commit(types.REMOVE_TODO, todo);
};
