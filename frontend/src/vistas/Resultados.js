import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../componentes/Breadcrumb';
import ItemLink from '../componentes/ItemLink';
import '../estilos/Resultados.scss';
import useQuery from '../helpers/url';

const Resultados = () => {
  const [resultados, setResultados] = useState();
  const [fetching, setFetching] = useState(true);
  const query = useQuery();
  const location = useLocation().search;

  useEffect(() => {
    setFetching(true);
    axios.get(`/api/items?q=${query.get('search')}`, {})
      .then(res => {
        setResultados(res.data);
      })
      .then(() => setFetching(false));
  }, [location]);

  let toRenderComponent;

  if (!fetching) {
    toRenderComponent = (
      <>
        <Breadcrumb categories={resultados.categories} />
        <div className="itemLinks-container">
          {resultados.items.map(res => <ItemLink key={res.id} itemInfo={res} />)}
        </div>
      </>
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
