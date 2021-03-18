import '../estilos/App.scss';
import DetallesItem from '../vistas/DetallesItem';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <DetallesItem />
      </main>
    </>
  );
}

export default App;
