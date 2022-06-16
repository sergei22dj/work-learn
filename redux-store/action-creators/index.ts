import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
import * as ModalActionCreators from './modal';

export default {
  ...TodoActionCreators,
  ...UserActionCreators,
  ...ModalActionCreators
};
