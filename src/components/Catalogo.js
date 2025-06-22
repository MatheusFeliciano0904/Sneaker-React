import React from "react";
import { Link } from "react-router-dom";

const Catalogo = ({ tenis }) => {
    return (
        <main className="principal">
            <h2>Categoria Esportiva</h2>
            <ol>
                {tenis.filter(teni => teni.categoria === "esportivo").map(teni => 
                (
                    <li><Link to={`/teni/${teni.slug}`}>{teni.modelo}</Link></li>
                ))}
            </ol>

            <h2>Categoria Casual</h2>
            <ol>
                {tenis.filter(teni => teni.categoria === "casual").map(teni => 
                (
                    <li><Link to={`/teni/${teni.slug}`}>{teni.modelo}</Link></li>
                ))}
            </ol>
            <h2>Categoria Saltos e Botas</h2>
            <ol>
                {tenis.filter(teni => teni.categoria === "saltos e botas").map(teni => 
                (
                    <li><Link to={`/teni/${teni.slug}`}>{teni.modelo}</Link></li>
                ))}
            </ol>
            <h2>Categoria Social</h2>
            <ol>
                {tenis.filter(teni => teni.categoria === "sociais").map(teni => 
                (
                    <li><Link to={`/teni/${teni.slug}`}>{teni.modelo}</Link></li>
                ))}
            </ol>  
        </main>
    );
};
export default Catalogo;