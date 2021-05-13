import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import freeShipping from '../assets/ic_shipping.png';
import '../estilos/ItemLink.scss';

const ItemLink = ({ itemInfo }) => (
  <Link to={`/item/${itemInfo.id}`} className="item-link">
    <div className="itemLink-container">
      <img className="item-link-logo" src={itemInfo.picture} alt="Item thumbnail" />
      <div className="itemlink-detalles">
        <div>
          <div className="precio-shipping-cont">
            <p className="precio">{`$${itemInfo.price.ammount.toLocaleString('es-ES')}`}</p>
            {itemInfo.free_shipping
              ? <img className="free-shipping" src={freeShipping} alt="Free shipping icon" />
              : '' }
          </div>
          <p className="descripcion">{itemInfo.title}</p>
        </div>
        <div>
          <p className="condicion">{itemInfo.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
        </div>
      </div>
    </div>
  </Link>
);

ItemLink.propTypes = {
  itemInfo: PropTypes.instanceOf(Object).isRequired,
};

export default ItemLink;
