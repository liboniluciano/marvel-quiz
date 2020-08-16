import React from 'react';
import Header from '../../components/Header';

import { Container, RankingContent, RankingLegend, RankingFieldset, RankingListContainer ,RankingList, RankingListItem } from './styles';

const Ranking: React.FC = () => {
  const a = 1;
  return (
    <Container>
      <Header />
      <RankingContent>
        <RankingFieldset>
          <RankingLegend>Melhores 10 pontuações</RankingLegend>
          <RankingListContainer>
          <RankingList start={a}>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
            <RankingListItem>Luciano - 350 pontos</RankingListItem>
          </RankingList>
          </RankingListContainer>
        </RankingFieldset>
      </RankingContent>
    </Container>
  );
}

export default Ranking;