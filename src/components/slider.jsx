import { sliderData } from "../data/sliderData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/slider.css";
import "../styles/main.css";

const Slider = () => {
  return (
    <div className="container-main">
      <div
        id="customSlider"
        className="carousel slide mt-6 position-relative"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        {/* Slide Items */}
        <div className="carousel-inner">
          {sliderData.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={slide.id}
            >
              <img
                src={slide.image}
                className="d-block w-100"
                alt={slide.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: "red" }}>{slide.title}</h5>
                <p style={{ color: "red" }}>{slide.description}</p>
                <button className="btn btn-primary">İncele</button>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="carousel-indicators custom-slider-btn">
          {sliderData.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#customSlider"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#customSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon custom-previous-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#customSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon custom-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
