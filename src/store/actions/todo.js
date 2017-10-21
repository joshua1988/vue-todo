import _ from 'lodash';
import * as types from '../mutation-types';
// import getters from '../getters/todo';

export const addTodo = ({ commit }, e) => {
  commit(types.ADD_TODO_LOADING);
  if (!_.isEmpty(e.target.value)) {
    const lastId = _.isEmpty(this.todoList) ? 0 : _.last(this.tosoList).id;
    const newTodo = {
      id: lastId + 1,
      text: e.target.value,
      done: false,
    };

    setTimeout(() => {
      commit(types.ADD_TODO, newTodo);
    }, 1000);

    e.target.value = '';
  }
};

export const checkTodo = ({ commit, state }, id) => {
  commit(types.SELECT_TODO, id);
};

export const removeTodo = ({ commit }, todo) => {
  commit(types.REMOVE_TODO, todo);
};
