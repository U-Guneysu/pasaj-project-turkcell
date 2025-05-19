import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/pasaj.css";

const WhyPasaj = () => {
  const features = [
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-8 h-8 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      ),
      title: "Güvenli Alışveriş",
      text: "Pasaj, güvenli ödeme altyapısı ile hem alıcıları hem satıcıları korur.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-8 h-8 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </svg>
      ),
      title: "Hızlı Teslimat",
      text: "Aynı gün kargoya teslim avantajıyla ürünlerin hızlıca sana ulaşır.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-8 h-8 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12a9 9 0 0115.95-5.682m2.215 3.289a8.99 8.99 0 01-.66 8.378M9 12l-3 3m0 0l3 3m-3-3h12"
          />
        </svg>
      ),
      title: "Kolay İade",
      text: "Beğenmediğin ürünleri kolayca iade edebilir, paranı geri alabilirsin.",
    },
  ];

  return (
    <section className="pasaj-section py-5 mt-5">
      <div className="container text-center">
        <h3>Neden Pasaj?</h3>
        <p className="lead mb-5">
          Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
          saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
          Turkcell Pasaj ayrıcalığıyla keşfedin.
        </p>

        <div className="row justify-content-center">
          {features.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="why-pasaj-card p-4 h-100">
                <div
                  className="icon-pictogram mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{ width: "70px", height: "70px", padding: "10px"  }}
                >
                  {item.image}
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPasaj;
/* İSİM DEĞİŞİKLİĞİ YAPILACAK */
