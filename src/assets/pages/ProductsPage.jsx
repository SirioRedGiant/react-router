import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
        setIsLoading(false);
      });
  }, []); // L'array vuoto serve a far partire la chiamata una volta sola

  //note Se sta caricando --> mostra un messaggio
  if (isLoading) {
    return <h2>Loading products...</h2>;
  }
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row g-4">
        {data.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 p-3 shadow-sm text-center">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title" title={product.title}>
                  {product.title}
                </h5>
                <p className="text-muted small text-uppercase">
                  {product.category}
                </p>
                <p className="h5 text-primary">{product.price} €</p>
                <button className="btn btn-primary mt-auto">
                  Add to your card
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
