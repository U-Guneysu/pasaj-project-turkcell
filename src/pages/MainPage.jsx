import React from "react";
import "./main.css";

export default function MainPage() {
  return (
    <>
      <header>
        {/* Container içine alınmış Header, genişlik arttırıldı */}
        <div className="container-header">
          {/* Top (Üst Kısım) */}
          <div className="header-top bg-white text-white py-2">
            <div className="d-flex justify-content-between align-items-center">
              {/* Logo */}
              <div className="d-flex align-items-center">
                {/* Turkcell İkonu */}
                <span className="turkcell-icon">
                  <img
                    src="src\assets\images\logo.png" // URL üzerinden resim ekle
                    alt="Logo"
                    className="turkcell-icon" // CSS class ile stil ver
                    onClick={() =>
                      (window.location.href = "https://www.turkcell.com.tr/")
                    }
                  />
                </span>
                {/* Turkcell.com Yazısı*/}
                <a
                  href="https://www.turkcell.com.tr/"
                  className="turkcell-text text-decoration-none"
                >
                  turkcell.com.tr
                </a>
              </div>

              {/* Navbar Bağlantıları */}
              <nav className="d-none d-md-flex">
                <a href="#" className="ms-4 text-decoration-none">
                  Favorilerim
                </a>
                <a href="#" className="ms-4 text-decoration-none">
                  Kampanyalar
                </a>
                <a href="#" className="ms-4 text-decoration-none">
                  Yardım
                </a>
                <a href="#" className="ms-4 text-decoration-none">
                  Neden Pasaj?
                </a>
                <a href="#" className="ms-4 text-decoration-none">
                  Sipariş Sorgulama
                </a>
                <a href="/markalar" className="ms-4 text-decoration-none">
                  Markalar
                </a>
              </nav>
            </div>
          </div>

          {/* Mid (Orta Kısım) */}
          <div className="header-mid bg-white py-2">
            <div className="d-flex justify-content-between align-items-center">
              {/* Ana Sayfa Resmi */}
              <div>
                <a href="/">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/passage-assets/common/images/content/pasaj-logo-new.png?1745908855000"
                    alt="Ana Sayfa"
                    className="w-25" // Bootstrap genişlik sınıfı
                    style={{ flexShrink: 0 }} // Maksimum genişlik ayarı
                  />
                </a>
              </div>

              {/* Arama Çubuğu ve Butonlar */}
              <div className="d-flex align-items-start">
                {/* Arama Çubuğu */}
                <input
                  type="text"
                  placeholder="Ürün, marka veya kategori ara"
                  className="form-control search-bar flex-grow-1"
                  style={{ maxWidth: "600px", width: "100%" }}
                />
                <button className="btn custom-btn btn-login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 me-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  Giriş Yap
                </button>
                <button className="btn custom-btn btn-basket">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 me-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Sepet
                </button>
              </div>
            </div>
          </div>

          {/* Bottom (Alt Kısım) */}
          <div
            className="header-bottom bg-white py-1"
            style={{ color: "#253342" }}
          >
            <div className="d-flex flex-wrap gap-5 px-3 justify-content-center mb-2">
              <a
                href="/cep-telefonu-aksesuar"
                className="text-decoration-none"
                style={{ fontSize: "15px" }}
              >
                Cep Telefonu-Aksesuar
              </a>
              <a
                href="/bilgisayar-tablet"
                className="text-decoration-none"
                style={{ fontSize: "15px" }}
              >
                Bilgisayar-Tablet
              </a>
              <a
                href="/elektrikli-ev-aletleri"
                className="text-decoration-none"
                style={{ fontSize: "15px" }}
              >
                Elektrikli Ev Aletleri
              </a>
              <a
                href="/saglik-kisisel-bakim"
                className="text-decoration-none"
                style={{ fontSize: "15px" }}
              >
                Sağlık-Kişisel Bakım
              </a>
              <a
                href="/hobi-oyun"
                className="text-decoration-none"
                style={{ fontSize: "15px" }}
              >
                Hobi-Oyun
              </a>
              <a
                href="/tv-ses-sistemleri"
                className="text-decoration-none"
                style={{ fontSize: "15px" }}
              >
                TV-Ses Sistemleri
              </a>
              <a
                href="/ev-yasam"
                className="text-decoration-none"
                style={{ fontSize: "15px" }}
              >
                Ev-Yaşam
              </a>
            </div>
          </div>
        </div>
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
