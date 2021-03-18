import '../estilos/App.scss';
import Navbar from './Navbar';
import Rutas from './Rutas';

function App() {
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
