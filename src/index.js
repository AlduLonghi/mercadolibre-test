import React from 'react';
import ReactDOM from 'react-dom';
import './estilos/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './componentes/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
