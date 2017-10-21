import _ from 'lodash';

export default {
  todoList: state => state.todo.todoList,
  todoById: (state, id) => {
    _.find(state.todo.todoList, todo => todo.id === id);
  },
  isWriting: state => state.todo.todoWriting,
};
