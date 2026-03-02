import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { db, collection, addDoc } from '../js/firebase-config'; // Ensure path is correct
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        college: '',
        department: '',
        year: '1',
        event: 'Code Conquest' // Default
    });

    useEffect(() => {
        const eventParam = searchParams.get('event');
        if (eventParam) {
            setFormData(prev => ({ ...prev, event: eventParam }));
        }
    }, [searchParams]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullData = {
            ...formData,
            timestamp: new Date().toISOString(),
            status: 'Pending Verification'
        };

        try {
            await addDoc(collection(db, "registrations"), fullData);
            alert("Protocol Initialized! Awaiting Stark HQ Verification.");
            navigate('/payment');
        } catch (error) {
            console.error("Transmission Error: ", error);
            alert("Security Breach: Failed to transmit data. Please check your web-link.");
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display dark bg-background-light dark:bg-[#211112]">
            <main className="flex-1 flex flex-col items-center justify-start py-12 px-4 md:px-0 z-10 w-full relative pt-24 text-slate-900 dark:text-slate-100">
                {/* Hero Banner Section */}
                <div className="w-full max-w-4xl px-4 mb-8">
                    <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden border border-primary/30 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#211112] via-transparent to-transparent z-10"></div>
                        <div className="absolute inset-0 scanline opacity-30 z-20"></div>
                        <img
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800&h=400"
                            alt="Background"
                        />
                        <div className="absolute bottom-6 left-8 z-30">
                            <span className="inline-block bg-[#e63746] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2 tracking-[0.3em]">
                                ENROLLMENT OPEN
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase spider-title">
                                Agent Enrollment
                            </h2>
                            <p className="text-[#e63746]/80 text-xs font-medium tracking-widest mt-1 uppercase">
                                Clearance Level: Omega Required
                            </p>
                        </div>
                    </div>
                </div>

                {/* Registration Container */}
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
                    {/* Briefing Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="glass-card p-6 border-[#e63746]/20 bg-[#e63746]/5 rounded-xl space-y-6">
                            <h3 className="text-xl font-bold tracking-tight text-white spider-title flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#e63746]">description</span> MISSION BRIEFING
                            </h3>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-[#e63746]/60 font-bold uppercase tracking-widest">Selected Specialization</p>
                                    <p className="text-sm font-bold text-white" id="displayEvent">{formData.event}</p>
                                </div>
                                <div className="h-px bg-[#e63746]/10"></div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-[#e63746]/60 font-bold uppercase tracking-widest">Deployment Logistics</p>
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        <span>March 15, 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        <span>09:00 AM - 06:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <span>Stark Tower, Queens, NYC</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 border-white/5 bg-white/5 rounded-xl">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Security Clearance</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-[11px] text-slate-500">
                                    <span className="material-symbols-outlined text-[#e63746] text-sm">check_circle</span>
                                    Stark-Tech Credentials Validated
                                </li>
                                <li className="flex items-start gap-2 text-[11px] text-slate-500">
                                    <span className="material-symbols-outlined text-[#e63746] text-sm">check_circle</span>
                                    Biometric Handshake Initialized
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Protocol Header */}
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold tracking-tight text-slate-100 spider-title">SECURE ACCESS PROTOCOL</h3>
                            <div className="h-1 w-24 bg-[#e63746] mx-auto rounded-full"></div>
                            <p className="text-slate-400 text-sm max-w-md mx-auto py-2">
                                Initialize your biometric signature and credentials for the upcoming symposium.
                                All data is encrypted via Stark-Tech 256-bit protocols.
                            </p>
                        </div>

                        {/* Form Start */}
                        <form className="space-y-10" id="registrationForm" onSubmit={handleSubmit}>
                            {/* Section 1: Identity */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-[#e63746] font-bold text-sm tracking-widest">01</span>
                                    <div className="h-px flex-1 bg-[#e63746]/20"></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Identity Verification</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 web-card-pulse bg-white/5 p-6 rounded-xl border border-white/5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-[#e63746] uppercase tracking-[0.2em] ml-1">Agent Codename</label>
                                        <div className="relative neon-border rounded-lg bg-[#211112]/50 border border-[#e63746]/30 focus-within:ring-2 focus-within:ring-[#e63746]/40">
                                            <input
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-none text-slate-100 placeholder:text-slate-600 focus:ring-0 p-4 text-sm font-medium outline-none"
                                                placeholder="e.g. Arachnid_01"
                                                type="text"
                                            />
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#e63746]/40">fingerprint</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-[#e63746] uppercase tracking-[0.2em] ml-1">Comm Channel (Email)</label>
                                        <div className="relative neon-border rounded-lg bg-[#211112]/50 border border-[#e63746]/30 focus-within:ring-2 focus-within:ring-[#e63746]/40">
                                            <input
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-none text-slate-100 placeholder:text-slate-600 focus:ring-0 p-4 text-sm font-medium outline-none"
                                                placeholder="secure@stark.id"
                                                type="email"
                                            />
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#e63746]/40">alternate_email</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 web-card-pulse bg-white/5 p-6 rounded-xl border border-white/5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-[#e63746] uppercase tracking-[0.2em] ml-1">Training Academy (College)</label>
                                        <div className="relative neon-border rounded-lg bg-[#211112]/50 border border-[#e63746]/30 focus-within:ring-2 focus-within:ring-[#e63746]/40">
                                            <input
                                                id="college"
                                                name="college"
                                                required
                                                value={formData.college}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-none text-slate-100 placeholder:text-slate-600 focus:ring-0 p-4 text-sm font-medium outline-none"
                                                placeholder="Tech University"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-[#e63746] uppercase tracking-[0.2em] ml-1">Division (Department)</label>
                                        <div className="relative neon-border rounded-lg bg-[#211112]/50 border border-[#e63746]/30 focus-within:ring-2 focus-within:ring-[#e63746]/40">
                                            <input
                                                id="department"
                                                name="department"
                                                required
                                                value={formData.department}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-none text-slate-100 placeholder:text-slate-600 focus:ring-0 p-4 text-sm font-medium outline-none"
                                                placeholder="Computer Science"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-bold text-[#e63746] uppercase tracking-[0.2em] ml-1">Service Year</label>
                                    <select
                                        id="year"
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        className="w-full bg-[#211112]/50 border border-[#e63746]/30 rounded-lg text-slate-100 p-4 text-sm font-medium focus:ring-2 focus:ring-[#e63746]/40 focus:border-[#e63746]/60 outline-none appearance-none"
                                    >
                                        <option value="1">1st Year</option>
                                        <option value="2">2nd Year</option>
                                        <option value="3">3rd Year</option>
                                        <option value="4">4th Year</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-bold text-[#e63746] uppercase tracking-[0.2em] ml-1">Specialization Sector</label>
                                    <select
                                        id="event"
                                        name="event"
                                        value={formData.event}
                                        onChange={handleChange}
                                        className="w-full bg-[#211112]/50 border border-[#e63746]/30 rounded-lg text-slate-100 p-4 text-sm font-medium focus:ring-2 focus:ring-[#e63746]/40 focus:border-[#e63746]/60 outline-none appearance-none"
                                    >
                                        <option value="Code Conquest">Code Conquest</option>
                                        <option value="Paper Presentation">Paper Presentation</option>
                                        <option value="Robo Soccer">Robo Soccer</option>
                                        <option value="Gaming Central">Gaming Central</option>
                                        <option value="Photography">Photography</option>
                                        <option value="Treasure Hunt">Treasure Hunt</option>
                                        <option value="Web-Fluid Chemistry">Web-Fluid Chemistry</option>
                                        <option value="Nano-Suit Engineering">Nano-Suit Engineering</option>
                                        <option value="Multiversal Theory">Multiversal Theory</option>
                                        <option value="Urban Reconnaissance">Urban Reconnaissance</option>
                                    </select>
                                </div>
                            </div>

                            {/* Section 3: Terms & Authorization */}
                            <div className="space-y-6 pt-4">
                                <div className="flex items-start gap-3">
                                    <div className="pt-1">
                                        <input
                                            required
                                            className="size-4 rounded border-[#e63746]/40 bg-[#211112] text-[#e63746] focus:ring-[#e63746] focus:ring-offset-[#211112] cursor-pointer"
                                            type="checkbox"
                                        />
                                    </div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed uppercase tracking-wide">
                                        I acknowledge that participating in the Spider-Symposium involves exposure to
                                        high-energy multiverse particles. I agree to non-disclosure protocols regarding Stark Industries proprietary tech.
                                    </p>
                                </div>
                                <button className="mask-btn w-full" type="submit" style={{ '--primary': '#e63746' }}>
                                    <span className="tracking-widest relative z-10 px-8 py-3 w-full h-full flex items-center justify-center font-bold">AUTHORIZE MISSION</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;
