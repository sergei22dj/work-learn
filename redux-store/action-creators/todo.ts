import axios from 'axios';
import { Dispatch } from 'react';
import { ITodoAction, ITodoActionTypes } from '../types/todo';

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<ITodoAction>) => {
    try {
      dispatch({ type: ITodoActionTypes.FETCH_TODO });
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit }
      });

      setTimeout(() => {
        dispatch({ type: ITodoActionTypes.FETCH_TODO_SUCCESS, payload: [...response.data] });
      }, 1500);
    } catch (e) {
      setTimeout(() => {
        dispatch({ type: ITodoActionTypes.FETCH_TODO_ERROR, payload: '(Todo List loading error) ' });
      }, 1500);
    }
  };
};

export const setTodoPage = (page: number): ITodoAction => {
  return { type: ITodoActionTypes.SET_TODO_PAGE, payload: page };
};
