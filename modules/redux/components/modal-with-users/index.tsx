import React from 'react';
// hooks
import { useActions } from '@md-modules/shared/hooks/useAction';
import { useTypeSelector } from '@md-modules/shared/hooks/useTypeSelector';
// components
import UserList from '../user-list';
// views
import { Content, GradientBorder, Wrapper } from './views';

const ModalWUsers = () => {
  const { activeModal } = useTypeSelector((state) => state.modal);
  const { setCloseModal } = useActions();
  return (
    <Wrapper activeModal={activeModal} onClick={() => setCloseModal(false)}>
      <Content activeModal={activeModal} onClick={(e) => e.stopPropagation()}>
        <GradientBorder>
          <UserList />
        </GradientBorder>
      </Content>
    </Wrapper>
  );
};
export default ModalWUsers;
