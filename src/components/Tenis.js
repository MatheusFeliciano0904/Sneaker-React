import React from "react";

const Tenis = ({ teni }) => (
    <main className="principal">
        <h2>{teni.modelo}</h2>
        <div className="teni">
            <img
                src={`/imagens/tenis/${teni.id_imagem}.jpg`}
                alt={teni.modelo}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/imagens/tenis/padrao.jpg'; // Imagem padrão se não encontrar
                }}
            />
            <ul>
                <li>Modelo: {teni.modelo}</li>
                <li>Categoria: {teni.categoria === "esportivo" ? "Esportivo" :
                    teni.categoria === "casual" ? "Casual" :
                        "Saltos e Botas"} </li>
                <li>Ano: {teni.ano}</li>
                <li>Preço: US$ {teni.preco},00</li>
            </ul>
            <hr />
            <h3>Descrição do Tênis</h3>
            <p>{teni.descricao}</p>
        </div>
    </main>
);
export default Tenis;