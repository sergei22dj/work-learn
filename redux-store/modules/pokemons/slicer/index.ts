import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPokemonsState } from 'redux-store/types/pokemon';
import { fetchPokemons } from '../action-creator';

interface PokemonsState {
  users: IPokemonsState;
  loading: boolean;
  error: string;
}

const initialState: PokemonsState = {
  users: {
    name: '',
    sprites: {
      front_default: ''
    }
  },
  loading: false,
  error: ''
};

/* export const userReducer = (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case IUserActionTypes.FETCH_USERS:
      return { ...state, loading: true, error: null };
    case IUserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, users: action.payload };
    case IUserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, users: [] };
    case IUserActionTypes.DELETE_USER:
      return { ...state, users: state.users.filter((users) => users.id !== action.payload) };
    default:
      return state;
  }
}; */

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPokemons.fulfilled.type]: (state, action: PayloadAction<IPokemonsState>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    },
    [fetchPokemons.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchPokemons.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export default pokemonSlice.reducer;
