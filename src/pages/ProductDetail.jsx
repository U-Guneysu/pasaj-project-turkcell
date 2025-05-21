import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.css";
import { specialForYou, bestOffers, pasajNew } from "../data/sliderData";

const ProductDetail = () => {
  const { productName } = useParams();

  const sliderData = [...specialForYou, ...bestOffers, ...pasajNew];

  const product = sliderData.find(
    (item) =>
      item.name.toLowerCase() === decodeURIComponent(productName).toLowerCase()
  );

  if (!product) return <div>Ürün bulunamadı.</div>;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="container-main px-3 py-2 mb-4"
        style={{ backgroundColor: "#fafbfd" }}
      >
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Ana Menü</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/category/${encodeURIComponent(product.category)}`}>
              {product.category}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <main className="flex-grow-1 d-flex justify-content-center align-items-center mb-4">
        <div
          className="container border rounded p-5 shadow"
          style={{ maxWidth: 1140, width: "100%" }}
        >
          <div className="row align-items-center">
            {/* Resim - Sol taraf */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded"
                style={{ maxHeight: "27.25rem", objectFit: "contain" }}
              />
            </div>

            {/* Ürün adı ve buton - Sağ taraf */}
            <div className="col-md-6 d-flex flex-column align-items-start">
              <h2 className="mb-4 fs-2">{product.name}</h2>
              <button className="custom-btn btn-basket px-4 py-2">
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
