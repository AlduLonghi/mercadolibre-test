import { Route, Switch } from 'react-router-dom';
import DetallesItem from '../vistas/DetallesItem';
import Resultados from '../vistas/Resultados';

const Rutas = () => (
  <Switch>
    <Route exact path="/items?search=:query">
      <Resultados />
    </Route>
    <Route exact path="/item/:id">
      <DetallesItem />
    </Route>
  </Switch>
);

export default Rutas;
