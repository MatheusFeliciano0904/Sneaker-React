import React from "react";
import { Link } from "react-router-dom";

const Home = ({ tenis }) => (
    <main className="principal">
        <h2>Lançamentos</h2>
        {tenis.filter((l , index) => index < 5).map(teni => 
        (
            <div className="card">
                <div className="thumb">
                    <img src={"/imagens/tenis/" + teni.id + ".jpg"} />
                </div>
                <Link to={`/teni/${teni.slug}`}>
                    <div className="detalhes">
                        <h3>{teni.modelo}</h3>
                        <p>{teni.descricao.slice(0,100) + "..."}</p>
                        <p>Leia mais &gt;</p>
                    </div>
                </Link>
            </div>
        ))}
    </main>
);
export default Home;