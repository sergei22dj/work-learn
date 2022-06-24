import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import pokemonsReducer from './modules/pokemons/slicer';
import modalReducer from './modules/modal/slicer';
import todoReducer from './modules/todo/slicer';
import { todosAPI } from './services/todos-api';
import { pokemonsAPI } from './services/pokemons-api';

const rootReducer = combineReducers({
  pokemonsReducer,
  modalReducer,
  todoReducer,
  [todosAPI.reducerPath]: todosAPI.reducer,
  [pokemonsAPI.reducerPath]: pokemonsAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todosAPI.middleware).concat(pokemonsAPI.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
