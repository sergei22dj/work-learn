import { InputList } from '@md-modules/form-with-stepper';
import React, { FC } from 'react';
import { Content, GradientBorder, Text, Wrapper } from './views';

interface Props {
  list: InputList[];
  active: boolean;
  setActive: (arg: boolean) => void;
}

const Modal: FC<Props> = ({ list, active, setActive }) => {
  return (
    <Wrapper activeModal={active} onClick={() => setActive(false)}>
      <Content activeModal={active} onClick={(e) => e.stopPropagation()}>
        {list.map((item, index) => (
          <GradientBorder key={index}>
            <Text>Чел номер {item.id}</Text>
            <Text>This чела зовут: {item.name}</Text>
            <Text>По жизни he is : {item.orientation}</Text>
            <Text>Его сёрнейм is : {item.lastname}</Text>
          </GradientBorder>
        ))}
      </Content>
    </Wrapper>
  );
};
export default Modal;
