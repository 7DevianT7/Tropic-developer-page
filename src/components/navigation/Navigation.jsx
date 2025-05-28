import './navigation.style.css';
import { MyTechLogo } from '../../assets';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
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
        // Close mobile menu when route changes
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
                    to="/counter" 
                    className={location.pathname === '/counter' ? 'active' : ''}
                >
                    COUNTER
                </Link>
                <Link 
                    to="/learning" 
                    className={location.pathname === '/learning' ? 'active' : ''}
                >
                    LEARNING
                </Link>
            </div>
        </div>
    );
};

export default Navigation;