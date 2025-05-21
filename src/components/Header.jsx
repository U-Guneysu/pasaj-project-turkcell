import logo from "../assets/images/logo.png";
import "../styles/main.css";

function Header() {
  return (
    <div className="container-main">
      {/* Top Bar */}
      <div className="header-top py-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              className="turkcell-icon"
              onClick={() =>
                (window.location.href = "https://www.turkcell.com.tr/")
              }
            />
            <a
              href="https://www.turkcell.com.tr/"
              className="turkcell-text text-decoration-none"
            >
              turkcell.com.tr
            </a>
          </div>

          {/* Navbar */}
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

      {/* Middle Bar */}
      <div className="header-mid py-2">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/passage-assets/common/images/content/pasaj-logo-new.png?1745908855000"
              alt="Ana Sayfa"
              style={{ maxWidth: "140px" }}
            />
          </a>

          {/* Search Bar */}
          <div className="flex-grow-1 mx-3 position-relative">
            <input
              type="text"
              placeholder="Ürün, marka veya kategori ara"
              className="search-bar pe-5"
              aria-label="Ürün, marka veya kategori ara"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="search-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          {/* Buttons */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            <button className="custom-btn btn-login" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 me-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width={24}
                height={24}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Giriş Yap
            </button>

            <button className="custom-btn btn-basket" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 me-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width={24}
                height={24}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Sepet
            </button>
          </div>
        </div>
      </div>

      {/* Bottom (Alt Kısım) */}
      <div className="header-bottom py-1" style={{ color: "#253342" }}>
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
  );
}

export default Header;
