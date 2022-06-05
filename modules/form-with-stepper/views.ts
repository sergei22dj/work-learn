import styled from 'styled-components';

export const FormSWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: white;
`;
export const InputForm = styled.input`
    padding: 0 10px;
    width: 100%;
    color: violet;
    height: 50px;
    margin: 20px 0;
    font-size: 24px;
`;
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Button = styled.button`
    display: flex;
    height: 60px;
    background-color: violet;
    display: flex;
    align-items: center;
    font-size: 20px;
    border-radius: 12px;
    margin: 10px 10px;
    justify-content: center;
    width: 20%;
    cursor: pointer;

    &:hover {
        color: white;
        
        
      }
    
    &:active{
        box-shadow: inset 0 0 4px 4px white;
    }
`;
export const ItemBlockWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px; 
`;