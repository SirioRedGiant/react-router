import axios from "axios";
import { useEffect, useState } from "react";
//note  HOOK --> che ci permette di leggere i parametri dell'url
import { useParams, Link, useNavigate } from "react-router-dom"; // lo importo

export default function ProductDetailPage() {
  const { id } = useParams(); //  lo invoco
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.data) {
          navigate("/products"); // se l'api risponde ma il prodotto è null
        } else {
          setProduct(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/products");
      });
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="container py-5">
        <h2>
          Loading details...Today you are very lucky to find this product!
        </h2>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">404 - Product disappeared! 🕵️‍♂️</h2>
        <p>Maybe it never existed, or our server is just lazy.</p>
        <Link to="/products" className="btn btn-primary">
          Go back and try again
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/products" className="btn btn-outline-secondary mb-4">
        ← Back to Products
      </Link>

      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <span className="badge bg-secondary mb-2">{product.category}</span>
          <h1 className="fw-bold">{product.title}</h1>
          <p className="lead text-muted">{product.description}</p>
          <h2 className="text-primary my-4">{product.price} €</h2>
          <button
            className="btn btn-success btn-lg"
            onClick={() => alert("not yet, Snaaake!...")}
          >
            Add to Cart (Real this time?)
          </button>
        </div>
      </div>
    </div>
  );
}
