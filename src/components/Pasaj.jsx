import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/pasaj.css";

const WhyPasaj = () => {
  const features = [
    {
      image: "/images/guvenli-alisveris.svg",
      title: "Güvenli Alışveriş",
      text: "Pasaj, güvenli ödeme altyapısı ile hem alıcıları hem satıcıları korur.",
    },
    {
      image: "/images/hizli-teslimat.svg",
      title: "Hızlı Teslimat",
      text: "Aynı gün kargoya teslim avantajıyla ürünlerin hızlıca sana ulaşır.",
    },
    {
      image: "/images/kolay-iade.svg",
      title: "Kolay İade",
      text: "Beğenmediğin ürünleri kolayca iade edebilir, paranı geri alabilirsin.",
    },
  ];

  return (
    <section className="pasaj-section py-5 mt-5">
      <div className="container text-center">
        <h3>Neden Pasaj?</h3>
        {/* Paragraf kısmı */}
        <p className="lead mb-5">
          Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
          saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
          Turkcell Pasaj ayrıcalığıyla keşfedin.
        </p>

        {/* Kartlar */}
        <div className="row justify-content-center">
          {features.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="why-pasaj-card p-4 h-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-3 why-pasaj-img"
                />
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
