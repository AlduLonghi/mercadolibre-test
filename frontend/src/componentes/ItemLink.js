import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../estilos/ItemLink.scss';

const ItemLink = ({ itemInfo }) => (
  <Link to={`/item/${itemInfo.id}`} className="item-link">
    <div className="itemLink-container">
      <img src={itemInfo.thumbnail} alt="Item thumbnail" />
      <div className="itemlink-detalles">
        <div>
          <p className="precio">{`$${itemInfo.price.toLocaleString('es-ES')}`}</p>
          <p className="descripcion">{itemInfo.title}</p>
        </div>
        <div>
          <p className="locacion">{itemInfo.address.state_name}</p>
        </div>
      </div>
    </div>
  </Link>
);

ItemLink.propTypes = {
  itemInfo: PropTypes.instanceOf(Object).isRequired,
};

export default ItemLink;
