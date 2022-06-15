export interface IModalState {
  activeModal: boolean;
}

export enum IModalActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL'
}

interface IOpenModalAction {
  type: IModalActionTypes.OPEN_MODAL;
  payload: boolean;
}
interface ICloseModalAction {
  type: IModalActionTypes.CLOSE_MODAL;
  payload: boolean;
}
export type IModalAction = IOpenModalAction | ICloseModalAction;
