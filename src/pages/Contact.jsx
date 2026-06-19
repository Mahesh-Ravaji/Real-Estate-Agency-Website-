import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', looking: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us — NestVault Realty';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    background: '#1A2235',
    border: '1px solid #2A3347',
    borderRadius: '6px',
    color: '#F8F6F1',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    color: '#9CA3AF',
    fontSize: '12px',
    fontWeight: 600,
    display: 'block',
    marginBottom: '7px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  };

  return (
    <div style={{ background: '#0A0F1E', paddingTop: '80px', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ padding: '70px 0 60px', background: '#080D1A', borderBottom: '1px solid #2A3347' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Get in Touch
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 56px)', color: '#F8F6F1', fontWeight: 700, marginBottom: '14px' }}>
              Let's Find Your{' '}
              <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Perfect Property</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={16} style={{ color: '#22c55e' }} />
              <p style={{ color: '#9CA3AF', fontSize: '15px' }}>
                We respond within 2 hours during working hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section style={{ padding: '70px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ background: '#1A2235', border: '1px solid #2A3347', borderRadius: '12px', padding: '40px' }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle size={32} style={{ color: '#22c55e' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#F8F6F1', marginBottom: '12px' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.7 }}>
                    Thank you for reaching out. Our team will contact you within 2 hours with personalized recommendations.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', looking: '', budget: '', message: '' }); }}
                    className="btn-outline-gold"
                    style={{ marginTop: '24px' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#F8F6F1', marginBottom: '28px' }}>
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Rahul Sharma"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#C9A84C'}
                          onBlur={e => e.target.style.borderColor = '#2A3347'}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address</label>
                        <input
                          type="email"
                          placeholder="rahul@email.com"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#C9A84C'}
                          onBlur={e => e.target.style.borderColor = '#2A3347'}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#C9A84C'}
                        onBlur={e => e.target.style.borderColor = '#2A3347'}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label style={labelStyle}>Looking For</label>
                        <select
                          value={form.looking}
                          onChange={e => setForm({ ...form, looking: e.target.value })}
                          style={{ ...inputStyle, cursor: 'pointer', color: form.looking ? '#F8F6F1' : '#6B7280' }}
                        >
                          <option value="">Select</option>
                          <option>Apartment to Buy</option>
                          <option>Villa to Buy</option>
                          <option>Commercial Space</option>
                          <option>Plot / Land</option>
                          <option>Rental Property</option>
                          <option>Investment Advice</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Budget Range</label>
                        <select
                          value={form.budget}
                          onChange={e => setForm({ ...form, budget: e.target.value })}
                          style={{ ...inputStyle, cursor: 'pointer', color: form.budget ? '#F8F6F1' : '#6B7280' }}
                        >
                          <option value="">Select</option>
                          <option>Under ₹50 Lakh</option>
                          <option>₹50L – ₹1 Crore</option>
                          <option>₹1Cr – ₹2 Crore</option>
                          <option>₹2Cr – ₹5 Crore</option>
                          <option>₹5 Crore+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Your Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you're looking for — property type, preferred locality, timeline, any specific requirements..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={e => e.target.style.borderColor = '#C9A84C'}
                        onBlur={e => e.target.style.borderColor = '#2A3347'}
                      />
                    </div>
                    <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '14px' }}>
                      Send Message & Get Expert Advice
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {/* Details card */}
              <div style={{ background: '#1A2235', border: '1px solid #2A3347', borderRadius: '12px', padding: '36px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#F8F6F1', marginBottom: '28px' }}>
                  Contact Details
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={18} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Office Address</p>
                      <p style={{ color: '#F8F6F1', fontSize: '14px', lineHeight: 1.6 }}>302, Baner Road, Near Balewadi High Street,<br />Pune, Maharashtra – 411045</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={18} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Phone</p>
                      <a href="tel:+912012345678" style={{ color: '#F8F6F1', fontSize: '15px', textDecoration: 'none', fontWeight: 600 }} className="hover:text-yellow-400">
                        +91 20 1234 5678
                      </a>
                      <br />
                      <a href="tel:+919876543210" style={{ color: '#9CA3AF', fontSize: '13px', textDecoration: 'none' }}>+91 98765 43210 (Mobile)</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={18} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Email</p>
                      <a href="mailto:hello@nestvaultrealty.in" style={{ color: '#F8F6F1', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }} className="hover:text-yellow-400">
                        hello@nestvaultrealty.in
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MessageCircle size={18} style={{ color: '#25D366' }} />
                    </div>
                    <div>
                      <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>WhatsApp</p>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ color: '#F8F6F1', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }} className="hover:text-green-400">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock size={18} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Working Hours</p>
                      <p style={{ color: '#F8F6F1', fontSize: '13px', lineHeight: 1.6 }}>
                        Mon – Sat: 9:00 AM – 7:00 PM<br />
                        Sunday: 10:00 AM – 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #2A3347' }}>
                <iframe
                  title="NestVault Realty Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60525.21765088694!2d73.78953395!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block', filter: 'invert(92%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
