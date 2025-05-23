import { useCart } from "../content/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image || "https://via.placeholder.com/300x200"}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">{product.price} TL</span>
          <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
