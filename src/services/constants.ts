// Thay đường dẫn ipV4 tại đây
import axios from 'axios';

export const baseApiUrl = 'http://192.168.1.21:3000/api';

export const axios_API_Instance = axios.create({
  baseURL: baseApiUrl,
});
