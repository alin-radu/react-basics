import axios from 'axios';

const KEY = 'AIzaSyAxbvAFO7Lpx5F8zZeNbVoi1OSRvpz1mHA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
