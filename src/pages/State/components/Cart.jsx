import GlobalButton from "../../../components/globalbutton/GlobalButton";
import MustBuyGif from "../../../assets/mustbuy.gif";

const Cart = ({ items = [], onRemove = () => {}, onUpdateQuantity = () => {} }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="state-cart-items">
      <h3 className="items-header">Your Cart</h3>
      {items.length > 0 ? (
        <div className="cards">
          {items.map(item => (
            <div className="card" key={item.id}>
              {item.image}
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <div className="quantity-controls">
                <GlobalButton
                  displayText="−"
                  onClick={() => onUpdateQuantity(item.id, -1)}
                />
                <span className="quantity">{item.quantity}</span>
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
          ))}
          <div className="total-price">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      ) : (
        <div className='cart-empty'>
          <img 
            src={MustBuyGif} 
            alt="No items in cart" 
            style={{ width: '220px', borderRadius: '12px', marginBottom: '20px' }}
          />
          <h3>Your cart is empty</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
