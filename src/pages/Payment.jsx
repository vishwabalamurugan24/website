import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    const handleComplete = () => {
        if (!file) {
            alert('Security Requirement: Please upload your payment screenshot before proceeding.');
            return;
        }
        alert('Transaction Successful! Your Digital Pass is being generated and will be emailed shortly.');
        navigate('/');
    };

    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = qrImage;
        link.download = 'TechVista2026_QR.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-10 md:py-16">
            <div className="mb-12 max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">Step 3: Payment</span>
                    <span className="text-slate-400 text-xs font-medium">Progress: 100%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-full"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10"></div>

                        <h2 className="text-2xl font-bold mb-2 text-white">Complete Your Payment</h2>
                        <p className="text-slate-400 mb-8">Scan the QR code below using any UPI app to settle the registration fee.</p>

                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="p-4 bg-white rounded-xl shadow-[0_0_25px_rgba(29,185,84,0.2)]">
                                <img alt="UPI Payment QR Code" className="w-48 h-48 object-contain" src={qrImage} />
                            </div>

                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <div className="space-y-1">
                                    <p className="text-slate-400 text-sm uppercase tracking-tighter">Total Amount Due</p>
                                    <p className="text-4xl font-bold text-primary">₹2,999</p>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <span className="material-symbols-outlined text-primary">verified_user</span>
                                        <span className="text-sm">Secure Merchant: TechVista Events</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <span className="material-symbols-outlined text-primary">schedule</span>
                                        <span className="text-sm">QR expires in 14:59 minutes</span>
                                    </div>
                                </div>

                                <button onClick={handleDownloadClick} className="three-d-button mt-4 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center md:justify-start gap-2 w-full md:w-auto">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    Download QR
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl p-8 border border-white/5">
                        <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">upload_file</span>
                            Upload Payment Screenshot
                        </h3>

                        <label className="border-2 border-dashed border-white/10 rounded-xl p-10 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group relative">
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept="image/*,.pdf"
                                onChange={handleFileChange}
                            />
                            <span className="material-symbols-outlined text-4xl text-slate-500 mb-3 group-hover:text-primary transition-colors">cloud_upload</span>
                            <p className="text-slate-300 font-medium mb-1">
                                {file ? `Selected file: ${file.name}` : 'Click to upload or drag & drop'}
                            </p>
                            <p className="text-slate-500 text-xs text-center border-t border-white/5 pt-2 mt-2 w-full max-w-xs mx-auto">
                                PNG, JPG or PDF (Max 5MB)
                            </p>
                            <span className="three-d-button mt-6 bg-primary text-black px-8 py-3 rounded-lg font-bold text-sm inline-block">
                                Select File
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="glass-card rounded-2xl p-6 border border-white/5">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Registration Summary</h3>
                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                <div className="w-full h-32 rounded-lg bg-cover bg-center mb-3" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQedqiUxeMOM0coNkgmA5FFHNGgKDSfrqwoXbn7OYSsZBTXMYW6Vvh5qrWk3GOyR1xKztzdMKZMZ5GZxPV0Ili9H--HswT7kVcLnpLOE9vPV3iL-3V2tgOpTzmUA6GXUp2VkenStOOl2JajzpT17FdmvOkvBTVi3MMy3eZSdhPvuaJgEvO_N0vwZGlw8ARKRQH03crDdpkq2nv5eBvEVwLUzCjX0hsAHu8B9lpH07GG83i5VFycmyc3eBhMehauXu5wTcFIVkWJyAG')" }}></div>
                                <p className="text-primary text-xs font-bold mb-1">KEYNOTE EVENT</p>
                                <h4 className="font-bold text-white mb-1">The Future of AI: 2026 &amp; Beyond</h4>
                                <p className="text-slate-400 text-xs flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">location_on</span>
                                    Main Hall • Oct 12, 2026
                                </p>
                            </div>

                            <div className="space-y-3 px-2 pt-2 text-white">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Standard Pass</span>
                                    <span>₹2,499</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Workshop Add-on</span>
                                    <span>₹500</span>
                                </div>
                                <div className="border-t border-white/10 pt-3 flex justify-between font-bold">
                                    <span>Total</span>
                                    <span className="text-primary">₹2,999</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleComplete} className="w-full glow-pink bg-accent text-white py-4 rounded-xl font-bold text-lg tracking-tight transition-all active:scale-95 flex items-center justify-center gap-2">
                        Complete Registration
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>

                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <span className="material-symbols-outlined text-primary shrink-0">info</span>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Your registration will be confirmed within 2 hours of verifying the payment screenshot. You'll receive a confirmation email with your digital pass.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Payment;
