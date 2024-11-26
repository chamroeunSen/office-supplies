import { deleteTodo, getTodos, postTodo, putTodo, putToggleCompleteTodo } from '_api/todos';

import { addTodo, removeTodo, setTodos, toggleCompleteTodo, updateTodo } from '_store/actions/todos';

import { dispatchError } from '_utils/api';

export const attemptGetTodos = () => dispatch =>
  getTodos()
    .then(({ todos }) => {
      dispatch(setTodos(todos));
      return todos;
    })
    .catch(dispatchError(dispatch));

export const attemptAddTodo = (text, description) => dispatch =>
  postTodo({ text, description })
    .then(({ todo, user }) => {
      console.log("the todo post", todo)
      dispatch(addTodo(todo));
      return user;
    })
    .catch(dispatchError(dispatch));

export const attemptToggleCompleteTodo = id => dispatch =>
  putToggleCompleteTodo({ id })
    .then(data => {
      dispatch(toggleCompleteTodo(id));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateTodo = (id, text, description) => dispatch =>
  // param
  putTodo({ id, text, description})
    .then(data => {
      dispatch(updateTodo({ id, text, description, updatedAt: data.todo.updatedAt }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteTodo = id => dispatch =>
  deleteTodo({ id })
    .then(data => {
      dispatch(removeTodo(id));
      return data;
    })
    .catch(dispatchError(dispatch));
