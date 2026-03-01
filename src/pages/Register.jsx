import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, School, BookOpen, Layers, CheckCircle, Send } from 'lucide-react';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        college: '',
        department: '',
        year: '1',
        event: 'Code Conquest'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const regId = 'SYM' + Math.random().toString(36).substr(2, 6).toUpperCase();

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, regId }),
            });

            if (response.ok) {
                localStorage.setItem('recentRegistration', JSON.stringify({ ...formData, regId }));
                navigate('/payment');
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error("Error creating registration: ", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="register-page container py-lg">
            <div className="register-container glass-card">
                <div className="register-header">
                    <h2>Registration Form</h2>
                    <p>Fill in your details to secure your spot at Symposium 2026.</p>
                </div>

                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label><User size={16} /> Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>
                        <div className="form-group">
                            <label><Mail size={16} /> Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="form-group">
                            <label><School size={16} /> College Name</label>
                            <input
                                type="text"
                                name="college"
                                required
                                placeholder="Tech University"
                                onChange={handleChange}
                                value={formData.college}
                            />
                        </div>
                        <div className="form-group">
                            <label><BookOpen size={16} /> Department</label>
                            <input
                                type="text"
                                name="department"
                                required
                                placeholder="Computer Science"
                                onChange={handleChange}
                                value={formData.department}
                            />
                        </div>
                        <div className="form-group">
                            <label><Layers size={16} /> Year of Study</label>
                            <select name="year" onChange={handleChange} value={formData.year}>
                                <option value="1">1st Year</option>
                                <option value="2">2nd Year</option>
                                <option value="3">3rd Year</option>
                                <option value="4">4th Year</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><CheckCircle size={16} /> Select Event</label>
                            <select name="event" onChange={handleChange} value={formData.event}>
                                <option value="Code Conquest">Code Conquest</option>
                                <option value="Paper Presentation">Paper Presentation</option>
                                <option value="Robo Soccer">Robo Soccer</option>
                                <option value="Gaming Central">Gaming Central</option>
                                <option value="Photography">Photography</option>
                                <option value="Treasure Hunt">Treasure Hunt</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                        Proceed to Payment <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
