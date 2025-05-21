import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/paged.css";
import "../styles/main.css";
import "../styles/section.css";
import { useState } from "react";
import { Link } from "react-router-dom";


// Dizi parçalama fonksiyonu (her grup 4 ürün içerecek)
const chunkSize = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const PagedSlider = ({ title, products = [], categoryFilter = null }) => {
  // Eğer categoryFilter varsa sadece o kategoriye ait ürünleri al
  const filteredProducts = categoryFilter
    ? products.filter((p) => p.category === categoryFilter)
    : products;

  const productGroups = chunkSize(filteredProducts, 4);
  const sliderId = `slider-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const showControls = productGroups.length > 1;
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="container-main py-3">
      <div className="paged-inner px-3">
        <h2 className="section-title">{title}</h2>

        <div
          id={sliderId}
          className="carousel slide paged-carousel"
          data-bs-touch="true"
          data-bs-interval="false"
        >
          <div className="paged-carousel-inner carousel-inner">
            {productGroups.map((group, index) => (
              <div
                className={`paged-carousel-item carousel-item ${
                  index === 0 ? "active" : ""
                }`}
                key={index}
              >
                <div className="row w-100">
                  {group.map((product) => (
                    <div className="col-md-3" key={product.name}>
                      <Link
                        to={`/product/${encodeURIComponent(product.name)}`}
                        className="text-decoration-none text-dark"
                      >
                        <div className="paged-card card h-100 position-relative">
                          {product.label && (
                            <span
                              className={`paged-product-label badge position-absolute ${product.labelType}`}
                            >
                              {product.label}
                            </span>
                          )}
                          <div
                            className="favorite-icon"
                            onClick={() => toggleFavorite(product.id)}
                          >
                            <svg
                              className={`heart-icon ${
                                favorites.includes(product.id) ? "active" : ""
                              }`}
                              viewBox="0 0 24 24"
                              fill={
                                favorites.includes(product.id) ? "red" : "none"
                              }
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20.8 4.6c-1.5-1.3-3.7-1.3-5.2 0l-.6.6-.6-.6c-1.5-1.3-3.7-1.3-5.2 0s-1.5 3.6 0 5l5.8 5.8 5.8-5.8c1.6-1.4 1.6-3.7.2-5z" />
                            </svg>
                          </div>
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.name}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>

                            {/* Yeni: Ürünün kategorisini göster */}
                            {product.category && (
                              <small className="text-muted d-block mb-2">
                                Kategori: {product.category}
                              </small>
                            )}

                            {typeof product.puan === "number" && (
                              <div className="paged-rating">
                                <div className="paged-stars">
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
                            <div className="product-tags d-flex flex-wrap gap-2 mb-2">
                              {product.taksit_fatura && (
                                <span className="product-tag">
                                  Taksitli Fatura
                                </span>
                              )}
                              {product.ode_fatura && (
                                <span className="product-tag cleared-tag">
                                  Faturanla Öde
                                </span>
                              )}
                              {product.aninda_teslimat && (
                                <span className="product-tag">
                                  Anında Teslimat
                                </span>
                              )}
                              {product.pesin_taksit && (
                                <span className="product-tag cleared-tag">
                                  Peşine 3 Taksit
                                </span>
                              )}
                            </div>
                            <div className="card-divider"></div>
                            <div className="price-wrapper">
                              <span className="price-amount">
                                {product.price}
                              </span>
                              <span className="price-currency">TL</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {showControls && (
            <>
              <button
                className="paged-carousel-control-prev"
                type="button"
                data-bs-target={`#${sliderId}`}
                data-bs-slide="prev"
              >
                <span
                  className="paged-carousel-control-prev-icon paged-custom-previous-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="paged-carousel-control-next"
                type="button"
                data-bs-target={`#${sliderId}`}
                data-bs-slide="next"
              >
                <span
                  className="paged-carousel-control-next-icon paged-custom-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Sonraki</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PagedSlider;
