import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const renderFloatingNav = () => (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4">
            <nav className="glass flex w-full max-w-[1200px] items-center justify-between px-6 py-3 rounded-2xl shadow-3d">
                <div className="flex items-center gap-3">
                    <div className="text-primary flex items-center">
                        <span className="material-symbols-outlined text-3xl">terminal</span>
                    </div>
                    <Link to="/" className="text-xl font-bold tracking-tight text-white">
                        TechVista <span className="text-accent">2026</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <Link to="/speakers" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Speakers</Link>
                    <Link to="/schedule" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Schedule</Link>
                    <Link to="/events" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Events</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/register">
                        <button className="bg-primary text-background-dark hover:scale-105 active:scale-95 transition-transform px-6 py-2 rounded-lg font-bold text-sm shadow-glow-primary">
                            Register Now
                        </button>
                    </Link>
                    <div className="w-10 h-10 rounded-full border-2 border-accent/30 p-0.5 overflow-hidden">
                        <img alt="User Profile" className="w-full h-full rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy73oSEYedjpthvfXq4dtLJiDx9zMtt0IGAFSRO7coKI4VD8WoBkMKlrmrzs0zbx07quVNNNsFT0-bN_fvii8Mz4-YhIVQRyv902V7bLyNzf3xCH0sX-Ijfvjtu8HQ7PUF3YpD10F0wJJheC2_IlQBw03FMX4lTEjLgNkKgyAWxcQc_bBHWkLBZ0h2h73BXPpS_Q5QkbVd-135omT_m_6smFVWLIvv_e-D7O4Z__T0q6BOxxV0XD_jo9j9cXYnkIyEeP-sFKlgF2xt" />
                    </div>
                </div>
            </nav>
        </header>
    );

    const renderStickyNav = () => (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 md:px-16 py-4">
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-3xl font-bold">terminal</span>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-tight">TechVista <span className="text-accent">2026</span></h2>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-white/70 hover:text-primary'}`}>Home</Link>
                    <Link to="/events" className={`text-sm font-medium transition-colors ${location.pathname === '/events' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-white/70 hover:text-primary'}`}>Events</Link>
                    <Link to="/schedule" className={`text-sm font-medium transition-colors ${location.pathname === '/schedule' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-white/70 hover:text-primary'}`}>Schedule</Link>
                    <Link to="/contact" className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-white/70 hover:text-primary'}`}>Contact</Link>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-card-dark border border-white/10 rounded-lg px-3 py-1.5 focus-within:border-primary/50 transition-all">
                    <span className="material-symbols-outlined text-white/50 text-xl">search</span>
                    <input
                        className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-white/30 w-40 outline-none"
                        placeholder="Search events..."
                        type="text"
                    />
                </div>

                <Link to="/register">
                    <button className="bg-primary hover:bg-primary/90 text-black px-6 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105">
                        Register
                    </button>
                </Link>
            </div>
        </header>
    );

    return isHome ? renderFloatingNav() : renderStickyNav();
};

export default Navbar;
