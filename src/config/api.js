import axios from 'axios';
const baseUrl = 'https://codezap.herokuapp.com';

const API = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export default API;
