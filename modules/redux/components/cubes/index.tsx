import { useEffect, useState } from 'react';
import {
  AddStringButtons,
  AreaWrapper,
  ButtonAdd,
  ButtonDelete,
  ContainerStr,
  Cube,
  CubesWrapper,
  DeleteStringButtons,
  TestC,
  Wrapper
} from './views';
/*  <DeleteColumnButtons strings={string}>
{columnDeleteBtn[0].map((btn, index) => (
  <ContainerClm key={index}>
    <ButtonDelete disabled={column < 2} onClick={() => deleteColumn()}>
      {btn}
    </ButtonDelete>
  </ContainerClm>
))}
</DeleteColumnButtons>
<DeleteStringButtons columns={column}>
          {stringDeleteBtn[0].map((btn, index) => (
            <ContainerStr key={index}>
              <ButtonDelete disabled={string < 2} onClick={() => deleteString()}>
                {btn}
              </ButtonDelete>
            </ContainerStr>
          ))}
        </DeleteStringButtons> */
const Cubes = () => {
  const [string, setString] = useState(2);
  const [column, setColumn] = useState(2);

  const [cubes, setCubes] = useState([Array(column * string).fill('')]);

  const [show, setShow] = useState(0);

  useEffect(() => {
    setCubes([Array(column * string).fill('')]);
  }, [string, column]);

  const addColumn = () => {
    setColumn((prev) => prev + 1);
  };

  const addString = () => {
    setString((prev) => prev + 1);
  };

  const deleteColumn = () => {
    setColumn((prev) => prev - 1);
  };

  const deleteString = () => {
    setString((prev) => prev - 1);
  };
  console.log(show);
  return (
    <Wrapper>
      <TestC columns={column} margin={show}>
        <ButtonDelete disabled={column < 2} onClick={() => deleteColumn()}></ButtonDelete>
      </TestC>

      <AreaWrapper>
        <CubesWrapper strings={string} columns={column}>
          {cubes[0].map((cubes, index) => (
            <Cube onMouseEnter={() => setShow(index)} key={index}>
              {cubes}
            </Cube>
          ))}
        </CubesWrapper>

        <AddStringButtons>
          <ButtonAdd disabled={column > 12} onClick={() => addColumn()}>
            +
          </ButtonAdd>
        </AddStringButtons>
      </AreaWrapper>
      <AddStringButtons>
        <ButtonAdd disabled={string > 9} onClick={() => addString()}>
          +
        </ButtonAdd>
        <ButtonDelete disabled={column < 2} onClick={() => deleteString()}></ButtonDelete>
      </AddStringButtons>
    </Wrapper>
  );
};
export default Cubes;
