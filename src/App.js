import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Esportivo from "./components/Esportivo";
import Casual from "./components/Casual";
import SaltosBotas from "./components/SaltosBotas";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";


class App extends Component {
  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Esportivo" element={<Esportivo />} />
          <Route path="/Casual" element={<Casual />} />
          <Route path="/saltos e botas" element={<SaltosBotas />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;