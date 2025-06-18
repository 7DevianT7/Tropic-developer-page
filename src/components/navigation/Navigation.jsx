import './navigation.style.css';
import { MyTechLogo } from '../../assets';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = ({ cartItemsCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className={`navigation-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/">
        <MyTechLogo extClass='navigation-logo' />
      </Link>

      <button
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navigation-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          HOME
        </Link>
        <Link 
          to="/state" 
          className={location.pathname === '/state' ? 'active' : ''}
        >
          STATE
        </Link>
        <Link 
          to="/learning" 
          className={location.pathname === '/learning' ? 'active' : ''}
        >
          LEARNING
        </Link>
        <Link 
          to="/users" 
          className={location.pathname === '/users' ? 'active' : ''}
        >
          USERS
        </Link>
        <Link 
          to="/cart" 
          className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
        >
          CART
          {cartItemsCount > 0 && (
            <span className="cart-badge">{cartItemsCount}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navigation;