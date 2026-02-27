import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Register', path: '/register' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <Rocket className="logo-icon" />
                    <span>SYMPOSIUM 2026</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/admin" className="admin-btn">Admin</Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={location.pathname === link.path ? 'active' : ''}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/admin" onClick={() => setIsOpen(false)} className="admin-btn">Admin Panel</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
