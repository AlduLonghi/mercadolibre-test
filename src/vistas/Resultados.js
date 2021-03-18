import { useState, useEffect } from 'react';
import ItemLink from '../componentes/ItemLink';
import '../estilos/Resultados.scss';
import fetchQueryResults from '../helpers/api';

const Resultados = () => {
  const [resultados, setResultados] = useState();

  useEffect(() => {
    fetchQueryResults().then(res => setResultados(res.data.results));
  }, []);

  return (
    <div className="itemLinks-container">
      {resultados && resultados.map(res => <ItemLink key={res.id} itemInfo={res} />)}
    </div>
  );
};

export default Resultados;
