import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Topo from "./components/Topo";
import Home from "./components/Home";
import Esportivo from "./components/Esportivo";
import Casual from "./components/Casual";
import SaltosBotas from "./components/SaltosBotas";
import Social from "./components/Social";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import BuscaTenis from "./components/BuscaTenis";
import Tabela from "./components/Tabela";
import BuscaTenisAlteracao from "./components/BuscaTenisAlteracao";
import Cadastro from "./components/Cadastro";
import axios from "axios";

class App extends Component {
  state = {
    tenis: []
  };

  async componentDidMount() {
    try {
      const { data: tenis } = await axios.get("/api/todosTenis.json");
      const tenisFormatados = tenis.map(teni => ({
        ...teni,
        preco: typeof teni.preco === 'string' ? parseFloat(teni.preco) : teni.preco
      }));
      this.setState({ tenis: tenisFormatados });
    } catch (error) {
      console.error("Erro ao carregar tênis:", error);
      document.querySelectorAll(".principal")[0]?.insertAdjacentHTML(
        "beforeend",
        "<p class='erro'>Erro ao carregar os tênis. Tente recarregar a página.</p>"
      );
    }
  }

  inserirTenis = (teni) => {
    const novoId = this.state.tenis.length > 0 
      ? Math.max(...this.state.tenis.map(t => t.id)) + 1 
      : 1;
    
    const novoTeni = {
      ...teni,
      id: novoId,
      preco: parseFloat(teni.preco),
      ano: parseInt(teni.ano)
    };
    
    this.setState({ tenis: [...this.state.tenis, novoTeni] });
  };

  alterarTenis = (teni) => {
    const tenisAtualizados = this.state.tenis.map(t => 
      t.id === teni.id ? { 
        ...teni, 
        preco: parseFloat(teni.preco),
        ano: parseInt(teni.ano)
      } : t
    );
    this.setState({ tenis: tenisAtualizados });
  };

  excluirTenis = (teni) => {
    if (window.confirm(`Deseja realmente excluir o tênis ${teni.modelo}?`)) {
      const tenisFiltrados = this.state.tenis.filter(t => t.id_imagem !== teni.id_imagem);
      this.setState({ tenis: tenisFiltrados });
    }
  };

  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/" element={<Home tenis={this.state.tenis} />} />
          <Route path="/esportivo" element={<Esportivo tenis={this.state.tenis} />} />
          <Route path="/casual" element={<Casual tenis={this.state.tenis} />} />
          <Route path="/saltos e botas" element={<SaltosBotas tenis={this.state.tenis} />} />
          <Route path="/sociais" element={<Social tenis={this.state.tenis} />} />
          <Route path="/catalogo" element={<Catalogo tenis={this.state.tenis} />} />
          
          <Route 
            path="/cadastrar"
            element={
              <Cadastro
                teni={{ 
                  id: 0, 
                  id_imagem: "", 
                  modelo: "", 
                  preco: "", 
                  categoria: "esportivo", 
                  ano: new Date().getFullYear(), 
                  descricao: "" 
                }}
                inserirTenis={this.inserirTenis}
              />
            }
          />
          
          <Route 
            path="/alterar/:id_imagemTenis"
            element={
              <BuscaTenisAlteracao
                tenis={this.state.tenis}
                alterarTenis={this.alterarTenis}
              />
            }
          />

          <Route 
            path="/tabela" 
            element={
              <Tabela
                tenis={this.state.tenis}
                excluirTenis={this.excluirTenis}
              />
            }
          />

          <Route
            path="/teni/:teniSlug"
            element={<BuscaTenis tenis={this.state.tenis} />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;