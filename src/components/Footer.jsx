import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-white/5 bg-[#181818] py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">rocket_launch</span>
                        <span className="text-xl font-bold text-white tracking-tight">TECHVISTA <span className="text-accent">2026</span></span>
                    </div>
                    <p className="text-slate-500 text-sm">Empowering the next generation of innovators.</p>
                </div>

                <div className="flex gap-8 text-slate-500 text-sm">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
                </div>

                <div className="flex gap-6">
                    <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#121212] transition-all text-white/70" href="#">
                        <span className="material-symbols-outlined text-lg">share</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#121212] transition-all text-white/70" href="#">
                        <span className="material-symbols-outlined text-lg">public</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#121212] transition-all text-white/70" href="#">
                        <span className="material-symbols-outlined text-lg">alternate_email</span>
                    </a>
                </div>
            </div>

            <p className="text-center text-slate-500 text-xs tracking-widest uppercase mt-12 pt-8 border-t border-white/5">
                © 2026 TechVista Global Summit. All rights reserved. Designed for the future.
            </p>
        </footer>
    );
};

export default Footer;
