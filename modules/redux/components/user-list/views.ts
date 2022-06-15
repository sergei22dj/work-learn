import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 700px;
`;
export const Header = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 40px;
  margin: 0;
`;
export const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: white;
  width: 400px;
`;
export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;
export const ControlItem = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #56c1ff;
  box-shadow: inset 0 0 20px black;
  cursor: pointer;
  font-size: 24px;
  color: white;
  margin: 20px;

  &:hover {
    background-color: #7fc7f1;
  }
`;
export const ActionBar = styled.div`
  display: flex;
`;
export const Description = styled.div`
  display: none;
`;
export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:active ${Description} {
    display: block;
    border-radius: 16px;
    padding: 25px;
    margin-left: 200px;
    width: 100%;
    height: 150px;
    background-color: black;
    opacity: 0.9;
    position: absolute;
    z-index: 9999;
  }
`;
export const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  border-bottom: 1px solid white;
`;

export const DeleteButton = styled.div`
  display: flex;
  width: 50px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #e15ea9;
  box-shadow: inset 0 0 10px black;
  cursor: pointer;
  font-size: 12px;
  color: white;
  margin-left: 20px;

  &:hover {
    background-color: #d52424;
  }
`;
