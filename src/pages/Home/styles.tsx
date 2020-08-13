import styled, { css } from 'styled-components';
import { darken }  from 'polished';

interface ButtonProps  {
  color: string,
}

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

export const ButtonHome = styled.button`
  color: #FFF;
  width: 15rem;
  height: 6rem;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;
  margin-bottom: 2rem;

  ${props => css`
    background-color: ${props.color};

    &:hover {
      background-color: ${darken(0.2, props.color || '#FFF')}
    }
  `}

  @media(min-width: 70rem){
    margin-bottom: 1rem;
    width: 25rem;
    height: 6rem;
    font: 700 3.0rem Marvel;
}

`;
