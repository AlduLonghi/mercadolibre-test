import axios from 'axios';

async function fetchQueryResults(query) {
  const request = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`, {});
  return request;
}

export default fetchQueryResults;
