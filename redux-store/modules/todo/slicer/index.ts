import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodoState } from 'redux-store/types/todo';

interface TodoState {
  todos: ITodoState[];
  loading: boolean;
  error: string;
  page: number;
  limit: number;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: '',
  page: 1,
  limit: 10
};

/* export const todoReducer = (state = initialState, action: ITodoAction): ITodoState => {
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
}; */

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    fetchTodo(state) {
      state.loading = true;
    },
    fetchTodoSucces(state, action: PayloadAction<ITodoState[]>) {
      state.loading = false;
      state.todos = action.payload;
    },
    fetchTodoError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setTodoPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    }
  }
});

export default todoSlice.reducer;
