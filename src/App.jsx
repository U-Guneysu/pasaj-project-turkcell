import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import useScrollingTitle from "./hooks/useScrollingTitle";

// Sayfalar ve bileşenler
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail"; // Detay sayfasını sen ekleyeceksin
import BasketPage from "./pages/BasketPage";
import Slider from "./components/slider";
import Category from "./components/categories";
import PagedSlider from "./components/PagedSlider";
import { bestOffers, pasajNew, specialForYou } from "./data/sliderData";
import Campaings from "./components/Campaings";
import { campaingData } from "./data/categoryData";
import CategorySwiper from "./components/CategorySwiper";
import BrandSlider from "./components/BrandSlider";
import Pasaj from "./components/Pasaj";
import Footer from "./components/Footer";


function App() {
  const location = useLocation();
  const isProjectPage =
    location.pathname === "/";

  useScrollingTitle(
    "Pasaj'da Anneler Günü Fırsatları! 🌸",
    200,
    !isProjectPage
  );

  useEffect(() => {
    if (isProjectPage) {
      document.title = "Turkcell Pasaj - Turkcell'in Online Alışveriş Sitesi";
    }
  }, [isProjectPage]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <MainPage />
            <Slider />
            <Category />
            <PagedSlider title="Size Özel Ürünler" products={specialForYou} />
            <PagedSlider title="En İyi Teklifler" products={bestOffers} />
            <Campaings campaings={campaingData} />
            <CategorySwiper />
            <BrandSlider />
            <PagedSlider title="Pasaj'ın Yenileri" products={pasajNew} />
            <Pasaj />
            <Footer />
          </>
        }
      />
      <Route path="/product/:productName" element={<ProductDetail />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}

export default App;
