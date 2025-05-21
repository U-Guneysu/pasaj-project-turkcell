import React, { useEffect } from "react";
import "../styles/main.css";

export default function MainPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header className="bg-white">
        {/*Header Kısımı Bitti */}
      </header>
      {/* Ana İçerik Kısmı */}
      <main>
        <div
          className="container-fluid d-flex flex-column justify-content-center align-items-center"
          style={{ width: "100%", padding: "0" }}
        >
          <div className="row w-100">
            <div className="banner col-12">
              <p className="text-center mt-3">
                Anneler Gününe Özel Tüm Siparişlerde Turkcell Express ile
                Ücretsiz ve Hızlı Kargo Fırsatı!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
