import Logo from '../assets/Logo_ML.png';
import SearchIcon from '../assets/ic_Search.png';
import '../estilos/Navbar.scss';

const Navbar = () => (
  <nav>
    <img src={Logo} alt="Logo MercadoLibre" />
    <form>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
      />
      <button type="button"><img src={SearchIcon} alt="search icon" /></button>
    </form>
  </nav>
);

export default Navbar;
