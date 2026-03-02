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
                        className="spider-title"
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
                        <Link to="/register" className="mask-btn">
                            <span>ACCESS MAINFRAME</span>
                        </Link>
                        <Link to="/events" className="web-swing-btn">
                            Explore Events
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 3D Tech Lab Section */}
            <section className="highlights py-lg perspective-container">
                <div className="container">
                    <div className="section-header text-center mb-16">
                        <h2 className="spider-title">3D <span className="text-spiderRed">Tech Lab</span></h2>
                        <div className="underline"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* 3D Web Spiral */}
                        <div className="card-3d bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Web Spiral</h3>
                            <div className="web-spiral w-full"></div>
                            <p className="text-gray-500 text-xs mt-4">Simulating web tensile strength</p>
                        </div>

                        {/* 3D Spider Cube */}
                        <div className="card-3d bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Dimension Cube</h3>
                            <div className="spider-cube">
                                <div className="cube-face front">🕷️</div>
                                <div className="cube-face back">🕸️</div>
                                <div className="cube-face right">🕷️</div>
                                <div className="cube-face left">🕸️</div>
                                <div className="cube-face top">🕷️</div>
                                <div className="cube-face bottom">🕸️</div>
                            </div>
                            <p className="text-gray-500 text-xs mt-4">Mapping multiverse coordinates</p>
                        </div>

                        {/* 3D Parallax Scene */}
                        <div className="card-3d bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Neural Mask</h3>
                            <div className="mouse-follow-3d w-full h-[200px]">
                                <div className="follow-layer" data-depth="20">
                                    <div className="w-24 h-32 bg-spiderRed rounded-full relative shadow-[0_0_30px_rgba(231,76,60,0.5)] mx-auto">
                                        <div className="absolute top-10 left-4 right-4 flex justify-between">
                                            <span className="w-6 h-8 bg-white rounded-full"></span>
                                            <span className="w-6 h-8 bg-white rounded-full"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs mt-4">Stark-Tech HUD interface</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
