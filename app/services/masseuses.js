import axios from 'axios';

const service = {
  getMasseuses: () => axios.get('/masseuse')
};

export default service;
