import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';

import { QuizContainer, FieldsetContainer, PersonsContainer, PersonsLegend, ImageContainer, PersonImage, Questions, ButtonContainer } from './styles';

const Quiz: React.FC = () => {
  return (
     <QuizContainer>
      <Header />
      <FieldsetContainer>
        <PersonsContainer>
          <PersonsLegend>Questão 1 de 10</PersonsLegend>
          <ImageContainer>
            <PersonImage />
          </ImageContainer>
          <Questions>
            <Button name='Button1' label='Herói 1' color='#1f4068'/>
            <Button name='Button1' label='Herói 1' color='#1f4068'/>
            <Button name='Button1' label='Herói 1' color='#1f4068'/>
            <Button name='Button1' label='Herói 1' color='#1f4068'/>
          </Questions>
        </PersonsContainer>
        <ButtonContainer>
          <Button name='Pular' label='Pular' color='#00b7c2'/>
        </ButtonContainer>  
      </FieldsetContainer>
     </QuizContainer>
  );
}

export default Quiz;