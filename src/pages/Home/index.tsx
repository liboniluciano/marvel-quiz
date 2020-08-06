import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';

import { HomeContainer, ButtonContainer } from './styles';

const colors = {
  easy: '#33FF39',
  medium: '#EEF504',
  hard: '#EE1626'
}

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <ButtonContainer>
        <Button name="easy" label="Fácil" color={colors.easy} />
        <Button name="medium" label="Médio" color={colors.medium} />
        <Button name="hard" label="Difícil" color={colors.hard} />
      </ButtonContainer>
    </HomeContainer>
  );
}

export default Home;