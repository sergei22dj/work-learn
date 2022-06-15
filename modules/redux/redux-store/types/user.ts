export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}
export enum IUserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SET_ADD_USER = 'SET_ADD_USER',
  DELETE_USER = 'DELETE_USER'
}
interface IFetchUserAction {
  type: IUserActionTypes.FETCH_USERS;
}
interface IFetchUserSuccessAction {
  type: IUserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface IFetchUserErrorAction {
  type: IUserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
interface ISetAddUser {
  type: IUserActionTypes.SET_ADD_USER;
  payload: number;
}
interface IDeleteUserAction {
  type: IUserActionTypes.DELETE_USER;
  payload: number;
}

export type IUserAction =
  | IFetchUserAction
  | IFetchUserSuccessAction
  | IFetchUserErrorAction
  | ISetAddUser
  | IDeleteUserAction;
