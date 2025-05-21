import { useCart } from "../content/CartContext.jsx";

const BasketPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="container mt-4">
      <h3>Sepetim</h3>
      {cartItems.length === 0 ? (
        <p>Sepet boş</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.title} - {item.price} TL
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasketPage;
