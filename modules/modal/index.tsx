import { InputList } from '@md-modules/form-with-stepper';
import m from './views.module.css';
import React, { FC } from 'react';
import { P, WrapperModal } from './views';

interface Modal {
  list: InputList[];
  active: boolean;
  setActive: (arg: boolean) => void;
}

const Modal: FC<Modal> = ({ list, active, setActive }) => {
  return (
    <div className={active ? m.wrapperActive : m.wrapper} onClick={() => setActive(false)}>
      <div className={active ? m.contentActive : m.content} onClick={(e) => e.stopPropagation()}>
        {list.map((item) => (
          <div className={m.gradientBorder}>
            <P>Чел номер {item.id}</P>
            <P>This чела зовут: {item.name}</P>
            <P>По жизни he is : {item.orientation}</P>
            <P>Его сёрнейм is : {item.lastname}</P>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Modal;
