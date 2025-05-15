import React, { useEffect } from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import useScrollingTitle from "./hooks/useScrollingTitle";
import MainPage from "./pages/MainPage";
import Slider from "./components/slider";
import Category from "./components/categories";
import PagedSlider from "./components/PagedSlider";
import { specialForYou } from "./data/sliderData";

function App() {
  const location = useLocation();
  const isProjectPage =
    location.pathname === "/pasaj-project-turkcell/";

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
      <PagedSlider title="Deneme Başlığı 2" products={specialForYou} />
      <PagedSlider title="Deneme Başlığı 3" products={specialForYou} />
    </>
  );
}

export default App;
