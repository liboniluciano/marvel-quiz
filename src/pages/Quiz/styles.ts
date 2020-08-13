import styled from 'styled-components';

interface ImgUrl {
  url: string
}

export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: auto;
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
  color: #FFF;
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

  @media(min-width: 70rem){
    width: 100rem;
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
  margin-top: 1rem;

  @media(min-width: 70rem){
    margin-top: 2.0rem;
  }
`;

export const ButtonTest = styled.button`
  background-color: #1f4068;
  color: #FFF;
  width: 15rem;
  height: 6rem;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;
  margin-bottom: 2rem;
`;




