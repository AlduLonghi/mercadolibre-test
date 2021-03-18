import Logo from '../assets/Logo_ML.png';
import '../estilos/ItemLink.scss';

const ItemLink = ({ itemInfo }) => (
  <div className="itemLink-container">
    <img src={Logo} alt="Item thumbnail" />
    <div className="itemlink-detalles">
      <div>
        <p className="precio">{itemInfo.price}</p>
        <p className="descripcion">{itemInfo.title}</p>
      </div>
      <div>
        <p className="locacion">{itemInfo.address.state_name}</p>
      </div>
    </div>
  </div>
);

export default ItemLink;
