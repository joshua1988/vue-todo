import _ from 'lodash';

export default {
  todoList: state => _.toArray(state.todo.todoList),
  todoById: (state, id) => _.find(state.todo.todoList, todo => todo.id === id),
  isWriting: state => state.todo.todoWriting,
  isListLoading: state => state.todo.isTodolistLoading,
};
