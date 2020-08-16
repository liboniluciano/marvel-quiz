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

export const RankingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;

export const RankingLegend = styled.legend`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 4rem;
  color: #FFF;
  width: 100%;
`;

export const RankingFieldset = styled.fieldset`
  width: 30rem;
  height: 50rem;

  @media(min-width: 70rem){
    width: 100rem;
    height: 60rem;
  }
`;

export const RankingListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RankingList = styled.ol`
`;

export const RankingListItem = styled.li`
  margin-bottom: 1rem;
  font-size: 2.5rem;

  @media(min-width: 70rem){
  font-size: 3rem;
  }


`;


