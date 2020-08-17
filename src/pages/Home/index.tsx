import React from 'react';

import { useDifficulty } from '../../contexts/difficulty';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import { HomeContainer, ButtonContainer, TitleContainer, DescriptionTitle, DescriptionContainer, DescriptionRules, ButtonHome, Description } from './styles';

const colors = {
  easy: '#1f4068',
  medium: '#162447',
  hard: '#1B1B2F'
}

const Home: React.FC = () => {
  const { push } = useHistory();

  const { setDifficultyGame } = useDifficulty();

  function handleSetDifficulty(value: string) {
    setDifficultyGame(value);
    push('/quiz');
  }

  return (
    <HomeContainer>
      <Header />
      <Description>
        <TitleContainer>
          <DescriptionTitle>Bem vindo ao Marvel Quiz</DescriptionTitle>
        </TitleContainer>
        <DescriptionContainer>
          <DescriptionRules>
             Neste quiz, aparecerão personagens da Marvel, onde o tempo de resposta muda de acordo com a dificuldade. Você também pode realizar 3 pulos sem perder a questão.
            </DescriptionRules> 
          <DescriptionRules>Fácil: 1 ponto com 15 segundos.</DescriptionRules>
          <DescriptionRules>Médio: 3 pontos com 10 segundos</DescriptionRules>
          <DescriptionRules>Difícil: 5 pontos com 5 segundos</DescriptionRules>
        </DescriptionContainer>
      </Description>
      <ButtonContainer>
        <ButtonHome color={colors.easy} onClick={() => handleSetDifficulty('Easy')}>Fácil</ButtonHome>
        <ButtonHome color={colors.medium} onClick={() => handleSetDifficulty('Medium')} >Médio</ButtonHome>
        <ButtonHome color={colors.hard} onClick={() => handleSetDifficulty('Hard')} >Difícil</ButtonHome>
      </ButtonContainer>  
    </HomeContainer>
  );
}

export default Home;