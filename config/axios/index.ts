import axios from 'axios';

import { API_BASE_URL, MOCK_MODE } from '../index';

const instance = axios.create({
  baseURL: MOCK_MODE ? 'http://localhost:3000/api/mocks' : API_BASE_URL,
});

export default instance;
