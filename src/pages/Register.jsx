import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { db, collection, addDoc } from '../../js/firebase-config';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: 'Developer / Engineer',
        event: 'Keynote: Future of AI'
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
            name: `${formData.firstName} ${formData.lastName}`,
            timestamp: new Date().toISOString(),
            status: 'Pending Verification'
        };

        try {
            await addDoc(collection(db, "registrations"), fullData);
            navigate('/payment');
        } catch (error) {
            console.error("Transmission Error: ", error);
            alert("Database Error: Failed to transmit data. Please check your connection.");
        }
    };

    return (
        <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
            {/* Progress Bar Section */}
            <div className="mb-12">
                <div className="flex justify-between mb-4">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center step-active text-white transition-all">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                        <span className="text-xs font-bold text-accent">DETAILS</span>
                    </div>

                    <div className="flex-1 h-[2px] bg-white/10 mt-5 mx-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-accent shadow-[0_0_15px_rgba(247,37,133,0.4)]"></div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#181818] border border-white/20 text-white/40">
                            <span className="material-symbols-outlined">event_available</span>
                        </div>
                        <span className="text-xs font-bold text-white/40">EVENTS</span>
                    </div>

                    <div className="flex-1 h-[2px] bg-white/10 mt-5 mx-4"></div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#181818] border border-white/20 text-white/40">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <span className="text-xs font-bold text-white/40">PAYMENT</span>
                    </div>
                </div>

                <div className="flex justify-between items-center bg-[#181818]/50 p-4 rounded-xl border border-white/5">
                    <p className="text-white/80 font-medium">Step 1 of 3: <span className="text-primary">Participant Details</span></p>
                    <span className="text-accent font-bold">33% Complete</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Registration Form */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-morphism rounded-2xl p-8 shadow-2xl relative overflow-hidden border border-white/5">
                        {/* Accent Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px]"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 blur-[100px]"></div>

                        <h2 className="text-3xl font-black mb-2 text-white uppercase tracking-tight">Register Now</h2>
                        <p className="text-slate-400 mb-8">Tell us about yourself to start your journey into the future.</p>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">First Name</label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary focus:ring-0 transition-all outline-none placeholder:text-white/20"
                                        placeholder="Elon"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Last Name</label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary focus:ring-0 transition-all outline-none placeholder:text-white/20"
                                        placeholder="Musk"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30">mail</span>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#121212] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:border-primary focus:ring-0 transition-all outline-none placeholder:text-white/20"
                                        placeholder="elon@spacex.com"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Current Role / Organization</label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary focus:ring-0 transition-all outline-none appearance-none"
                                >
                                    <option value="Developer / Engineer">Developer / Engineer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Startup Founder">Startup Founder</option>
                                    <option value="Student">Student</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="pt-4 flex items-center justify-between gap-4">
                                <button onClick={() => navigate(-1)} className="px-8 py-4 text-white/40 font-bold hover:text-white transition-colors" type="button">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-accent text-white px-10 py-4 rounded-xl font-bold shadow-[0_4px_0_0_#b51b61] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2 uppercase tracking-tighter">
                                    Next Step
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Side: Info Card */}
                <div className="space-y-6">
                    <div className="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden group">
                        <div className="aspect-video relative overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cyberpunk futuristic tech conference hall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfRUICGv2xb9onPFUss5wc2qaACdu0aOkQseajnshgRj3GmVli7ueM5Za-enVNZdq1I8RxWDsQ1MUv_MHiw66nzQju6D-PZTZ0rHESbg21HzRvXyf4JcyigPKu3oGGp-e10u-OwqrYWlnfTE52bpE3aC0htuS0aUCt5e3DpR8q-LHCAS9s6bMmrVZYF021C4ETvfY7EUE1rFBwAzyo1uvKj2aaFkM20uZ4avBr1AUUxvkrJU45PTbBEF4vMVOVageosPDYtrOE1Etn" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="bg-primary text-[#121212] text-[10px] font-black px-2 py-1 rounded-sm uppercase mb-2 inline-block">Featured</span>
                                <h3 className="text-lg font-bold text-white leading-tight">{formData.event}</h3>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3 text-slate-400 text-sm">
                                <span className="material-symbols-outlined text-accent text-lg">calendar_today</span>
                                <span>October 12-14, 2026</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400 text-sm">
                                <span className="material-symbols-outlined text-accent text-lg">location_on</span>
                                <span>Neo Tokyo Center</span>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-3">Event Perks</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-white/70">
                                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                        Lifetime NFT Access Pass
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white/70">
                                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                        AI Workshops &amp; Sprints
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white/70">
                                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                        Exclusive Networking Gala
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Assistance Card */}
                    <div className="glass-morphism rounded-2xl p-6 border border-primary/20">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">support_agent</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Need Help?</h4>
                                <p className="text-xs text-slate-400">Our concierge team is here 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden Previews (For Future Visual Context only) */}
            <div className="mt-20 opacity-20 grayscale pointer-events-none hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-morphism rounded-2xl p-8 border-white/5">
                        <div className="flex items-center gap-2 mb-6 text-primary">
                            <span className="material-symbols-outlined">qr_code_2</span>
                            <span className="font-bold uppercase tracking-widest text-sm">Step 3 Preview: UPI Payment</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl inline-block mb-4 mx-auto">
                            <div className="w-48 h-48 bg-slate-200 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-800 text-6xl">qr_code_2</span>
                            </div>
                        </div>
                        <p className="text-center text-sm font-bold text-white">SCAN TO PAY: ₹2,999</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
