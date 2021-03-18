import Logo from '../assets/Logo_ML.png';

const ItemLink = () => {
    return ( 
      <div className="itemLink-container">
          <img src={Logo} alt="Item thumbnail"/>
          <div>
              <p>$1.900</p>
              <p>Samsung Galaxy A51 128 GB prism crush black 4 GB RAM</p>
          </div>
          <div>
              <p>Capital Federal</p>
          </div>
      </div>
    );
}
 
export default ItemLink;