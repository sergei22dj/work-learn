import { useActions } from '@md-modules/redux/hooks/useAction';
import { useTypeSelector } from '@md-modules/redux/hooks/useTypeSelector';
import React from 'react';
import UserList from '../user-list';
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
