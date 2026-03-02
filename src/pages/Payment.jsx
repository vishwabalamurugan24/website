import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Info, QrCode, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const Payment = () => {
    const navigate = useNavigate();
    const [regData, setRegData] = useState(null);
    const [transactionId, setTransactionId] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('recentRegistration');
        if (data) {
            setRegData(JSON.parse(data));
        } else {
            navigate('/register');
        }
    }, [navigate]);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3000/update-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    regId: regData?.regId,
                    paymentId: transactionId 
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert('Payment update failed. Please try again.');
            }
        } catch (error) {
            console.error("Error updating payment: ", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="payment-page container py-lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="success-container glass-card text-center"
                >
                    <CheckCircle className="success-icon" />
                    <h2>Registration Successful!</h2>
                    <p>Your unique ID: <strong>{regData?.regId}</strong></p>
                    <p className="success-note">We will verify your payment and send a confirmation email within 24 hours.</p>
                    <Link to="/" className="btn btn-primary">Return Home</Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="payment-page container py-lg">
            <div className="payment-container glass-card">
                <div className="payment-header">
                    <Link to="/register" className="back-link"><ArrowLeft size={16} /> Back</Link>
                    <h2>Complete Your Payment</h2>
                    <p>Registration Fee: <strong>₹200</strong></p>
                </div>

                <div className="payment-content">
                    <div className="payment-info">
                        <div className="qr-section">
                            <div className="qr-placeholder">
                                <QrCode size={120} strokeWidth={1} />
                                <p>Scan to Pay via UPI</p>
                            </div>
                            <div className="upi-details">
                                <p>UPI ID: <strong>symposium2026@axisbank</strong></p>
                                <p>Payable Amount: <strong>₹200.00</strong></p>
                            </div>
                        </div>

                        <div className="payment-alert glass-card">
                            <Info size={18} />
                            <p>Please take a screenshot after payment for verification.</p>
                        </div>
                    </div>

                    <form onSubmit={handlePaymentSubmit} className="payment-form">
                        <div className="form-group">
                            <label>Transaction ID / UTR</label>
                            <input
                                type="text"
                                required
                                placeholder="12-digit UPI Transaction ID"
                                value={transactionId}
                                onChange={(e) => setTransactionId(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit Payment Details'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;
