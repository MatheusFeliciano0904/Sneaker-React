import { useParams } from 'react-router-dom';
import Cadastro from './Cadastro';
import NotFound from './NotFound';

const BuscaTenisAlteracao = ({ tenis, alterarTenis }) => {
    const { id_imagemTenis } = useParams();
    
    // Verifica se tenis é um array válido antes de usar find
    if (!Array.isArray(tenis)) {
        return <NotFound />;
    }

    // Busca o tênis com correspondência exata no id_imagem
    const teni = tenis.find((teni) => teni.id_imagem === id_imagemTenis);

    // Se não encontrar, retorna NotFound
    if (!teni) {
        return <NotFound />;
    }

    // Retorna o componente Cadastro com as props necessárias
    return <Cadastro 
             teni={teni} 
             alterarTenis={alterarTenis} 
             inserirTenis={null} // Garante que o Cadastro entenda que é uma alteração
           />;
};

export default BuscaTenisAlteracao;