import { IModalAction, IModalActionTypes, IModalState } from '../types/modal';

const initialState: IModalState = {
  activeModal: false
};

export const modalReducer = (state = initialState, action: IModalAction): IModalState => {
  switch (action.type) {
    case IModalActionTypes.OPEN_MODAL:
      return { ...state, activeModal: true };
    case IModalActionTypes.CLOSE_MODAL:
      return { ...state, activeModal: false };
    default:
      return state;
  }
};
