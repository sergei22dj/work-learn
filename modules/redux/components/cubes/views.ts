import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: bisque;
`;
export const CubesWrapper = styled.div<{columns : number, strings: number}>`
    background-color: blanchedalmond;
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    grid-template-rows: ${({ strings }) => `repeat(${strings}, 1fr)`};
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;
export const DeleteColumnButtons = styled.div`
    display: flex;
`;
export const DeleteStringButtons = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Cube = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 1px;
    background-color: #9e9ef5;
    width: 50px;
    height: 50px;
    &:hover{
        border: 1px solid white;

    }
`;
export const AreaWrapper = styled.div`
    display: flex;
`;
export const AddStringButtons = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ButtonAdd = styled.button`
    background-color: #9be79b;
    width: 50px;
    height: 50px;
    margin: 1px;
    border: none;
    &:hover{
        border: 1px solid white;
    }
    &:disabled{
        cursor: not-allowed;
    }
`;
export const ButtonDelete = styled.button`
    background-color: #cd7b7b;
    width: 50px;
    height: 50px;
    margin: 1px;
    border: none;
    &:hover{
        border: 1px solid white;
    }
    &:disabled{
        cursor: not-allowed;
    }
`;
export const ContainerStr = styled.div`
    opacity: 0.5;
`;
export const ContainerClm = styled.div`
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
`;
