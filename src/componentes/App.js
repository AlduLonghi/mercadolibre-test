import '../estilos/App.scss';
import ItemLink from './ItemLink';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemLink />
        <ItemLink />
      </main>
    </>
  );
}

export default App;
