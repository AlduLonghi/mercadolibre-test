import axios from 'axios';

async function fetchQueryResults() {
  const request = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=celular&limit=4', {});
  return request;
}

export default fetchQueryResults;
