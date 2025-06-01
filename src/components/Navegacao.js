import React from "react";
import { NavLink } from "react-router-dom";


const Navegacao = () => (
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/esportivo">Esportivo</NavLink>
        </li>
        <li>
            <NavLink to="/casual">Casual</NavLink>
        </li>
        <li>
            <NavLink to="/saltos e botas">Saltos e Botas</NavLink>
        </li>
        <li>
            <NavLink to="/catalogo">Catálogo</NavLink>
        </li>
    </ul>
);

export default Navegacao;

