import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blackBg};
    padding: 34px;
    @media (max-width: 712px){
        flex-direction: column-reverse;
  }
`;
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
// Card ======================
export const Card = styled.div`
    width: 100%;
    max-width: 404px;
    margin: 10px;
    padding: 16px 100px 16px 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    @media (max-width: 712px){
        padding: 16px 34px 16px 12px;
  }
`;
export const CardSmall = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 10px;
    padding: 16px 43px 16px 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;

    @media (max-width: 712px){
        max-width: 404px;
        padding: 16px 12px 16px 12px;
  }
`;
export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
`;
export const CardImg = styled.img`
    height: 30px;
    width: 30px;
`;
export const CardTitle = styled.div`
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
`;
export const CardDescription = styled.div`
    font-size: 10px;
`;

// Button ============================
export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 40px;
    width: 100%;
    border-radius: 12px;
    max-width: 226px;
    font-size: 10px;
    cursor: pointer;
`;
