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
            <section className="section text-center" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <h1 className="hero-title">Contact <span className="text-gradient">Us</span></h1>
                    <p className="hero-subtitle">We'd love to hear from you. Get in touch with us today.</p>
                </div>
            </section>

            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
                    {/* Left Column - Contact Info & Meeting */}
                    <div className="contact-info-section" style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '2rem' }}>
                        {/* Reach Out */}
                        <div className="feature-card" style={{ flex: 1, marginBottom: 0 }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>Reach Out to Us</h2>
                            <p>If you have any query, reach out to us via the following contact information.</p>

                            <ul className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <MapPin size={24} className="icon" style={{ color: 'var(--color-primary)' }} />
                                    <div>
                                        <strong>Address:</strong><br />
                                        <span style={{ color: 'var(--color-text-muted)' }}>Office # 3403, Third Floor<br />
                                        NSTP Building, Islamabad, Pakistan</span>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <Phone size={24} className="icon" style={{ color: 'var(--color-primary)' }} />
                                    <div>
                                        <strong>Phone:</strong><br />
                                        <a href="tel:+923315457605" className="text-link">(+92) 331 545 7605</a>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <Mail size={24} className="icon" style={{ color: 'var(--color-primary)' }} />
                                    <div>
                                        <strong>Email:</strong><br />
                                        <a href="mailto:customersupport@xyntoro.com" className="text-link">customersupport@xyntoro.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Schedule Meeting */}
                        <div className="feature-card meeting-card" style={{ flex: 1 }}>
                            <div className="meeting-icon" style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
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

                                    <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                                        <Send size={18} /> {submitting ? 'Sending...' : 'Submit'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-page {
          padding-bottom: 4rem;
        }

        .contact-hero {
          background: linear-gradient(135deg, var(--color-navy), var(--color-primary));
          color: white;
          padding: 5rem 0;
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .contact-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }

        .info-card, .form-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          margin-bottom: 2rem;
        }

        .info-card h2, .form-card h2 {
          color: var(--color-navy);
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .info-card > p, .form-card > p {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-details li {
          display: flex;
          gap: 1rem;
        }

        .contact-details .icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .contact-details a {
          color: var(--color-primary);
        }

        .contact-details a:hover {
          text-decoration: underline;
        }

        .meeting-card {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          text-align: center;
        }

        .meeting-card h2 {
          color: white;
        }

        .meeting-card p {
          color: rgba(255,255,255,0.9);
        }

        .meeting-icon {
          width: 70px;
          height: 70px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .meeting-card .btn {
          background: white;
          color: var(--color-primary);
          margin-top: 1rem;
        }

        .meeting-card .btn:hover {
          background: var(--color-bg-light);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }

        .btn-primary {
          background: var(--color-primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--color-primary-dark);
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          text-align: center;
          padding: 3rem 1rem;
        }

        .success-message svg {
          color: #10b981;
          margin-bottom: 1rem;
        }

        .success-message h3 {
          color: var(--color-navy);
          margin-bottom: 0.5rem;
        }

        .success-message p {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .error-message {
          background: #fee2e2;
          color: #dc2626;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .contact-hero h1 {
            font-size: 2rem;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;
