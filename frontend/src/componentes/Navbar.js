import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../assets/Logo_ML.png';
import SearchIcon from '../assets/ic_Search.png';
import '../estilos/Navbar.scss';

const Navbar = ({ onClick, onChange }) => (
  <nav>
    <Link to="/"><img src={Logo} alt="Logo MercadoLibre" /></Link>
    <form>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        <img src={SearchIcon} alt="search icon" />
      </button>
    </form>
  </nav>
);

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Navbar;
