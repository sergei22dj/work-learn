export interface ITodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}
export enum ITodoActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE'
}
interface IFetchTodoAction {
  type: ITodoActionTypes.FETCH_TODO;
}
interface IFetchTodoSuccessAction {
  type: ITodoActionTypes.FETCH_TODO_SUCCESS;
  payload: any[];
}
interface IFetchTodoErrorAction {
  type: ITodoActionTypes.FETCH_TODO_ERROR;
  payload: string;
}
interface ISetTodoPageAction {
  type: ITodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type ITodoAction = IFetchTodoAction | IFetchTodoSuccessAction | IFetchTodoErrorAction | ISetTodoPageAction;
