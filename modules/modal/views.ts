import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
`;
export const WrapperActive = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    pointer-events: all;
    transition: 0.5s;
`;
export const Content = styled.div`
    border-radius: 12px;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    transform: scale(0.3);
    transition: 0.5s;

`;
export const ContentActive = styled.div`
    border-radius: 12px;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    transform: scale(1);
    transition: 0.5s;

`;
export const InputM = styled.input`
    height: 65px;
    font-size: 30px;
    margin: 20px 0;
    border-radius: 10px;
    border: 1px solid rgb(3, 27, 27);
    width: 100%;
`;
export const Button = styled.div`
    margin-top: 20px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(3, 27, 27);
    width: 50%;
    font-size: 30px;
`;
export const P = styled.p`
    margin: 10px 0;
    color: #64c1dd;;
    font-size: 24px;
`;
export const WrapperModal = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`