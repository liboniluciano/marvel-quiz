import axios from 'axios';

const apiMarvel = axios.create({
  baseURL: process.env.MARVEL_URL,
});

export default apiMarvel;