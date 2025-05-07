import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header>
      {/* Container içine alınmış Header, genişlik arttırıldı */}
      <div className="container-header">
        {/* Top (Üst Kısım) */}
        <div className="bg-white text-white py-2">
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
              <a href="/favorilerim" className="ms-4 text-decoration-none">
                Favorilerim
              </a>
              <a href="/kampanyalar" className="ms-4 text-decoration-none">
                Kampanyalar
              </a>
              <a href="/yardim" className="ms-4 text-decoration-none">
                Yardım
              </a>
              <a href="/neden-pasaj" className="ms-4 text-decoration-none">
                Neden Pasaj?
              </a>
              <a
                href="/siparis-sorgulama"
                className="ms-4 text-decoration-none"
              >
                Sipariş Sorgulama
              </a>
              <a href="/markalar" className="ms-4 text-decoration-none">
                Markalar
              </a>
            </nav>
          </div>
        </div>

        {/* Mid (Orta Kısım) */}
        <div className="bg-light py-6">
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
        <div className="bg-dark text-white py-4">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
            <a
              href="/cep-telefonu-aksesuar"
              className="text-white text-decoration-none"
            >
              Cep Telefonu-Aksesuar
            </a>
            <a
              href="/bilgisayar-tablet"
              className="text-white text-decoration-none"
            >
              Bilgisayar-Tablet
            </a>
            <a
              href="/elektrikli-ev-aletleri"
              className="text-white text-decoration-none"
            >
              Elektrikli Ev Aletleri
            </a>
            <a
              href="/saglik-kisisel-bakim"
              className="text-white text-decoration-none"
            >
              Sağlık-Kişisel Bakım
            </a>
            <a href="/hobi-oyun" className="text-white text-decoration-none">
              Hobi-Oyun
            </a>
            <a
              href="/tv-ses-sistemleri"
              className="text-white text-decoration-none"
            >
              TV-Ses Sistemleri
            </a>
            <a
              href="/tv-ses-sistemleri"
              className="text-white text-decoration-none"
            >
              TV-Ses Sistemleri
            </a>
            <a href="/ev-yasam" className="text-white text-decoration-none">
              Ev-Yaşam
            </a>
          </div>
        </div>
      </div>{" "}
      {/* End of Container */}
    </header>
  );
}
