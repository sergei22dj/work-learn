import React from 'react';
// hooks
import { useAppSelector } from '@md-modules/shared/hooks/use-app-selector';
import { useAppDispatch } from '@md-modules/shared/hooks/use-app-dispatch';
// components
import UserList from '../pokemons-list';
// views
import { Content, GradientBorder, Wrapper } from './views';
// Slicers
import { modalSlice } from 'redux-store/modules/modal/slicer';

const ModalWUsers = () => {
  const { activeModal } = useAppSelector((state) => state.modalReducer);
  const { closeModal } = modalSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <Wrapper activeModal={activeModal} onClick={() => dispatch(closeModal())}>
      <Content activeModal={activeModal} onClick={(e) => e.stopPropagation()}>
        <GradientBorder>
          <UserList />
        </GradientBorder>
      </Content>
    </Wrapper>
  );
};
export default ModalWUsers;
