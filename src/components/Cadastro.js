import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Cadastro extends Component {
    state = {
        teni: {
            id: this.props.teni.id,
            id_imagem: this.props.teni.id_imagem,
            modelo: this.props.teni.modelo,
            preco: this.props.teni.preco,
            categoria: this.props.teni.categoria,
            ano: this.props.teni.ano,
            descricao: this.props.teni.descricao
        },
        redirecionar: false
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.props.inserirTenis) {
            this.props.inserirTenis(this.state.teni);
        } else {
            this.props.alterarTenis(this.state.teni);
        }
        this.setState({ redirecionar: true });
    };

    render() {
        if (this.state.redirecionar === true) {
            return <Navigate to="/tabela" />;
        }

        return (
            <main className="formulario">
                <form onSubmit={this.handleFormSubmit}>
                    <h2>{this.props.inserirTenis ? "Cadastrar Tênis" : "Alteração do Tênis"}</h2>

                    <p>
                        <label htmlFor="fmodelo">Modelo:</label>
                        <input
                            type="text"
                            autoFocus
                            required
                            id="fmodelo"
                            value={this.state.teni.modelo}
                            onChange={(e) => this.setState({
                                teni: { ...this.state.teni, modelo: e.target.value }
                            })}
                        />
                    </p>

                    <p>
                        <label htmlFor="fpreco">Preço (R$):</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            required
                            id="fpreco"
                            value={this.state.teni.preco}
                            onChange={(e) => this.setState({
                                teni: { ...this.state.teni, preco: parseFloat(e.target.value) }
                            })}
                        />
                    </p>

                    <p>
                        <label htmlFor="fcategoria">Categoria:</label>
                        <select
                            id="fcategoria"
                            required
                            value={this.state.teni.categoria}
                            onChange={(e) => this.setState({
                                teni: { ...this.state.teni, categoria: e.target.value }
                            })}
                        >
                            <option value="esportivo">Esportivo</option>
                            <option value="casual">Casual</option>
                            <option value="saltos">Saltos e Botas</option>
                        </select>
                    </p>

                    <p>
                        <label htmlFor="fano">Ano:</label>
                        <input
                            type="number"
                            required
                            id="fano"
                            min="1900"
                            max={new Date().getFullYear()}
                            value={this.state.teni.ano}
                            onChange={(e) => this.setState({
                                teni: { ...this.state.teni, ano: e.target.value }
                            })}
                        />
                    </p>

                    <p>
                        <label htmlFor="fdescricao">Descrição:</label>
                        <textarea
                            id="fdescricao"
                            required
                            value={this.state.teni.descricao}
                            onChange={(e) => this.setState({
                                teni: { ...this.state.teni, descricao: e.target.value }
                            })}
                        />
                    </p>

                    <p>
                        <button type="submit" className="botao cadastrar-alterar">
                            {this.props.inserirTenis ? "Cadastrar" : "Alterar"}
                        </button>
                    </p>
                </form>
            </main>
        );
    }
}

export default Cadastro;