import React, { Fragment } from 'react';
import Header from './componentes/Header';

function App() {
  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <h1>Formulario aqui!</h1>
      </div>
    </Fragment>
  );
}

export default App;
