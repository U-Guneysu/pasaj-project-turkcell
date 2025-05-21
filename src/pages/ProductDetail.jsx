import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.css";
import "../styles/product.css"
import { specialForYou, bestOffers, pasajNew } from "../data/sliderData";
import { useCart } from "../content/CartContext.jsx";

const ProductDetail = () => {
  const { addToCart } = useCart();

  const { productName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderData = [...specialForYou, ...bestOffers, ...pasajNew];

  const product = sliderData.find(
    (item) =>
      item.name.toLowerCase() === decodeURIComponent(productName).toLowerCase()
  );

    const [favorites, setFavorites] = useState([]);
  
    const toggleFavorite = (id) => {
      setFavorites((prev) =>
        prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
      );
    };

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
            {/* Ürün adı ve buton - Sağ taraf */}
            <div className="col-md-6 d-flex flex-column align-items-start">
              {/* Ürün adı ve favori ikonu - üst satır */}
              <div className="d-flex align-items-center gap-2 mb-2 w-100">
                <h2 className="fs-3">{product.name}</h2>
                <div
                  className="favorite-icon-static"
                  onClick={() => toggleFavorite(product.id)}
                  style={{ cursor: "pointer" }}
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
                </div>
              </div>

              {/* Rating ve yorum durumu - ürün adının altında, sola hizalanmış */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  marginBottom: "1.5rem",
                }}
              >
                {typeof product.puan === "number" && (
                  <div className="paged-rating" style={{ minWidth: "80px" }}>
                    <div
                      className="paged-stars"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <svg
                          key={num}
                          className={`paged-star ${
                            num <= product.puan ? "filled" : ""
                          }`}
                          viewBox="0 0 24 24"
                          style={{
                            width: "0.75rem",
                            height: "0.75rem",
                          }}
                        >
                          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.797L19.335 24 12 19.897 4.665 24 6 15.547 0 9.75l8.332-1.595z" />
                        </svg>
                      ))}
                      <span
                        style={{
                          marginLeft: "8px",
                          fontSize: "0.75rem",
                        }}
                      >
                        {product.puan.toFixed(1)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Henüz yorum yok yazısı */}
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#666",
                    marginTop: "5px",
                  }}
                >
                  Henüz yorum yok
                </div>
              </div>

              {/* Renk Kartı */}
              {product.color && (
                <div
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    width: "280px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    fontSize: "0.9rem",
                    color: "#333",
                    marginBottom: "16px",
                  }}
                >
                  <h5
                    style={{
                      margin: 0,
                      marginBottom: "0.5rem",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      textTransform: "uppercase",
                      color: "grey",
                    }}
                  >
                    Renk
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* Siyah dolu yuvarlak */}
                    {product.color_circle_black && (
                      <span
                        style={{
                          display: "inline-block",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "black",
                        }}
                        title="Siyah renk işareti"
                      />
                    )}
                    <strong>{product.color}</strong>
                  </div>
                </div>
              )}

              <button
                className="custom-btn btn-basket px-4 py-2 w-100"
                style={{ maxWidth: "100%", borderRadius: "25px" }}
                onClick={() => addToCart(product)}
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


/* VERİLERE brand: verilecek Detay sayfasında en üst kısımda olacak 
   hemen altında ürünün adı yanına da favori kısmı 
   henüz yorum yok yazılacak
   */ 