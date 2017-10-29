import { todoRef } from './fbconfig';

export const getTodoList = (resolve) => {
  todoRef.limitToFirst(20).on('value', (data) => {
    /* eslint-disable no-console */
    console.log(data.val());
    resolve(data.val());
  }, (err) => {
    console.error(err);
  });
};

export const addTodo = todoObj => todoRef.push().set(todoObj);

// export const checkTodo = (todoId) => {
//   todoRef.update();
// };
