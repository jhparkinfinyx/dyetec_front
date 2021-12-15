import axios from 'axios';
import { SERVER_URL } from 'config';

axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
    // 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  withCredentials: true
});
