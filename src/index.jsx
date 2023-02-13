import React from 'react';
import ReactDOM from 'react-dom/client';
import Componente from './components/Componente';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Componente firstName="Lucas" lastName="Duarte" age={29} hairColor="Negro"/>
    <Componente firstName="Guillermo" lastName="Bernal" age={26} hairColor="Negro"/>
    <Componente firstName="Isaac" lastName="Vera" age={23} hairColor="Rubio"/>
    <Componente firstName="Marcos" lastName="Saldivar" age={31} hairColor="Pelirrojo"/>
  </React.StrictMode>
);

