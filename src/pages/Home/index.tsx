import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';

import { HomeContainer, ButtonContainer } from './styles';

const colors = {
  easy: '#1f4068',
  medium: '#1b1b2f',
  hard: '#e43f5a'
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