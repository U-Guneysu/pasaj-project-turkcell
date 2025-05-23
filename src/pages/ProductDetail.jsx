import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { specialForYou, bestOffers, pasajNew } from "../data/sliderData";
import { categorySliderData } from "../data/categorySliderData";
import { useCart } from "../content/CartContext.jsx";
import "../styles/main.css";
import "../styles/product.css";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { productName } = useParams();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderData = [...specialForYou, ...bestOffers, ...pasajNew, ...categorySliderData];

  // URL parametresine göre ürün seçimi (büyük/küçük harf duyarsız)
  const product = sliderData.find(
    (item) =>
      item.name.toLowerCase() === decodeURIComponent(productName).toLowerCase()
  );

  if (!product) return <div className="container py-5">Ürün bulunamadı.</div>;

  // Favori durumu toggle fonksiyonu
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Sepete ekleme fonksiyonu
  const handleAddToCart = () => {
    addToCart(product);
    alert("Ürün sepete eklendi!");
  };

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
            {/* Resim */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded"
                style={{ maxHeight: "27.25rem", objectFit: "contain" }}
              />
            </div>

            {/* Ürün Bilgileri */}
            <div className="col-md-6 d-flex flex-column align-items-start">
              {/* Ürün adı ve favori ikonu */}
              <div className="d-flex align-items-center gap-2 mb-2 w-100">
                <h2 className="fs-3">{product.name}</h2>
                <button
                  type="button"
                  className="btn p-0 favorite-icon-static"
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={
                    favorites.includes(product.id)
                      ? "Favorilerden çıkar"
                      : "Favorilere ekle"
                  }
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                  }}
                >
                  <svg
                    className={`heart-icon ${
                      favorites.includes(product.id) ? "active" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill={favorites.includes(product.id) ? "red" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <path d="M20.8 4.6c-1.5-1.3-3.7-1.3-5.2 0l-.6.6-.6-.6c-1.5-1.3-3.7-1.3-5.2 0s-1.5 3.6 0 5l5.8 5.8 5.8-5.8c1.6-1.4 1.6-3.7.2-5z" />
                  </svg>
                </button>
              </div>

              {/* Puan ve yorum durumu */}
              <div
                className="d-flex align-items-center gap-3 w-100 mb-4"
                style={{ color: "#666", fontSize: "0.875rem" }}
              >
                {typeof product.puan === "number" && (
                  <div className="paged-rating" style={{ minWidth: "80px" }}>
                    <div className="paged-stars d-flex align-items-center">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <svg
                          key={num}
                          className={`paged-star ${
                            num <= product.puan ? "filled" : ""
                          }`}
                          viewBox="0 0 24 24"
                          style={{ width: "0.75rem", height: "0.75rem" }}
                          fill={num <= product.puan ? "#ffc107" : "none"}
                          stroke="#ffc107"
                          strokeWidth="1"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.797L19.335 24 12 19.897 4.665 24 6 15.547 0 9.75l8.332-1.595z" />
                        </svg>
                      ))}
                      <span style={{ marginLeft: "8px", fontSize: "0.75rem" }}>
                        {product.puan.toFixed(1)}
                      </span>
                    </div>
                  </div>
                )}

                <div>Henüz yorum yok</div>
              </div>

              {/* Renk Kartı */}
              {product.color && (
                <div
                  className="color-card mb-4 p-3 border rounded shadow-sm"
                  style={{ maxWidth: 280 }}
                >
                  <h5
                    className="text-uppercase fw-bold text-secondary mb-2"
                    style={{ fontSize: "12px" }}
                  >
                    Renk
                  </h5>
                  <div className="d-flex align-items-center gap-2">
                    {product.color_circle_black && (
                      <span
                        title="Siyah renk işareti"
                        style={{
                          display: "inline-block",
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          backgroundColor: "black",
                        }}
                      />
                    )}
                    <strong>{product.color}</strong>
                  </div>
                </div>
              )}

              {/* Sepete ekle butonu */}
              <button
                className="custom-btn btn-basket px-4 py-2 w-100"
                style={{ borderRadius: 25 }}
                onClick={handleAddToCart}
              >
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


/* CATEGORY SLİDER DATALARI DETAY SAYFASI + SEPETE EKLEME YAPILACAK */