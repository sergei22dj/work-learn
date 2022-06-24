import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPokemonsState } from 'redux-store/types/pokemon';

/* export const fetchUsers = () => {
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
}; */

/* export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
    const response = await axios.get<IUserState[]>('https://jsonplaceholder.typicode.com/users');
    dispatch(userSlice.actions.userFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(userSlice.actions.userFetchingError(e.message));
  }
}; */

export const fetchPokemons = createAsyncThunk('user/fetchAll', async (id: number, thunkAPI) => {
  try {
    const response = await axios.get<IPokemonsState[]>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Ізвініте помилка');
  }
});
