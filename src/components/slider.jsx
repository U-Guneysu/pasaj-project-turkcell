import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./slider.css";

const Slider = () => {
  return (
    <div
      id="customSlider"
      className="carousel slide mt-6"
      data-bs-ride="carousel"
      data-bs-touch="true"
    >
      <div className="carousel-indicators custom-slider-btn">
        <button
          type="button"
          data-bs-target="#customSlider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#customSlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#customSlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#customSlider"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#customSlider"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>

      <div className="carousel-inner custom-slider-img">
        <div className="carousel-item active">
          <img
            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/r1-a26nb-pasaj-hero.jpg?1746873785000"
            className="d-block w-100"
            alt="Samsung Side 1"
          />
        </div>
        <div className="carousel-item custom-slider-img">
          <img
            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/MarkaGunleri-anneler-gunu-B-hero-banner-web.jpg?1746010495000"
            className="d-block w-100"
            alt="Anneler Gunu Side 2"
          />
        </div>
        <div className="carousel-item custom-slider-img">
          <img
            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/anneler-Gunu-Platinum-hero-banner-web.jpg?1746009674000"
            className="d-block w-100"
            alt="Apple Watch Side 3"
          />
        </div>
        <div className="carousel-item custom-slider-img">
          <img
            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/16promass-pasaj-hero.jpg?1746599491000"
            className="d-block w-100"
            alt="Pesin Fiyat Side 4"
          />
        </div>
        <div className="carousel-item custom-slider-img">
          <img
            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Pasaj_Fomo-hero-banner-web.jpg"
            className="d-block w-100"
            alt="Side 5"
          />
        </div>
      </div>

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
  );
};

export default Slider;
