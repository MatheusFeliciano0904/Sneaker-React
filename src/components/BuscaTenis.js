import { useParams } from "react-router-dom";
import Tenis from "./Tenis";
import NotFound from "./NotFound";

const BuscaTenis = ({ tenis }) => {
    const { teniSlug } = useParams();
    const teni = tenis.find((teni) => teni.slug === teniSlug);

    return teni ? <Tenis teni={teni} /> : <NotFound />;
};
export default BuscaTenis;