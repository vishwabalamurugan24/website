import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import qrImage from '../assets/qr.jpeg';
import './Payment.css';

const Payment = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleVerifyClick = () => {
        if (!file) {
            alert('Security Breach: No proof uploaded. FRIDAY requires a biometric receipt scan.');
            return;
        }
        alert('Transmission Successful! Stark HQ is verifying your credentials. Welcome to the web.');
        navigate('/');
    };

    return (
        <div className="bg-background-light dark:bg-[#120809] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display w-full relative pt-24">

            <main className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
                {/* Left Sidebar: Nav & Status */}
                <aside className="lg:col-span-3 flex flex-col gap-6">
                    <div className="bg-[#1c0d0e] border border-[#e63746]/20 p-6 rounded-xl flex flex-col gap-4 glow-border">
                        <div className="flex items-center gap-3 p-3 bg-[#e63746]/10 rounded-lg text-[#e63746]">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                            <span className="text-sm font-bold uppercase tracking-wider">Payment Hub</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-white/5 rounded-lg transition-all cursor-pointer">
                            <span className="material-symbols-outlined">history</span>
                            <span className="text-sm font-bold uppercase tracking-wider">Ledger</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-white/5 rounded-lg transition-all cursor-pointer">
                            <span className="material-symbols-outlined">verified_user</span>
                            <span className="text-sm font-bold uppercase tracking-wider">Authentication</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[#e63746]/10">
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Network Status</p>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#00f2ff] web-swing-loader"></div>
                                <span className="text-xs font-mono text-[#00f2ff]">NODE_ACTIVE: NYC_SEC_01</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#e63746]/5 border border-[#e63746]/10 p-6 rounded-xl">
                        <h3 className="text-xs font-bold text-[#e63746] uppercase tracking-widest mb-3 italic">Symposium Access</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Access to the <span className="text-slate-100">Spider-Man Symposium</span> requires a verified
                            Stark-issued transaction protocol.
                        </p>
                    </div>
                </aside>

                {/* Main Content: Transaction Area */}
                <section className="lg:col-span-9 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-black text-slate-100 tracking-tighter uppercase spider-title">Transaction Protocol</h2>
                        <div className="h-1 w-24 bg-[#e63746]"></div>
                        <p className="text-slate-400 text-sm mt-2 uppercase tracking-widest">Gateway: Secure_Spider_Node_42</p>
                    </div>

                    {/* UPI & QR Data Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#1c0d0e] border border-[#e63746]/30 rounded-xl overflow-hidden relative group web-card-pulse">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#e63746]/5 to-transparent opacity-50"></div>
                            <div className="p-6 relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <p className="text-[10px] text-[#e63746] font-bold uppercase tracking-widest">Protocol ID</p>
                                        <p className="text-lg font-mono text-slate-100">ST-42-99-SPDR</p>
                                    </div>
                                    <span className="material-symbols-outlined text-[#00f2ff] blue-glow border p-2 rounded-lg border-[#00f2ff]/20">qr_code_2</span>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="p-4 bg-black/40 border border-[#e63746]/10 rounded-lg">
                                        <p className="text-[10px] text-slate-500 uppercase mb-1">UPI Destination</p>
                                        <div className="flex justify-between items-center">
                                            <p className="font-mono text-slate-100 italic">stark-symposium@okaxis</p>
                                            <button
                                                className="text-[#e63746] hover:text-white transition-colors"
                                                onClick={() => navigator.clipboard.writeText('stark-symposium@okaxis')}
                                            >
                                                <span className="material-symbols-outlined text-sm">content_copy</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-black/40 border border-[#e63746]/10 rounded-lg">
                                        <p className="text-[10px] text-slate-500 uppercase mb-1">Amount Due</p>
                                        <p className="text-2xl font-bold text-white tracking-tighter">
                                            4,999.00 <span className="text-sm font-normal text-[#e63746]">CREDITS</span>
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="mask-btn w-full h-[50px]"
                                    style={{ '--primary': '#e63746' }}
                                    onClick={() => window.open('upi://pay?pa=stark-symposium@okaxis&pn=Stark%20Industries&am=4999.00')}
                                >
                                    <span className="relative z-10 w-full h-full flex items-center justify-center font-bold tracking-widest text-sm">OPEN UPI APP</span>
                                </button>
                            </div>
                        </div>

                        {/* QR CODE Display */}
                        <div className="bg-[#1c0d0e] border border-[#00f2ff]/20 rounded-xl flex flex-col items-center justify-center p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 p-2 opacity-30">
                                <div className="w-4 h-4 border-t-2 border-l-2 border-[#00f2ff]"></div>
                            </div>
                            <div className="absolute top-0 right-0 p-2 opacity-30">
                                <div className="w-4 h-4 border-t-2 border-r-2 border-[#00f2ff]"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-2 opacity-30">
                                <div className="w-4 h-4 border-b-2 border-l-2 border-[#00f2ff]"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 p-2 opacity-30">
                                <div className="w-4 h-4 border-b-2 border-r-2 border-[#00f2ff]"></div>
                            </div>

                            <div className="relative w-48 h-48 bg-white/5 rounded-lg flex items-center justify-center border border-[#00f2ff]/10">
                                <div className="w-40 h-40 opacity-90 flex items-center justify-center">
                                    <img
                                        className="w-full h-full object-contain filter rounded-lg"
                                        src={qrImage}
                                        alt="Stark Protocol QR"
                                    />
                                </div>
                                <div className="scan-line"></div>
                            </div>
                            <p className="mt-6 text-xs text-[#00f2ff] uppercase tracking-[0.3em] font-bold blue-glow">Scan to Authorize</p>
                        </div>
                    </div>

                    {/* Proof of Transfer Upload */}
                    <div className="bg-[#1c0d0e] border-2 border-dashed border-[#e63746]/20 rounded-xl p-10 flex flex-col items-center justify-center gap-4 group hover:border-[#e63746]/40 transition-all cursor-pointer relative overflow-hidden">
                        <input
                            type="file"
                            id="uploadProof"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <div className="absolute inset-0 bg-[#e63746]/0 group-hover:bg-[#e63746]/5 transition-all z-10 pointer-events-none"></div>
                        <div className="size-16 rounded-full bg-[#e63746]/10 flex items-center justify-center text-[#e63746] group-hover:scale-110 transition-transform relative z-10">
                            <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                        </div>
                        <div className="text-center relative z-10">
                            <h3 className="text-lg font-bold text-slate-100 uppercase tracking-tight">Proof of Transfer</h3>
                            <p className="text-sm text-slate-500 mt-1">
                                {file ? `Selected file: ${file.name}` : 'Upload transaction screenshot for Stark OS verification'}
                            </p>
                        </div>
                        <div className="flex gap-2 text-[10px] font-mono text-[#e63746]/60 uppercase mt-2 relative z-10">
                            <span>JPEG</span> • <span>PNG</span> • <span>MAX 5MB</span>
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="flex flex-col md:flex-row items-center gap-4 justify-between pt-6 border-t border-[#e63746]/10">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full border border-[#00f2ff]/30 flex items-center justify-center text-[#00f2ff]">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-100 uppercase">Verification Engine</p>
                                <p className="text-[10px] text-slate-500 font-mono italic">FRIDAY_AI READY...</p>
                            </div>
                        </div>
                        <button
                            className="mask-btn px-12 h-[50px]"
                            style={{ '--primary': '#e63746' }}
                            onClick={handleVerifyClick}
                        >
                            <span className="relative z-10 w-full h-full flex items-center justify-center font-bold tracking-widest text-sm">VERIFY TRANSACTION</span>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Payment;
