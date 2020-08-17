import styled from 'styled-components';

export const Container = styled.div`
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: auto;

`;

export const RankingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

export const RankingLegend = styled.legend`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #FFF;
  width: 100%;
`;

export const RankingFieldset = styled.fieldset`
  width: 30rem;
  height: 47rem;

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
  font-size: 2.0rem;

  @media(min-width: 70rem){
  font-size: 3rem;
  }
`;


