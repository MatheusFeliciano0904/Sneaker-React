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
import BuscaTenis from "./components/BuscaTenis";
import axios from "axios";


class App extends Component {
  state = {
    tenis: []
  };
  async componentDidMount() {
    try {
      const { data: tenis } = await axios.get("/api/todosTenis.json");
      this.setState({ tenis });
    } catch (error) {
      console.log(error);
      document.querySelectorAll(".principal")[0].insertAdjacentHTML(
        "beforeend",
      "<p class='erro'>Mensagem de erro</p>"
      );
    }
  }
  render() {
    return (
      <Router>
        <Topo />
          <Routes>
            <Route path="/"
              element={<Home tenis={this.state.tenis} />} />
            <Route
              path="/esportivo"
              element={<Esportivo tenis={this.state.tenis} />} />
            <Route
              path="/casual"
              element={<Casual tenis={this.state.tenis} />} />
            <Route
              path="/saltos e botas"
              element={<SaltosBotas tenis={this.state.tenis} />} />
            <Route
              path="/catalogo"
              element={<Catalogo tenis={this.state.tenis} />} />
            <Route
              path="/teni/:teniSlug"
              element={<BuscaTenis tenis={this.state.tenis} />} />
            <Route path="*" element={<NotFound/>} /> 
          </Routes>
          <Rodape />
      </Router>
    );
  }
}
export default App;
