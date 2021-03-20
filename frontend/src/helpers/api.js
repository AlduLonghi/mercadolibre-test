import axios from 'axios';

export async function fetchQueryResults(query) {
  const request = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`, {});
  return request;
}

export async function fetchItem(id) {
  const request = await axios.get(`https://api.mercadolibre.com/items/${id}`, {});
  return request;
}
