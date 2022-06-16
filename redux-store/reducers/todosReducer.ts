import { ITodoAction, ITodoActionTypes, ITodoState } from '../types/todo';

const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10
};

export const todoReducer = (state = initialState, action: ITodoAction): ITodoState => {
  switch (action.type) {
    case ITodoActionTypes.FETCH_TODO:
      return { ...state, loading: true };

    case ITodoActionTypes.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case ITodoActionTypes.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ITodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
