import GlobalButton from "../../components/globalbutton/GlobalButton";
import MustBuyGif from "../../assets/mustbuy.gif";
import "./Cart.style.css";

const CartPage = ({ items = [], onRemove = () => {}, onUpdateQuantity = () => {} }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      {items.length > 0 ? (
        <div className="cart-items">
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-image">{item.image}</div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                
                <div className="quantity-controls">
                  <GlobalButton
                    displayText="−"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                  />
                  <span>{item.quantity}</span>
                  <GlobalButton
                    displayText="+"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                  />
                </div>
                
                <GlobalButton
                  displayText="Remove"
                  onClick={() => onRemove(item.id)}
                />
              </div>
              
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <img src={MustBuyGif} alt="Empty cart" />
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;