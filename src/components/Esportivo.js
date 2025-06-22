import React from "react";
import { Link } from "react-router-dom";

const Esportivo = ({ tenis }) => (
    <main className="principal">
        <h2>Categoria Esportiva</h2>
        {tenis.filter(c => c.categoria === "esportivo").map(teni =>
        (
            <div className="card">
                <div className="thumb">
                    <img src={"/imagens/tenis/" + teni.id_imagem + ".jpg"} />
                </div>
                <Link to={`/teni/${teni.slug}`}>
                    <div className="detalhes">
                        <h3>{teni.modelo}</h3>
                        <p>{teni.descricao.slice(0, 100) + "..."}</p>
                        <p>Leia mais &gt;</p>
                    </div>
                </Link>
            </div>
        ))}
    </main>
);
export default Esportivo;
