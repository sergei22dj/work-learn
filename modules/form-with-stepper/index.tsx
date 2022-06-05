import React, { useState } from 'react';
import { Button, FormSWrapper, InputForm, InputWrapper, ItemBlockWrapper } from './views';

interface InputList {
  id: number;
  name: string;
  surname: string;
}

const FormWStepper = () => {
  const [inputList, setInputList] = useState<InputList[]>([{ id: 1, name: '', surname: '' }]);
  console.log(inputList);

  const handleChangeInput = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...inputList];
    values[index][e.target.name] = e.target.value;
    setInputList(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Дані про користувачів : ', inputList);
  };

  const addInputItem = () => {
    setInputList([...inputList, { id: inputList.length + 1, name: '', surname: '' }]);
  };

  const deleteInputItem = (id: number) => {
    const values = [...inputList];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputList(values);
  };

  console.log(inputList);
  return (
    <FormSWrapper onSubmit={handleSubmit}>
      {inputList.map((inputItem, index) => (
        <ItemBlockWrapper>
          <InputWrapper>
            input : {inputItem.id}
            <InputForm
              placeholder='name'
              name='name'
              value={inputItem.name}
              onChange={(e) => handleChangeInput(index, e)}
            />
            <InputForm
              placeholder='surname'
              name='surname'
              value={inputItem.surname}
              onChange={(e) => handleChangeInput(index, e)}
            />
          </InputWrapper>
          <Button onClick={() => deleteInputItem(inputItem.id)}>delete</Button>
        </ItemBlockWrapper>
      ))}
      <Button onClick={addInputItem}>add input</Button>
      <Button onClick={handleSubmit}>send</Button>
    </FormSWrapper>
  );
};
export default FormWStepper;
