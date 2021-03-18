import axios from 'axios';
import { useState } from 'react';
import ItemLink from '../componentes/ItemLink';
import '../estilos/Resultados.scss';

const Resultados = () => {
  const [resultados, setResultados] = useState();

  async function fetchApi() {
    const request = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=celular&limit=4', {})
      .then(res => setResultados(res.data.results));
    return request;
  }

  fetchApi();

  return (
    <div className="itemLinks-container">
      {resultados.forEach(res => <ItemLink itemInfo={res} />)}
    </div>
  );
};

export default Resultados;
