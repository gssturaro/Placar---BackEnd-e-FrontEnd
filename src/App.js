import React from 'react';
import PlacarContainer from './componentes/PlacarContainer';
import Titulo from './componentes/Titulo';

const App = () => {
  return (
    <div className="App">
      <p>
        <Titulo />
        <PlacarContainer />
      </p>
    </div>
  );
}

export default App;
