import React, { FC } from 'react';
import { Content, GradientBorder, Image, Text, Wrapper } from './views';

interface Props {
  active: boolean;
  setActive: (arg: boolean) => void;
  variant: boolean;
}

const ModalDone: FC<Props> = (variant, { active, setActive }) => {
  return (
    <Wrapper variant={active} onClick={() => setActive(false)}>
      <Content variant={active} onClick={(e) => e.stopPropagation()}>
        <Text>
          Done!!! <br /> Registration has been complited
        </Text>
        <GradientBorder>
          <Image src='/static/images/done.gif' />
        </GradientBorder>
      </Content>
    </Wrapper>
  );
};
export default ModalDone;
