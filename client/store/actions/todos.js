export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export const setTodos = todos => ({
  type: SET_TODOS,
  payload: {
    todos,
  },
});

export const addTodo = ({ id, text, description, createdAt }) => ({
  type: ADD_TODO,
  payload: {
    createdAt,
    id,
    text,
    description,
  },
});

export const toggleCompleteTodo = id => ({
  type: TOGGLE_COMPLETE_TODO,
  payload: {
    id,
  },
});

export const updateTodo = ({ id, text, description, updatedAt }) => ({
  type: UPDATE_TODO,
  payload: {
    updatedAt,
    id,
    text,
    description,
  },
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});
