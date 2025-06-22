import { useParams } from 'react-router-dom';
import Cadastro from './Cadastro';
import NotFound from './NotFound';

const BuscaTenisAlteracao = ({ tenis, alterarTenis }) => {
    const { id_imagemTenis } = useParams();
    
    
    if (!Array.isArray(tenis)) {
        return <NotFound />;
    }

    
    const teni = tenis.find((teni) => teni.id_imagem === id_imagemTenis);

    
    if (!teni) {
        return <NotFound />;
    }

   
    return <Cadastro 
             teni={teni} 
             alterarTenis={alterarTenis} 
             inserirTenis={null} 
           />;
};

export default BuscaTenisAlteracao;