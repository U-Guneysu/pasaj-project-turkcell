import React, { useEffect } from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import useScrollingTitle from "./hooks/useScrollingTitle";
import MainPage from "./pages/MainPage";
import Slider from "./components/slider";
import Category from "./components/categories";
import PagedSlider from "./components/PagedSlider";
import { bestOffers, specialForYou } from "./data/sliderData";
import Campaings from "./components/Campaings";
import { campaingData } from "./data/categoryData";

function App() {
  const location = useLocation();
  const isProjectPage =
    location.pathname === "http://localhost:5173/pasaj-project-turkcell/";

  useScrollingTitle("Pasaj'da Anneler Günü Fırsatları! 🌸", 200, !isProjectPage);

  useEffect(() => {
    if (isProjectPage) {
      document.title = "Turkcell Pasaj - Turkcell'in Online Alışveriş Sitesi";
    }
  }, [isProjectPage]);

  return (
    <>
      <MainPage />
      <Slider />
      <Category />
      <PagedSlider title="Size Özel Ürünler" products={specialForYou} />
      <PagedSlider title="En İyi Teklifler" products={bestOffers} />
      <Campaings campaings={campaingData} />
    </>
  );
}

export default App;
