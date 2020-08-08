import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';

import { HomeContainer, ButtonContainer, TitleContainer, DescriptionTitle, DescriptionContainer, DescriptionRules } from './styles';

const colors = {
  easy: '#1f4068',
  medium: '#1b1b2f',
  hard: '#e43f5a'
}

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <TitleContainer>
        <DescriptionTitle>Bem vindo ao Marvel Quiz</DescriptionTitle>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionRules>O Quiz consiste em acertar os personagens que aparecer de acordo com a dificuldade. Será permitido 3 erros.</DescriptionRules>
        <DescriptionRules>Fácil: 1 pontos com 15 segundos.</DescriptionRules>
        <DescriptionRules>Médio: 3 pontos com 10 segundos</DescriptionRules>
        <DescriptionRules>Difícil: 5 pontos com 10 segundos</DescriptionRules>
      </DescriptionContainer>
      <ButtonContainer>
        <Button name="easy" label="Fácil" color={colors.easy} />
        <Button name="medium" label="Médio" color={colors.medium} />
        <Button name="hard" label="Difícil" color={colors.hard} />
      </ButtonContainer>
    </HomeContainer>
  );
}

export default Home;