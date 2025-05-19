import React, { useRef } from "react";
import { brandsData } from "../data/brands";
import "../styles/brandSlider.css";
import "../styles/section.css";

const BrandSlider = () => {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container-main">
      <div className="px-3">
        <h2 className="section-title">Popüler Markalar</h2>
        <div className="brand-slider-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>
            &#8249;
          </button>
          <div className="brand-slider" ref={sliderRef}>
            {brandsData.map((brand) => (
              <div key={brand.id} className="brand-slide">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="brand-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button className="scroll-button right" onClick={scrollRight}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
