import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import apiRanking from '../../services/apiRanking';



import { Container, RankingContent, RankingLegend, RankingFieldset, RankingListContainer ,RankingList, RankingListItem } from './styles';

interface RankingData {
  id: number;
  name: string;
  score: number;
}

const Ranking: React.FC = () => {
  const a = 1;
  const [rankings, setRankings] = useState([]);

  async function getRanking(){
    const { data } = await apiRanking.get('score');
    setRankings(data);
  }

  useEffect(() => {
    getRanking();
  }, [])

  return (
    <Container>
      <Header />
      <RankingContent>
        <RankingFieldset>
          <RankingLegend>Melhores 10 pontuações</RankingLegend>
          <RankingListContainer>
          <RankingList start={a}>
            {rankings.map((ranking: RankingData)=> {
              return (
              <RankingListItem key={ranking.id}>{ranking.name} - {ranking.score} pontos</RankingListItem>
              )
            })}
          </RankingList>
          </RankingListContainer>
        </RankingFieldset>
      </RankingContent>
    </Container>
  );
}

export default Ranking;