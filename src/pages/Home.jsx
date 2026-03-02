import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="flex-1 w-full flex flex-col items-center pt-8 pb-20 px-4">
            {/* Hero Section */}
            <div className="w-full max-w-[1200px] hero-gradient rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)]">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent text-sm font-bold mb-8 shadow-[0_0_20px_rgba(247,37,133,0.4)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        NEXT GENERATION TECHNOLOGY SUMMIT
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Future</span>
                    </h1>

                    <div className="absolute top-0 right-0 md:right-10 md:top-20 w-32 h-32 md:w-64 md:h-64 z-20 animate-float pointer-events-none">
                        <img alt="Futuristic 3D Mascot" className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(29,185,84,0.4)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW0bkE4KrtRRa-Seg5-dU0TIFksD8Rj2b6G2Ex-a4zLrlnB_zIq51MKYKeCemPy_spuxJCIhXEwNhLxJ9eyFNY8Ps0In514ek7b3N1rGslLWqDdTf2gIHIixGXVgGZEP3YF-jWiECFozD4gew1BcdFyJ13MNGyE5wkXzG0xzncKfFSsZ62QiCKOTt0PthG8N3xzG2pOYwbNIDFc6rdaw86Ak57lJIYLbZElUkGJ7RSmRdIsP1RPNWG2u4LZX5FxD527CcZlWZs3K_g" />
                    </div>

                    <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-12 font-light">
                        Join us at the <span className="text-white font-medium">Nexus Convention Center</span> for a journey into the digital frontier. Shaping the world of tomorrow, today.
                    </p>

                    {/* 3D Style Countdown */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-3xl mb-12">
                        <div className="glass p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)] border-accent/20 flex flex-col items-center justify-center group hover:border-accent/50 transition-all">
                            <span className="text-4xl md:text-5xl font-black text-accent drop-shadow-[0_0_15px_rgba(247,37,133,0.5)]">142</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Days</span>
                        </div>
                        <div className="glass p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)] border-primary/20 flex flex-col items-center justify-center group hover:border-primary/50 transition-all">
                            <span className="text-4xl md:text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(29,185,84,0.4)]">08</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Hours</span>
                        </div>
                        <div className="glass p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)] border-white/10 flex flex-col items-center justify-center group hover:border-white/30 transition-all">
                            <span className="text-4xl md:text-5xl font-black text-white">45</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Mins</span>
                        </div>
                        <div className="glass p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)] border-white/10 flex flex-col items-center justify-center group hover:border-white/30 transition-all">
                            <span className="text-4xl md:text-5xl font-black text-white">12</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Secs</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link to="/register">
                            <button className="bg-primary text-background-dark font-black px-10 py-4 rounded-xl shadow-[0_0_15px_rgba(29,185,84,0.3)] hover:translate-y-[-2px] transition-all">
                                GET YOUR PASS
                            </button>
                        </Link>
                        <button className="glass text-white font-bold px-10 py-4 rounded-xl border-white/20 hover:bg-white/10 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined">play_circle</span>
                            VIEW TRAILER
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Tracks */}
            <section className="w-full max-w-[1200px] mx-auto mt-24">
                <div className="flex items-end justify-between mb-12 px-4">
                    <div>
                        <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-2">Explore Tracks</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">The Pillars of 2026</h3>
                    </div>
                    <div className="text-slate-500 text-sm hidden md:block">
                        October 14-16, 2026 • Nexus Center
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {/* Card 1 */}
                    <div className="group relative bg-[#181818] rounded-[2rem] p-8 overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)] hover:border-primary/30 transition-all">
                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">psychology</span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Neural Networks &amp; AI</h4>
                        <p className="text-slate-400 leading-relaxed mb-6">Deep dive into the silicon minds of the next decade. Ethical frameworks and generative power.</p>
                        <div className="w-full h-[200px] rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img alt="Neural Networks" className="w-full h-full object-cover" data-alt="Glowing blue neural network visualization abstract" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnmHq4VzIFD-uY2mOB51RvOSSsGgg51EORtq9N6I0jg-u2L-q3b3BdqH0c2vM5H6NLnhcbdlHt-3O7tOB0pg46dgoBs1mcH4RvSmv1W6jgMNmXxFwL9lZHejPhnyq0nsKp7SX8nhs6W0kB-ppuOJ9JlXuYWImSAYgJrmEhjjWQszCslNEn3kfJEFR5Tttm9QJEw9TzVBlPo2Ra9qyJ2TYbyMfUnUmYJiHfb47pN8NIbrK9dxTOloKoa6tpOnDK5CsFs5tfpi-B6GMe" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-[#181818] rounded-[2rem] p-8 overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)] hover:border-accent/30 transition-all">
                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 transition-all"></div>
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                            <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Quantum Robotics</h4>
                        <p className="text-slate-400 leading-relaxed mb-6">Merging quantum computing with physical automation to solve impossible constraints.</p>
                        <div className="w-full h-[200px] rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img alt="Quantum Robotics" className="w-full h-full object-cover" data-alt="Modern humanoid robot arm detail view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA4Uk2BfXBiQtK5HFed8xXs2wK6-YhnwHD1-B0lkkyXuzMOC2LSTeooaef3kLgMa077oP9Jm2m7kp3BPAT934oKufke86VjSN5T2e0DV06WMjwqfsFrOAFfIAEzyvSWtr-Lnwa45-IgiBbnjIzKjWBMLJTPxEIni_fjxuHzEQwxGd1iCMb44rgsLyGfAqHjRJAzQvWnA8EanC7J_G3k-YtwQkf4k11B5Am2WR0DVBK48YEV1eE6O-aPx6XfxUXcuYuYOJYMyR-hPm4" />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative bg-[#181818] rounded-[2rem] p-8 overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)] hover:border-white/30 transition-all">
                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6">
                            <span className="material-symbols-outlined text-3xl">language</span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Bio-Digital Mesh</h4>
                        <p className="text-slate-400 leading-relaxed mb-6">Exploring the convergence of biological systems and global communication networks.</p>
                        <div className="w-full h-[200px] rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img alt="Digital Mesh" className="w-full h-full object-cover" data-alt="Green matrix digital code background pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnqh2ek0e3hn9ZavRSQfkOKV9SZUCnc6fwoS5l3Ue1rgEkBB3PcTGcQ5N103Mu5Sf1dROgJfC5pd5hW83ayUas03kj9Q6zfPi6kO7TFYzTg28vZeWE876xrlVMJvkSL47E7OstzX3f-GyteOpgZUcAg7MRsaukg05E7Se_NAoHuJwoWn9BB0CxUNqQL2aKm-98pBIVnvbIjY2lp7dXCcmswQ09Jj2H-EmjfrOmj2kiZHkZEXrGpgQJfHCM6Gzt1hfhVLnRLAsl6EMq" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="w-full max-w-[1200px] mx-auto mt-24 px-4">
                <div className="glass rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border-white/5">
                    <div className="md:w-1/2">
                        <h3 className="text-4xl font-bold text-white mb-6">Nexus Convention Center</h3>
                        <p className="text-slate-400 text-lg mb-8">
                            A state-of-the-art facility designed for the future. Located in the heart of Innovation District, featuring holographic projectors and zero-latency connectivity.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                                <span className="text-white font-medium">100 Future Way, Silicon Metropolis</span>
                            </div>
                            <div className="flex items-center gap-4 text-primary">
                                <span className="material-symbols-outlined">hotel</span>
                                <span className="text-white font-medium">Official Partner: Neon Grand Hotel</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_10px_20px_rgba(0,0,0,0.3)]">
                        <img alt="Venue" className="w-full h-full object-cover" data-alt="Modern glass architecture convention center building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5EmxYE4XrwEDxxbrQmNEm23UtTcYfRs-PicsgtsqJFqZFK7eHuZ4ltGmFEHYQQI1vkpFqfuX80goI3oZkmSeONWC2MskEA1wzMZJ2KprqP5_gmMepB-b6YE-rR5DUXqkkeBQW-PLUX5VuFp7I79QnZSX1hhWccPA8wP0idAjlgl7_B_vfhMxnD5umcgq68os-iQo5lD3Fx5Yiaa9F3WDfUhMtcLOIjUGzF8Xz6tGdLcFHptWPiCUiQo_oiVuq7KSEhJyAZfyXhr4Y" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
