import React from "react";
import { useCart } from "../content/CartContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BasketPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    alert("Siparişiniz onaylandı! Teşekkürler.");
  };

  return (
    <>
      <Header />
      <div className="container-main mt-5 mb-5">
        <h2>🛒 Sepetiniz</h2>

        {cartItems.length === 0 ? (
          <p>Sepetiniz boş.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <div>
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="mb-1 text-muted">{item.name}</p>
                      <small className="text-primary fw-semibold">
                        {Number(item.price).toLocaleString("tr-TR")} TL
                      </small>
                    </div>
                  </div>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Kaldır
                  </button>
                </li>
              ))}
            </ul>

            <div className="d-flex justify-content-between">
              <button className="btn btn-danger" onClick={clearCart}>
                Tümünü Kaldır
              </button>

              <button className="btn btn-success" onClick={handleCheckout}>
                Sepeti Onayla
              </button>
            </div>
          </>
        )}
      </div>

      {/* Footer container dışı, tam genişlikte */}
      <Footer />
    </>
  );
};

export default BasketPage;
