import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface ImgUrl {
  url: string;
  disabled: boolean;
}

interface ButtonProps {
  color: string;
  isCorrect?: boolean;
  disabled?: boolean;
}

export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: auto;
  color: #FFF;

`;

export const FieldsetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PersonsLegend = styled.legend`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 4rem;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: -1rem;

  @media(min-width: 70vw) {
   margin-top: -4rem;
  }
`;

export const PersonImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 80%;

  @media(min-width: 70rem){
    width: 11rem;
    height: 11rem;
  }
`;

export const PersonsContainer = styled.fieldset`
  width: 30rem;
  height: 50rem;

  @media(min-width: 70rem){
    width: 100rem;
    height: 60rem;
  }
`;

export const Questions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  @media(min-width: 70rem){
   font-size: 2.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 0.5rem;

  @media(min-width: 70rem){
    margin-top: 1rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  color: #FFF;
  font-size: 2rem;
  width: 17rem;
  height: 6rem;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;
  margin-bottom: 1rem;

  ${props => css`
    background-color: ${props.color ||  '#FFF' };
    border: 4px solid ${props.isCorrect ? '#158467' : 'transparent'};
    
    &:hover {
      background-color: ${darken(0.2, props.color || '#FFF')};
    }
  `}

  ${props => props.disabled && css`
    cursor: no-drop;
    opacity: 0.6;

    &:hover {
      background-color: ${props.color}
    }
  `}
  
  @media(min-width: 70rem){
    width: 23rem;
    height: 8rem;
    font-size: 3rem;
  }
`;

export const JumpRemain = styled.p`
  font-size: 2rem;
`;




