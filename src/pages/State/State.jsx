import ProductList from "./components/ProductList";
import "./state.style.css";

const State = ({ products, onAddToCart }) => {
  return (
    <div className="state-wrapper">
      <div className="state-content">
        <h1>SQUITWORK</h1>
        <ProductList products={products} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default State;