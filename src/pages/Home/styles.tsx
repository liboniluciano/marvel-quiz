import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content:center;
  margin-bottom: 2rem;
  max-height: 2rem;
  
  @media(min-width: 700px){
    align-content: center;
    margin-bottom: 3rem;

  }
`;

export const DescriptionTitle = styled.p`
  text-align: center;
  display: flex;
  justify-items: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 4rem;
  color: #FFF;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center; 
  flex-direction: column; 
  margin: 0 0.5rem;
  margin-bottom: 1rem;

  @media(min-width: 70rem){
    align-content: center;
    margin-bottom: 2rem;

  }
`;

export const DescriptionRules = styled.p`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  @media(min-width: 70rem){
    margin-bottom: 1rem;
    margin-top: 0;
  }
  
  `;
