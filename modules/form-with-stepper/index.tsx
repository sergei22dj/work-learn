import Modal from '@md-modules/modal';
import React, { useState } from 'react';
import { ReactReduxContextValue } from 'react-redux';
import {
  Button,
  ButtonsWrapper,
  FormSWrapper,
  InputForm,
  InputName,
  InputWrapper,
  ItemBlockWrapper,
  Select,
  Wrapper
} from './views';

export interface InputList {
  id: number;
  name: string;
  lastname: string;
  orientation: string;
}

const FormWStepper = () => {
  const [modalActive, setModalActive] = useState(false);
  console.log(modalActive);
  const [inputList, setInputList] = useState<InputList[]>([]);

  const handleChangeInput = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const values = [...inputList];
    values[index][e.target.name] = e.target.value;
    setInputList(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Дані про користувачів : ', inputList);
  };

  const addInputItem = () => {
    setInputList([...inputList, { id: inputList.length + 1, name: '', lastname: '', orientation: 'Natural' }]);
  };

  const deleteInputItem = (id: number) => {
    const values = [...inputList];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputList(values);
  };
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [inputList]);

  return (
    <Wrapper>
      <FormSWrapper onSubmit={handleSubmit}>
        {inputList.map((inputItem, index) => (
          <ItemBlockWrapper>
            <InputWrapper>
              (block : {inputItem.id})<InputName>NAME :</InputName>
              <InputForm name='name' value={inputItem.name} onChange={(e) => handleChangeInput(index, e)} />
              <InputName>LASTNAME :</InputName>
              <InputForm name='lastname' value={inputItem.lastname} onChange={(e) => handleChangeInput(index, e)} />
              <InputName>LIFE POSITION :</InputName>
              <Select
                placeholder='orientation'
                name='orientation'
                value={inputItem.orientation}
                onChange={(e) => handleChangeInput(index, e)}
              >
                <option>Natooral</option>
                <option>Гomik</option>
                <option>Lox</option>
                <option>Nefar</option>
                <option>БbIДLo</option>
              </Select>
            </InputWrapper>
            <Button onClick={() => deleteInputItem(inputItem.id)}>delete</Button>
          </ItemBlockWrapper>
        ))}
      </FormSWrapper>
      <ButtonsWrapper>
        <Button onClick={addInputItem}>add form</Button>
        <Button onClick={handleSubmit}>see on console</Button>
        <Button onClick={() => setModalActive(true)}>see on modal :)</Button>
      </ButtonsWrapper>

      <Modal list={inputList} active={modalActive} setActive={setModalActive} />
      <div ref={messagesEndRef} />
    </Wrapper>
  );
};
export default FormWStepper;
