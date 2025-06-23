import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalButton from "../../components/globalbutton/GlobalButton";
import MustBuyGif from "../../assets/mustbuy.gif";
import "./Cart.style.css";

const CartPage = ({ 
  items = [], 
  onRemove = () => {}, 
  onUpdateQuantity = () => {},
  onApplyDiscount = () => {},
  discount = 0,
  discountMessage = ""
}) => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal - discountAmount;

  const handleApplyDiscount = () => {
    onApplyDiscount(promoCode);
    setPromoCode("");
  };

  const handleCheckout = () => {
    navigate('/checkout', { 
      state: { 
        cartItems: items,
        appliedDiscount: discount,
        subTotal: subtotal,
        discountAmount: discountAmount,
        totalPrice: total
      }
    });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      {items.length > 0 ? (
        <>
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
          </div>

          <div className="discount-section">
            <div className="promo-code-input">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === 'Enter' && handleApplyDiscount()}
              />
              <GlobalButton 
                displayText="Apply" 
                onClick={handleApplyDiscount} 
              />
            </div>
            {discountMessage && (
              <p className={`discount-message ${discount > 0 ? 'success' : 'error'}`}>
                {discountMessage}
              </p>
            )}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="summary-row discount">
                <span>Discount ({discount}%):</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="checkout-button">
            <GlobalButton
              displayText="Checkout"
              onClick={handleCheckout}
              disabled={items.length === 0}
            />
          </div>
        </>
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
