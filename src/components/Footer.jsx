import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-card-dark py-12 px-4 mt-20 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">terminal</span>
                    <h2 className="text-lg font-bold text-white">TechVista <span className="text-accent">2026</span></h2>
                </div>

                <div className="flex gap-8 text-slate-500 text-sm">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
                </div>

                <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">share</span>
                    </button>
                    <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent transition-colors">
                        <span className="material-symbols-outlined text-xl">alternate_email</span>
                    </button>
                </div>
            </div>

            <div className="text-center mt-12 text-slate-600 text-xs tracking-widest uppercase">
                © 2026 TechVista Global Summit. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
