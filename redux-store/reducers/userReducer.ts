import { IUserAction, IUserActionTypes, IUserState } from '../types/user';

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = (state = initialState, action: IUserAction): IUserState => {
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
};
