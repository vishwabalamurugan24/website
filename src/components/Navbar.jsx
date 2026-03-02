import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path
            ? "text-primary text-sm font-bold border-b-2 border-primary pb-1"
            : "text-white/70 hover:text-primary text-sm font-medium transition-colors";
    };

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/10 bg-[#121212]/80 backdrop-blur-md px-6 md:px-16 py-4">
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-3xl font-bold">terminal</span>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
                        TechVista <span className="text-accent">2026</span>
                    </h2>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className={getLinkClass('/')}>Home</Link>
                    <Link to="/events" className={getLinkClass('/events')}>Events</Link>
                    <Link to="/schedule" className={getLinkClass('/schedule')}>Schedule</Link>
                    <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-card-dark border border-white/10 rounded-lg px-3 py-1.5 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
                    <span className="material-symbols-outlined text-white/50 text-xl">search</span>
                    <input
                        className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-white/30 w-40 outline-none"
                        placeholder="Search events..."
                        type="text"
                    />
                </div>

                <Link to="/register">
                    <button className="bg-primary hover:bg-primary/90 text-black px-6 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(29,185,84,0.3)]">
                        Register
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
