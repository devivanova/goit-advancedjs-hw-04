import axios from 'axios';
export { apiService };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '12068791-7815ebab010f154bc5bc1765e';

async function apiService(query, page, perPage) {
  const { data } = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return data;
}