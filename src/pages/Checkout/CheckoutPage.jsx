import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalButton from '../../components/globalbutton/GlobalButton';
import './CheckoutPage.style.css';

const CheckoutPage = () => {
  const location = useLocation();
  const { 
    cartItems = [],
    appliedDiscount = 0,
    subTotal = 0,
    discountAmount = 0,
    totalPrice = 0
  } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // slanje na  podataka na server
    alert('Narudžba je uspješno poslana!');
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Items:</span>
            <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          {appliedDiscount > 0 && (
            <div className="summary-item discount">
              <span>Discount ({appliedDiscount}%):</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="summary-item total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <p className="disclaimer">
            Narudžba će biti isporučena u roku od 24h...
          </p>
        </div>

        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <GlobalButton 
              type="submit"
              displayText="Place Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;