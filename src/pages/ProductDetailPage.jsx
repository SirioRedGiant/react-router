//note  HOOK --> che ci permette di leggere i parametri dell'url
import { useParams } from "react-router-dom"; // lo importo

export default function ProductDetailPage() {
  const { id } = useParams(); //  lo invoco
  return <h1>Sono la pagina di dettaglio di un prodotto {id}</h1>;
}
