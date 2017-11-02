import _ from 'lodash';
import Firebase from 'firebase';
import * as todoApis from '@/api/todo';
import getters from '../getters';
import * as types from '../mutation-types';

export const getTodoList = ({ commit }) => {
  commit(types.GET_TODO_LIST);

  const onSuccess = (todoList) => {
    commit(types.GET_TODO_LIST_SUCCESS, todoList);
  };

  todoApis.getTodoList(onSuccess);
};

export const addTodo = (store, todo) => {
  store.commit(types.ADD_TODO_LOADING);
  const lastTodo = _.last(store.state.todo.todoList);
  if (!_.isEmpty(todo)) {
    const newTodo = {
      id: lastTodo ? lastTodo.id + 1 : 1,
      text: todo,
      done: false,
      timestamp: Firebase.database.ServerValue.TIMESTAMP,
    };

    todoApis.addTodo(newTodo)
      .then(store.commit(types.ADD_TODO));
  }
};

export const checkTodo = ({ commit }, id) => {
  /* eslint-disable no-console */
  // console.log(getters);
  getters.todoById(id);
  // commit(types.SELECT_TODO, id);
};

export const removeTodo = ({ commit }, todo) => {
  commit(types.REMOVE_TODO, todo);
};
