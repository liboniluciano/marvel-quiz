import styled from 'styled-components';

export const Container = styled.div`
  width: 100wh;
  height: 100hw;
  color: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
  flex-direction: column;
`;

export const ScoreText = styled.h1`
  margin-top: 1rem;
  font-size: 4rem;
`;

export const InfoScore = styled.h2`
  margin-top: 5rem;
`;

export const FormItems = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  margin-top: 5rem;
  font-size: 3rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 5rem;
  width: 25rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid #FFF;
  outline: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;

  @media(min-width: 70rem){
    height: 7rem;
    width: 50rem;
    font-size: 2rem;

  }
`;

export const Button = styled.button`
  font-size: 2.5rem;
  color: #FFF;
  margin-top: 3rem;
  width: 25rem;
  height: 5rem;
  background: #1f4068;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 1.6;
`;


