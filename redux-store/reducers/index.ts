import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { todoReducer } from './todosReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  modal: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
