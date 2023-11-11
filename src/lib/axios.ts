import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://upload-ai-server-ubt4.onrender.com',
});
