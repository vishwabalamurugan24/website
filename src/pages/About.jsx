import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Clock } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page container py-lg">
            <div className="section-header text-center pt-nav">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="spider-title"
                >
                    ABOUT <span className="gradient-text">SYMPOSIUM</span>
                </motion.h1>
                <p className="subtitle">Learn more about our vision, department, and competition rules.</p>
            </div>

            <div className="about-grid">
                <div className="about-card glass-card web-card-pulse">
                    <Target className="about-icon" />
                    <h3>Our Objective</h3>
                    <p>To provide a platform for students to showcase their technical prowess and innovative thinking in a competitive yet collaborative environment.</p>
                </div>
                <div className="about-card glass-card web-card-pulse">
                    <Users className="about-icon" />
                    <h3>Organizing Department</h3>
                    <p>The Department of Computer Science & Engineering is proud to host this year's symposium, bringing together bright minds from across the region.</p>
                </div>
                <div className="about-card glass-card web-card-pulse">
                    <BookOpen className="about-icon" />
                    <h3>Eligibility</h3>
                    <p>Open for all undergraduate students from various engineering and arts/science colleges. Valid college ID is mandatory for participation.</p>
                </div>
                <div className="about-card glass-card web-card-pulse">
                    <Clock className="about-icon" />
                    <h3>Schedule</h3>
                    <p>Day 1: Technical Events & Inauguration. Day 2: Non-Technical Events & Prize Distribution (9 AM to 5 PM).</p>
                </div>
            </div>
        </div>
    );
};

export default About;
