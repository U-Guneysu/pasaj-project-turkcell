import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/paged.css";
import "../styles/main.css";
import "../styles/section.css";
import { useState } from "react";

// Dizi parçalama fonksiyonu (her grup 4 ürün içerecek)
const chunkSize = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const PagedSlider = ({ title, products = [] }) => {
  const productGroups = chunkSize(products, 4);
  const sliderId = `slider-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const showControls = productGroups.length > 1;
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="container-main py-4">
      <div className="paged-inner px-4">
        {/* Slider Başlığı */}
        <h2 className="section-title">{title}</h2>

        {/* Carousel */}
        <div
          id={sliderId}
          className="carousel slide paged-carousel"
          data-bs-touch="true"
          data-bs-interval="false"
        >
          {/* Carousel İçerik */}
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
                    <div className="col-md-3" key={product.id}>
                      <div className="paged-card card h-100 position-relative">
                        {product.label && (
                          <span
                            className={`paged-product-label badge position-absolute ${product.labelType}`}
                          >
                            {product.label}
                          </span>
                        )}
                        <div className="favorite-icon" onClick={() => toggleFavorite(product.id)}>
                          <svg
                            className={`heart-icon ${favorites.includes(product.id) ? "active" : ""}`}
                            viewBox="0 0 24 24"
                            fill={favorites.includes(product.id) ? "red" : "none"}
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
                          <div className="product-tags d-flex flex-wrap gap-1 mb-2">
                            {product.taksit_fatura && (
                              <span className="product-tag">
                                Taksitli Fatura
                              </span>
                            )}
                            {product.ode_fatura && (
                              <span className="product-tag">Faturanla Öde</span>
                            )}
                            {product.aninda_teslimat && (
                              <span className="product-tag">
                                Anında Teslimat
                              </span>
                            )}
                            {product.pesin_taksit && (
                              <span className="product-tag">
                                Peşine 3 Taksit
                              </span>
                            )}
                          </div>
                          <p className="card-text">{product.price} TL</p>

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
                                  >
                                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.797L19.335 24 12 19.897 4.665 24 6 15.547 0 9.75l8.332-1.595z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
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
