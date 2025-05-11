import React, { useEffect } from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import useScrollingTitle from "./hooks/useScrollingTitle";
import MainPage from "./pages/MainPage";
import Slider from "./components/slider";

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
    </>
  );
}

export default App;
