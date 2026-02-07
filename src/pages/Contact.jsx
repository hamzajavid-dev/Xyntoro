import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';

const API_URL = '/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        heardFrom: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const res = await fetch(`${API_URL}/messages`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({ firstName: '', lastName: '', email: '', phone: '', heardFrom: '', message: '' });
            } else {
                const data = await res.json();
                setError(data.message || 'Failed to send message');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-page" style={{ paddingTop: '80px' }}>
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <h1>Contact <span className="text-gradient">Us</span></h1>
                    <p>We'd love to hear from you. Get in touch with us today.</p>
                </div>
            </section>

            <div className="container contact-container-wrapper">
                <div className="contact-grid">
                    {/* Left Column - Contact Info & Meeting */}
                    <div className="contact-info-section">
                        {/* Reach Out */}
                        <div className="feature-card">
                            <h2>Reach Out to Us</h2>
                            <p>If you have any query, reach out to us via the following contact information.</p>

                            <ul className="contact-details">
                                <li>
                                    <MapPin size={24} className="icon" />
                                    <div>
                                        <strong>Address:</strong><br />
                                        <span style={{ color: 'var(--color-text-muted)' }}>Office # 3403, Third Floor<br />
                                        NSTP Building, Islamabad, Pakistan</span>
                                    </div>
                                </li>
                                <li>
                                    <Phone size={24} className="icon" />
                                    <div>
                                        <strong>Phone:</strong><br />
                                        <a href="tel:+923315457605" className="text-link">(+92) 331 545 7605</a>
                                    </div>
                                </li>
                                <li>
                                    <Mail size={24} className="icon" />
                                    <div>
                                        <strong>Email:</strong><br />
                                        <a href="mailto:customersupport@xyntoro.com" className="text-link">customersupport@xyntoro.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Schedule Meeting */}
                        <div className="feature-card meeting-card">
                            <div className="meeting-icon">
                                <Calendar size={32} />
                            </div>
                            <h2>Schedule a Meeting</h2>
                            <p>Please select your preferred time slot for a one-on-one meeting with our team.</p>
                            <a
                                href="https://cal.com/xyntoro-technologies-wjhrop/one-on-one-meeting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <Calendar size={18} /> Book a Meeting
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="contact-form-section">
                        <div className="form-card">
                            <h2>Drop Us a Line</h2>
                            <p>Do you need any software development service for your business? Drop us a message.</p>

                            {submitted ? (
                                <div className="success-message">
                                    <CheckCircle size={48} />
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>First Name *</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                placeholder="John"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+92 300 1234567"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>How Did You Hear About Us? *</label>
                                        <select name="heardFrom" value={formData.heardFrom} onChange={handleChange} required>
                                            <option value="">Select an option</option>
                                            <option value="google">Google Search</option>
                                            <option value="social_media">Social Media</option>
                                            <option value="referral">Referral</option>
                                            <option value="advertisement">Advertisement</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    {error && <div className="error-message">{error}</div>}

                                    <button type="submit" className="btn btn-primary btn-lg" disabled={submitting} style={{ width: '100%', justifyContent: 'center' }}>
                                        <Send size={18} /> {submitting ? 'Sending...' : 'Submit'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
