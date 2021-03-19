import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItem } from '../helpers/api';
import '../estilos/DetallesItem.scss';

const DetallesItem = () => {
  const [itemData, setItemData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchItem(id).then(res => setItemData(res.data));
  }, []);

  let toRenderComponent;

  if (itemData) {
    const condicion = itemData.condition === 'new' ? 'Nuevo' : 'Usado';
    toRenderComponent = (
      <div className="detallesItem-container">
        <div>
          <div className="detalles-inner-top">
            <img src={itemData.thumbnail} alt="Imagen producto" />
            <div>
              <p className="estado">{`${condicion} - ${itemData.sold_quantity}`}</p>
              <h2>{itemData.title}</h2>
              <h1 className="detalles-precio">{`$${itemData.price.toLocaleString('es-ES')}`}</h1>
              <button type="button" className="comprar-btn">comprar</button>
            </div>
          </div>
          <div className="detalles-inner-bottom">
            <h3>Descripción del producto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {toRenderComponent}
    </>
  );
};

export default DetallesItem;
