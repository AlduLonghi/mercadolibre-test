import '../estilos/App.scss';
import Resultados from '../vistas/Resultados';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Resultados />
      </main>
    </>
  );
}

export default App;
