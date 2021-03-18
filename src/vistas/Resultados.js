import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItemLink from '../componentes/ItemLink';
import '../estilos/Resultados.scss';
import fetchQueryResults from '../helpers/api';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Resultados = () => {
  const [resultados, setResultados] = useState();
  const query = useQuery();

  useEffect(() => {
    fetchQueryResults(query.get('q')).then(res => setResultados(res.data.results));
  }, []);

  let toRenderComponent;

  if (resultados) {
    toRenderComponent = (
      <div className="itemLinks-container">
        {resultados.map(res => <ItemLink key={res.id} itemInfo={res} />)}
      </div>
    );
  } else {
    toRenderComponent = (
      <div>Loading...</div>
    );
  }

  return (
    <>
      {toRenderComponent}
    </>
  );
};

export default Resultados;
