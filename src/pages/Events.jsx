import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Monitor, Zap, Music, Camera, Trophy, Users } from 'lucide-react';
import './Events.css';

const eventsData = [
    {
        id: 1,
        title: 'Code Conquest',
        category: 'Technical',
        icon: <Code />,
        description: 'Solve complex algorithmic challenges in a race against time. Test your competitive programming skills.',
        teamSize: '1-2 members',
        prize: '₹5,000',
        color: '#6366f1'
    },
    {
        id: 2,
        title: 'Paper Presentation',
        category: 'Technical',
        icon: <Monitor />,
        description: 'Present your innovative research papers on emerging technologies to a panel of experts.',
        teamSize: '2 members',
        prize: '₹3,000',
        color: '#a855f7'
    },
    {
        id: 3,
        title: 'Robo Soccer',
        category: 'Technical',
        icon: <Cpu />,
        description: 'Build and program robots to compete in a high-octane soccer tournament.',
        teamSize: '3-4 members',
        prize: '₹10,000',
        color: '#22d3ee'
    },
    {
        id: 4,
        title: 'Gaming Central',
        category: 'Non-Technical',
        icon: <Zap />,
        description: 'Compete in popular e-sports titles like Valorant and BGMI for the ultimate glory.',
        teamSize: '5 members',
        prize: '₹7,000',
        color: '#fbbf24'
    },
    {
        id: 5,
        title: 'Photography',
        category: 'Non-Technical',
        icon: <Camera />,
        description: 'Capture the essence of the symposium through your lens. Theme: "Digital Renaissance".',
        teamSize: 'Individual',
        prize: '₹2,000',
        color: '#f472b6'
    },
    {
        id: 6,
        title: 'Treasure Hunt',
        category: 'Non-Technical',
        icon: <Music />,
        description: 'A thrilling hunt across the campus solving riddles and following clues to find the hidden treasure.',
        teamSize: '4 members',
        prize: '₹4,000',
        color: '#4ade80'
    }
];

const Events = () => {
    const [filter, setFilter] = useState('All');

    const filteredEvents = filter === 'All'
        ? eventsData
        : eventsData.filter(e => e.category === filter);

    return (
        <div className="events-page container py-lg">
            <div className="section-header text-center pt-nav">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    SYMPOSIUM <span className="gradient-text">EVENTS</span>
                </motion.h1>
                <p className="subtitle">Discover our wide range of technical and non-technical competitions.</p>

                <div className="filter-tabs">
                    {['All', 'Technical', 'Non-Technical'].map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="events-grid"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredEvents.map((event) => (
                        <motion.div
                            layout
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="event-card glass-card"
                        >
                            <div className="event-icon" style={{ backgroundColor: `${event.color}15`, color: event.color }}>
                                {event.icon}
                            </div>
                            <h3>{event.title}</h3>
                            <span className="category-tag">{event.category}</span>
                            <p>{event.description}</p>

                            <div className="event-details">
                                <div className="detail">
                                    <Users size={16} />
                                    <span>{event.teamSize}</span>
                                </div>
                                <div className="detail">
                                    <Trophy size={16} />
                                    <span>{event.prize}</span>
                                </div>
                            </div>

                            <button className="btn btn-outline full-width">View Details</button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Events;
