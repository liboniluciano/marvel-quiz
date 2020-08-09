import styled, { css } from 'styled-components';
import { darken }  from 'polished';

interface ButtonProps  {
  color: string,
}

export const Button = styled.button<ButtonProps>`
  color: #FFF;
  width: 15rem;
  height: 6rem;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;
  margin-bottom: 2rem;

  @media(min-width: 70rem){
    margin-bottom: 1rem;
    width: 25rem;
    height: 6rem;
    font: 700 3.0rem Marvel;

}

  ${props => css`
    background-color: ${props.color};

    &:hover {
      background-color: ${darken(0.2, props.color)}
    }
  `}

`;