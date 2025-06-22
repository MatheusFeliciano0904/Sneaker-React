import React from "react";
import { Link } from "react-router-dom"

const MenuTabela = () => {
    return (
        <main className="principal">
            <nav className="menu">
                <ul>
                    <li>
                        <button className="botao lista-cadastrar-alterar">
                            <Link to="/tabela">Lista de Tênis</Link>
                        </button>
                    </li>
                    <li>
                        <button className="botao lista-cadastrar-alterar">
                            <Link to="/cadastrar">Cadastrar</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </main>
    );
}
export default MenuTabela;