import axios from 'axios';

const BASIC_URL = 'https://pixabay.com/api/';
const API_KEY = '37718597-f2a776258a6c278a1ed771723';

export async function getImages({ query, page }) {
  const param = new URLSearchParams({
    key: `${API_KEY}`,
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${page}`,
  });
  try {
    const response = await axios.get(`${BASIC_URL}?${param}`);

    return response.data.hits;
  } catch (error) {
    console.error(error);

    return [];
  }
}
