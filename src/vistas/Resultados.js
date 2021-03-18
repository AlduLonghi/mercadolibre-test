import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemLink from '../componentes/ItemLink';
import '../estilos/Resultados.scss';
import fetchQueryResults from '../helpers/api';

const Resultados = () => {
  const [resultados, setResultados] = useState();
  const { query } = useParams();

  useEffect(() => {
    fetchQueryResults(query).then(res => setResultados(res.data.results));
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
