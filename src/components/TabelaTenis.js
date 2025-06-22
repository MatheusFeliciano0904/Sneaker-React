import React from 'react';
import { Link } from 'react-router-dom';

const TabelaTenis = ({ tenis, excluirTenis }) => {
    return (
        <main className="principal">
            <h2>Lista de Tênis</h2>
            {tenis.length === 0 && <h3>Nenhum tênis cadastrado!</h3>}
            {tenis.length > 0 && (
                <table className="tabela">
                    <thead>
                        <tr>
                            <th width="20%">ID</th>
                            <th >Modelo</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th width="8%"></th>
                            <th width="10%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenis.map((teni) => (
                            <tr>
                                <td>{teni.id_imagem}</td>
                                <td>{teni.modelo}</td>
                                <td>R$ {teni.preco.toFixed(2)}</td>
                                <td>{teni.categoria}</td>
                                <td>
                                    <button className="botao lista-cadastrar-alterar">
                                        <Link to={`/alterar/${teni.id_imagem}`}>Alterar</Link>
                                    </button>
                                </td>
                                <td>
                                    <button className="botao excluir"
                                        onClick={ () => { excluirTenis(teni); }}>
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </main >
    );
};

export default TabelaTenis;