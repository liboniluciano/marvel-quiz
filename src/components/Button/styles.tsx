import styled from 'styled-components';

interface ButtonProps  {
  color?: string
}

export const Button = styled.button<ButtonProps>`
  width: 20rem;
  height: 5.6rem;
  background: ${props => props.color};
  color: black;
  border: 0;
  border-radius: 0.8rem;
  font: 700 2.0rem Archivo;
  cursor: pointer;
  margin-bottom: 5rem;
  transition: 0.2s;
  outline: 0;

  &:hover {
    background-color: #876464 ;
  }

  @media(min-width: 1100px){ 
    margin-bottom: 1rem;
    width: 20rem;
    height: 10rem;
}

`;