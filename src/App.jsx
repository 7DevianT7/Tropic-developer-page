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

// Proizvodi
const products = [
  {
    id: 1,
    image: '👕', // Možeš zameniti sa tvojom komponentom
    name: "Item 1",
    price: 220,
    description: "Brand new shirt",
  },
  {
    id: 2,
    image: '🖥️',
    name: "Laptop",
    price: 999,
    description: "Powerful gaming laptop",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

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
            />
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;