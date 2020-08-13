import React from 'react';

import { useDifficulty } from '../../contexts/difficulty';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import { HomeContainer, ButtonContainer, TitleContainer, DescriptionTitle, DescriptionContainer, DescriptionRules, ButtonHome } from './styles';

const colors = {
  easy: '#1f4068',
  medium: '#1b1b2f',
  hard: '#e43f5a'
}

const Home: React.FC = () => {
  const { push } = useHistory();

  const { setDifficultyGame } = useDifficulty();

  function handleSetDifficulty(value: string){
    setDifficultyGame(value);
    push('/quiz');
  }

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
        <ButtonHome color={colors.easy} onClick={() => handleSetDifficulty('Easy')}>Easy</ButtonHome>
        <ButtonHome color={colors.medium} onClick={() => handleSetDifficulty('Medium')} >Medium</ButtonHome>
        <ButtonHome color={colors.hard} onClick={() => handleSetDifficulty('Hard')} >Hard</ButtonHome>
      </ButtonContainer>
    </HomeContainer>
  );
}

export default Home;