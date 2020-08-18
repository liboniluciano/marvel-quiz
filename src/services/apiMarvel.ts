import axios from 'axios';

const apiMarvel = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_URL,
});

export default apiMarvel;