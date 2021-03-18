import Logo from '../assets/Logo_ML.png';
import '../estilos/ItemLink.scss';

const ItemLink = () => (
  <div className="itemLink-container">
    <img src={Logo} alt="Item thumbnail" />
    <div className="itemlink-detalles">
      <div>
        <p className="precio">$1.900</p>
        <p className="descripcion">Samsung Galaxy A51 128 GB prism crush black 4 GB RAM drert rgtegge fgregetgrgb ewrfrefe</p>
      </div>
      <div>
        <p className="locacion">Capital Federal</p>
      </div>
    </div>
  </div>
);

export default ItemLink;
