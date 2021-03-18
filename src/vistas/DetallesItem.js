import Logo from '../assets/Logo_ML.png';

const DetallesItem = () => (
  <div className="detallesItem-container">
    <div>
      <div>
        <img src={Logo} alt="Imagen producto" />
        <div>
          <p>Nuevo - 234 vendidos</p>
          <h2>deco reverse sombrero oxford</h2>
          <h1>$1.980</h1>
          <button type="button">comprar</button>
        </div>
      </div>
      <div>
        <h3>descripción del producto</h3>
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

export default DetallesItem;
