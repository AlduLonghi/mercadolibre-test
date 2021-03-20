import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../estilos/DetallesItem.scss';

const DetallesItem = () => {
  const [fetching, setFetching] = useState(true);
  const [itemData, setItemData] = useState();
  const { id } = useParams();

  useEffect(() => {
    setFetching(true);
    axios.get(`/api/items/${id}`, {})
      .then(res => res.data)
      .then(data => {
        setItemData(data.item);
        setFetching(false);
      });
  }, []);

  let toRenderComponent;

  if (!fetching) {
    const condicion = itemData.condition === 'new' ? 'Nuevo' : 'Usado';
    toRenderComponent = (
      <div className="detallesItem-container">
        <div>
          <div className="detalles-inner-top">
            <img src={itemData.picture} alt="Imagen producto" />
            <div>
              <p className="estado">{`${condicion} - ${itemData.sold_quantity} vendidos`}</p>
              <h2>{itemData.title}</h2>
              <h1 className="detalles-precio">{`$${itemData.price.ammount.toLocaleString('es-ES')}`}</h1>
              <button type="button" className="comprar-btn">comprar</button>
            </div>
          </div>
          <div className="detalles-inner-bottom">
            <h3>Descripción del producto</h3>
            <p>{itemData.description}</p>
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
