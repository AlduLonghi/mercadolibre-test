import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import freeShipping from '../assets/ic_shipping.png';
import '../estilos/ItemLink.scss';

const ItemLink = ({ itemInfo }) => (
  <Link to={`/item/${itemInfo.id}`} className="item-link">
    <div className="itemLink-container">
      <img src={itemInfo.picture} alt="Item thumbnail" />
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
