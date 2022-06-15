import axios from 'axios';
import { Dispatch } from 'react';
import { IUserAction, IUserActionTypes } from '../types/user';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({ type: IUserActionTypes.FETCH_USERS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setTimeout(() => {
        dispatch({ type: IUserActionTypes.FETCH_USERS_SUCCESS, payload: [...response.data] });
      }, 500);
    } catch (e) {
      dispatch({ type: IUserActionTypes.FETCH_USERS_ERROR, payload: 'Users loading error' });
    }
  };
};

export const setOneUser = (page: number): IUserAction => {
  return { type: IUserActionTypes.SET_ADD_USER, payload: page };
};

export const deleteUser = (user: number): IUserAction => {
  return { type: IUserActionTypes.DELETE_USER, payload: user };
};
