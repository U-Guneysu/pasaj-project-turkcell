import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/swiper.css";
import "../styles/section.css";
import "../styles/main.css";
import { categorySliderData } from "../data/categorySliderData";

const CategorySwiper = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(
    categorySliderData[0]
  );
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Dinamik parametre ile ürün detay sayfasına git
  const goToProductDetail = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div className="container-main category-swiper-wrapper">
      <div className="px-3">
        <h2 className="section-title">Çok Satanlar</h2>

        {/* Kategori Butonları */}
        <div
          className="category-button-wrapper"
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {categorySliderData.map((cat) => (
            <button
              key={cat.id}
              className={`category-button ${
                selectedCategory.id === cat.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              <img src={cat.image} alt={cat.name} className="category-image" />
              <span className="category-name">{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="category-divider"></div>

        {/* Ürün Grid'i */}
        <div className="product-grid">
          {selectedCategory.products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="product-card position-relative"
              style={{ cursor: "pointer" }}
              onClick={() => goToProductDetail(product.name)}
            >
              {product.label && (
                <span
                  className={`paged-product-label badge position-absolute ${product.labelType}`}
                  style={{ top: -1, left: -1 }}
                >
                  {product.label}
                </span>
              )}

              <div
                className="favorite-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(product.name);
                }}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  cursor: "pointer",
                }}
              >
                <svg
                  className={`heart-icon ${
                    favorites.includes(product.name) ? "active" : ""
                  }`}
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill={favorites.includes(product.name) ? "red" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6c-1.5-1.3-3.7-1.3-5.2 0l-.6.6-.6-.6c-1.5-1.3-3.7-1.3-5.2 0s-1.5 3.6 0 5l5.8 5.8 5.8-5.8c1.6-1.4 1.6-3.7.2-5z" />
                </svg>
              </div>

              <img
                className="product-info"
                src={product.image}
                alt={product.name}
              />

              <h5>{product.name}</h5>
              <div className="product-tags d-flex flex-wrap gap-1 mb-2">
                {product.cok_satan && (
                  <span className="product-tag">Çok Satan</span>
                )}
                {product.ayin_yildizi && (
                  <span className="product-tag">Ayın Yıldızı</span>
                )}
                {product.nakit_iade && (
                  <span className="product-tag">150 Nakit İade!</span>
                )}
                {product.tukeniyor && (
                  <span className="product-tag">Tükeniyor</span>
                )}
              </div>
              <p>{product.price.toLocaleString("tr-TR")} TL</p>

              {typeof product.puan === "number" && (
                <div className="paged-rating">
                  <div
                    className="paged-stars"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "2px",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <svg
                        key={num}
                        className={`paged-star ${
                          num <= product.puan ? "filled" : ""
                        }`}
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill={num <= product.puan ? "#ffcc00" : "none"}
                        stroke="#ffcc00"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.75l-6 5.797L19.335 24 12 19.897 4.665 24 6 15.547 0 9.75l8.332-1.595z" />
                      </svg>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySwiper;
