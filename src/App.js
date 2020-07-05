import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import useSelect from './hooks/useSelect';

function App() {

  // state para definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
