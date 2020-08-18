import axios from 'axios';

const apiRanking = axios.create({
  baseURL: process.env.REACT_APP_RANKING_API_URL,
});

export default apiRanking;