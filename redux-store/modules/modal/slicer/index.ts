import { createSlice } from '@reduxjs/toolkit';
import { IModalState } from 'redux-store/types/modal';

const initialState: IModalState = {
  activeModal: false
};

/* export const modalReducer = (state = initialState, action: IModalAction): IModalState => {
  switch (action.type) {
    case IModalActionTypes.OPEN_MODAL:
      return { ...state, activeModal: true };
    case IModalActionTypes.CLOSE_MODAL:
      return { ...state, activeModal: false };
    default:
      return state;
  }
}; */

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.activeModal ? (state.activeModal = false) : (state.activeModal = true);
    }
  }
});

export default modalSlice.reducer;
