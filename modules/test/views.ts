import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    background-color: ${({ theme }) => theme.colors.blackBg};
    padding: 68px;
    @media (max-width: 1612px){
        flex-direction: column-reverse;  
    }
    @media (max-width: 600px){
        display: none;
    }
`;
export const CardLWrapper = styled.div`
    display: flex;
    max-width: 808px;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    @media (max-width: 1612px){
        max-width: 808px;
        min-width: 580px;
  }
    
`;
export const CardRWrapper = styled(CardLWrapper)`
    max-width: 604px;
    @media (max-width: 1612px){
        max-width: 808px;
  }
`;
// Card ======================
export const Card = styled.div<{small?: boolean}>`
    width: 100%;
    margin-bottom: 20px;
    padding: ${({ small }) => `${small ? '32px 80px 32px 24px' : '32px 200px 32px 24px'}`};
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    @media (max-width: 1612px){
        padding: 32px 34px 32px 24px;
  }
`;
export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 32px;
`;
export const CardImg = styled.img`
    height: 60px;
    width: 60px;
`;
export const CardTitle = styled.div`
    margin-bottom: 32px;
    line-height: 64px;
    font-size: 40px;
    font-weight: 500;
`;
export const CardDescription = styled.div`
    font-size: 20px;
    line-height: 32px;
`;

// Button ============================
export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 81px;
    width: 100%;
    border-radius: 12px;
    max-width: 451px;
    font-size: 20px;
    cursor: pointer;
`;
// Error Meassage =======
export const ErrorMessage = styled.div`
    text-align: center;
    padding: 0 20px;
    font-size: 60px;
    display: none;
    @media (max-width: 600px){  
        display: block;
  }
`;
