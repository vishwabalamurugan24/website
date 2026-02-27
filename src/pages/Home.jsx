import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-03-20T09:00:00');

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });

            if (difference < 0) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        SYMPOSIUM <span className="gradient-text">2026</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        Unleashing Innovation. Transforming Future.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="countdown-container glass-card"
                    >
                        <div className="countdown-item">
                            <span className="count">{Math.max(0, timeLeft.days)}</span>
                            <span className="label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{Math.max(0, timeLeft.hours)}</span>
                            <span className="label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{Math.max(0, timeLeft.minutes)}</span>
                            <span className="label">Mins</span>
                        </div>
                        <div className="countdown-item">
                            <span className="count">{Math.max(0, timeLeft.seconds)}</span>
                            <span className="label">Secs</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-actions"
                    >
                        <Link to="/register" className="btn btn-primary">
                            Register Now <ArrowRight size={20} />
                        </Link>
                        <Link to="/events" className="btn btn-outline">
                            Explore Events
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="highlights py-lg">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Symposium Highlights</h2>
                        <div className="underline"></div>
                    </div>

                    <div className="highlights-grid">
                        <div className="highlight-card glass-card">
                            <Calendar className="highlight-icon" />
                            <h3>March 20-21</h3>
                            <p>Two days of non-stop technical excitement and competition.</p>
                        </div>
                        <div className="highlight-card glass-card">
                            <MapPin className="highlight-icon" />
                            <h3>Main Auditorium</h3>
                            <p>Join us at the college central campus for the grand event.</p>
                        </div>
                        <div className="highlight-card glass-card">
                            <Award className="highlight-icon" />
                            <h3>₹50,000 Prizes</h3>
                            <p>Win grand prizes across various technical and non-technical events.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
