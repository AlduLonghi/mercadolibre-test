import { useState, useHistory } from 'react';
import '../estilos/App.scss';
import Navbar from './Navbar';
import Rutas from './Rutas';

const App = () => {
  const [query, setQuery] = useState();
  const history = useHistory();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleCLick = () => {
    history.push(`/items?q=${query}`)
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Rutas />
      </main>
    </>
  );
}

export default App;
