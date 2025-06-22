import React from "react";
import MenuTabela from "./MenuTabela";
import TabelaTenis from "./TabelaTenis";

const Tabela = (props) => {
    return (
        <>
            <MenuTabela />
            <TabelaTenis tenis={props.tenis} excluirTenis={props.excluirTenis} />
        </>
    )
};
export default Tabela;