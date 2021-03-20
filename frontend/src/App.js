import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './estilos/App.scss';
import Navbar from './componentes/Navbar';
import Rutas from './componentes/Rutas';

const App = () => {
  const [query, setQuery] = useState();
  const history = useHistory();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleCLick = () => {
    history.push(`/items?search=${query}`);
  };

  return (
    <>
      <header>
        <Navbar onClick={handleCLick} onChange={handleChange} />
      </header>
      <main>
        <Rutas />
      </main>
    </>
  );
};

export default App;
