import React from 'react';
import { Mail, Phone, Globe, Github, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h3>SYMPOSIUM 2026</h3>
                    <p>The biggest technical extravaganza of the year. Innovate. Compete. Conquer.</p>
                    <div className="social-links">
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Github size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/admin">Admin Login</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><Phone size={18} /> +91 98765 43210</li>
                        <li><Mail size={18} /> contact@symposium2026.com</li>
                        <li><Globe size={18} /> college.edu/symposium</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Symposium Event Committee. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
