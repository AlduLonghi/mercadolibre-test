import axios from 'axios';
import { useState, useEffect } from 'react';
import ItemLink from '../componentes/ItemLink';
import '../estilos/Resultados.scss';

async function fetchApi() {
  const request = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=celular&limit=4', {});
  return request;
}

const Resultados = () => {
  const [resultados, setResultados] = useState();

  useEffect(() => {
    fetchApi().then(res => setResultados(res.data.results));
  }, []);

  return (
    <div className="itemLinks-container">
      {resultados && resultados.map(res => <ItemLink key={res.id} itemInfo={res} />)}
    </div>
  );
};

export default Resultados;
