import { IModalAction, IModalActionTypes } from '../types/modal';

export const setOpenModal = (activeModal: boolean): IModalAction => {
  return { type: IModalActionTypes.OPEN_MODAL, payload: activeModal };
};
export const setCloseModal = (activeModal: boolean): IModalAction => {
  return { type: IModalActionTypes.CLOSE_MODAL, payload: activeModal };
};
