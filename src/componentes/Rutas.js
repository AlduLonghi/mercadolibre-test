import { Route, Switch } from 'react-router-dom';
import Resultados from '../vistas/Resultados';
import DetallesItem from '../vistas/DetallesItem';
import Home from '../vistas/Home';

const Rutas = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/items/search=:query">
      <Resultados />
    </Route>
    <Route exact path="/item/:id">
      <DetallesItem />
    </Route>
  </Switch>
);

export default Rutas;
