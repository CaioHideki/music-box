import React from "react";
import Votacoes from './pages/Votacoes';
import Musicas from "./pages/Musicas";
import Nav from "./components/Menu";
import './html-css-template/css/reset.css';
import './html-css-template/css/style.css';

function App() {
  return (
    <>
      <Nav />
      <Votacoes />
      <Musicas  />
    </>
  );
}

export default App;