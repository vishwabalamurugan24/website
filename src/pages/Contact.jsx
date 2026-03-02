import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            await addDoc(collection(db, 'messages'), formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('Failed to send message. Using Firebase? Make sure config is set.');
        }
    };

    return (
        <div className="contact-page container py-lg">
            <div className="section-header text-center pt-nav">
                <h1 className="spider-title">GET IN <span className="gradient-text">TOUCH</span></h1>
                <p className="subtitle">Have queries? Our coordinators are here to help.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-item glass-card">
                        <Phone className="contact-icon" />
                        <div>
                            <h4>Phone</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="contact-item glass-card">
                        <Mail className="contact-icon" />
                        <div>
                            <h4>Email</h4>
                            <p>support@symposium2026.com</p>
                        </div>
                    </div>
                    <div className="contact-item glass-card">
                        <MessageSquare className="contact-icon" />
                        <div>
                            <h4>WhatsApp</h4>
                            <p>+91 99988 77766</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form glass-card" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="mask-btn full-width">
                        <span>SEND MESSAGE</span>
                    </button>
                    {status && <p className="status-msg">{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
