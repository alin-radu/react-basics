import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8i-uoh8FwVXzGzJk_2cxFZdqFXK945pxxYvy937COb0',
  },
});
