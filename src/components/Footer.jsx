import React, { useState, useRef } from "react";
import footerData from "../data/footerData";
import { footerSlider } from "../data/footerSliderData";
import "../styles/footerSlider.css";
import "../styles/footer.css";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/insta.png";
import linkedInIcon from "../assets/images/linkedin.png";
import xTwitterIcon from "../assets/images/x.png";
import youtubeIcon from "../assets/images/yt.png";

const {
  popularCategories,
  popularBrandCategories,
  brands,
  specialDaysAndCampaigns,
} = footerData;

const FooterSection = ({ title, items, defaultVisible = 9 }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, defaultVisible);

  return (
    <div className="footer-column mb-4">
      <h5 className="footer-title">{title}</h5>
      <ul className="footer-list">
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {items.length > defaultVisible && (
        <button
          className="footer-toggle-btn"
          onClick={() => setShowAll((prev) => !prev)}
          aria-expanded={showAll}
          aria-controls={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-chevron"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "6px",
              verticalAlign: "middle",
              transition: "transform 0.3s",
              transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          {showAll ? "Daha Az Göster" : "Tümünü Göster"}
        </button>
      )}
    </div>
  );
};

const Footer = () => {
  const [selectedLang, setSelectedLang] = useState("tr");
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const languages = [
    { code: "tr", label: "Türkçe" },
    { code: "en", label: "English" },
    { code: "ar", label: "عربى" },
    { code: "ru", label: "русский" },
  ];

  return (
    <footer className="footer-section text-light">
      <div className="container-main">
        <div className="footer-row">
          <FooterSection
            title="Hakkımızda"
            items={[
              "Pasaj Genel Bakış",
              "Haberler & Duyurular",
              "Kurumsal İletişim ve Sürdürülebilirlik",
              "Kariyer",
              "Gizlilik ve Güvenlik",
              "Pasaj İletişim",
              "Pasaj'da Satıcı Ol",
              "Pasaj Blog",
              "Pasaj Gaming",
            ]}
          />

          <FooterSection
            title="Popüler Kategoriler"
            items={popularCategories}
            defaultVisible={10}
          />

          <FooterSection
            title="Yardım"
            items={[
              "Yardım Merkezi",
              "İşlem Rehberi",
              "Pasaj Sipariş Sorgulama",
              "Nasıl İade Edebilirim?",
              "iPhone Karşılaştırma",
              "Televizyon (TV) Karşılaştırma",
              "Telefon Sat",
            ]}
          />

          <FooterSection
            title="Popüler Marka Kategorileri"
            items={popularBrandCategories}
            defaultVisible={10}
          />

          <FooterSection title="Markalar" items={brands} defaultVisible={10} />

          <FooterSection
            title="Özel Günler & Kampanyalar"
            items={specialDaysAndCampaigns}
            defaultVisible={10}
          />

          <FooterSection
            title="Popüler Ürünler"
            items={[
              "iPhone 16",
              "iPhone 16 Pro Max",
              "iPhone 16E",
              "iPhone 15",
              "iPhone 15 Plus",
              "iPhone 15 Pro",
              "iPhone 15 Pro Max",
              "iPhone 14",
              "iPhone 14 Plus",
              "iPhone 14 Pro",
              "iPhone 14 Pro Max",
              "iPhone 13",
              "iPhone 12",
              "iPhone 11",
              "iPhone SE",
              "Dyson Airwrap",
              "Dyson V15",
              "Dyson V15 Detect Submarine",
              "Dyson Airstrait",
              "Dyson V12",
              "Dyson V8",
              "Samsung Galaxy S25",
              "Samsung Galaxy S25 Ultra",
              "PS5 / Playstation 5",
              "PS4 / Playstation 4",
              "Nintendo Switch",
              "Xbox Series S",
              "Xbox Series X",
            ]}
            defaultVisible={10}
          />
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <div className="footer-languages">
            {languages.map(({ code, label }) => (
              <a
                key={code}
                href="#"
                className={selectedLang === code ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLang(code);
                }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="footer-social">
            <span>Bizi Takip Edin</span>
            <a href="#" aria-label="X Twitter">
              <img src={xTwitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a href="#" aria-label="Youtube">
              <img src={youtubeIcon} alt="Youtube" className="social-icon" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="dark-container-footer">
        <div className="brand-slider-container">
          <div className="brand-slider-wrapper">
            <button
              className="scroll-button left"
              onClick={scrollLeft}
              aria-label="Sol Kaydır"
            >
              &#8249;
            </button>

            <div className="brand-slider" ref={sliderRef}>
              {footerSlider.map((brand) => (
                <div className="brand-slide" key={brand.id}>
                  <img src={brand.image} alt={brand.name} />
                </div>
              ))}
            </div>

            <button
              className="scroll-button right"
              onClick={scrollRight}
              aria-label="Sağ Kaydır"
            >
              &#8250;
            </button>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="container-main">
          <div className="footer-bottom-info">
            <div className="footer-privacy-text">Gizlilik ve Güvenlik</div>

            <div className="footer-right-content">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/assetsv2/common/images/icons/guven-damgasi-icon.png?1747527721000"
                alt="Güven Damgası"
                className="footer-icon"
              />
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Genel/ana-sayfa/etbis-qr-code.png?1747527721000"
                alt="ETBİS QR Code"
                className="footer-icon"
              />
              <span className="footer-copyright">&copy; 2025 Turkcell</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
