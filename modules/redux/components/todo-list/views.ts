import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  z-index: 1000000;
`;

export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  margin: auto auto;
`;

export const Header = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 40px;
  margin: 0;
`;

export const Title = styled.p`
  color: white;
`;

export const Pages = styled.div`
  color: white;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

export const PagesItem = styled.div<{ p: number; page: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  padding: 10px;
  cursor: pointer;
  border-radius: 12px;
  transition: 1.5s;
  border: ${({ p, page }) => (p === page ? '1px solid white' : '1px solid black')};
  background-color: ${({ p, page }) => (p === page ? '#56c1ff' : '#7b7b8d')};
`;
