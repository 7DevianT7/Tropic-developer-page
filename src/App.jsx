import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home/Home';
import State from './pages/State/State';
import Learning from './pages/Learning/Learning';
import NotFound from './pages/NotFound/NotFound';
import Users from './pages/Users/Users';
import CartPage from './pages/Cart/Cart';
import CheckoutPage from './pages/Checkout/CheckoutPage'; // <--- NOVO

// definisani promo kodovi
const discountCodes = [
  { code: "SAVE10", percent: 10 },
  { code: "HELLO20", percent: 20 },
  { code: "REACT30", percent: 30 }
];

// proizvodi
const products = [
  {
    id: 1,
    image: '👕',  
    name: "Item 1",
    price: 220.00, 
    description: "Brand new shirt",
  },
  {
    id: 2,
    image: '🖥️',
    name: "Laptop",
    price: 999.00,
    description: "Powerful gaming laptop",
  },
  {
    id: 3,
    image: '🖥️',
    name: "Laptop",
    price: 666.00,
    description: "Powerful gaming laptop",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState("");

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      return existingItem
        ? prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const applyDiscount = (code) => {
    const foundCode = discountCodes.find(dc => dc.code === code);
    if (foundCode) {
      setDiscount(foundCode.percent);
      setDiscountMessage(`Uspešno primenjen kod: ${code} (-${foundCode.percent}%)`);
    } else {
      setDiscount(0);
      setDiscountMessage("Nevažeći promo kod");
    }
  };

  return (
    <Router>
      <Navigation cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/state" 
          element={<State products={products} onAddToCart={addToCart} />} 
        />
        <Route
          path="/cart"
          element={
            <CartPage
              items={cartItems}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
              onApplyDiscount={applyDiscount}
              discount={discount}
              discountMessage={discountMessage}
            />
          }
        />
        <Route path="/checkout" element={<CheckoutPage />} /> {/* NOVA RUTA */}
        <Route path="/users" element={<Users />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
