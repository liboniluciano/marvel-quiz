import styled, { css } from 'styled-components';
import { darken }  from 'polished';

interface ButtonProps  {
  color: string
}

export const Button = styled.button<ButtonProps>`
  color: #FFF;
  width: 20rem;
  height: 5.6rem;
  border: 0;
  border-radius: 0.8rem;
  font: 700 3.0rem Marvel;
  cursor: pointer;
  margin-bottom: 5rem;
  transition: 0.2s;
  outline: 0;


  ${props => css`
    background-color: ${props.color};

    &:hover {
      background-color: ${darken(0.2, props.color)}
    }
  `}


  @media(min-width: 1100px){ 
    margin-bottom: 1rem;
    width: 20rem;
    height: 10rem;
}

`;