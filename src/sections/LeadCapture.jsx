import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function LeadCapture() {
  const [form, setForm] = useState({ name: '', phone: '', budget: '', looking: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{
      padding: '90px 0',
      background: 'linear-gradient(135deg, #111827 0%, #1A2235 50%, #111827 100%)',
      borderTop: '1px solid #2A3347',
      borderBottom: '1px solid #2A3347',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        right: '-80px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Free Consultation
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700, marginBottom: '16px', lineHeight: 1.2 }}>
              Ready to Find Your Dream Home?
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
              Book a free 30-minute consultation with our property experts today. No obligations, just honest advice.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                '✓  500+ families guided to their perfect home',
                '✓  RERA-verified properties only',
                '✓  Zero hidden charges, full transparency',
              ].map((point) => (
                <p key={point} style={{ color: '#D1D5DB', fontSize: '14px' }}>{point}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: '#0A0F1E',
              border: '1px solid #2A3347',
              borderRadius: '12px',
              padding: '36px',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#C9A84C', marginBottom: '10px' }}>
                  Thank You!
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '14px' }}>
                  Our team will contact you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#1A2235',
                      border: '1px solid #2A3347',
                      borderRadius: '6px',
                      color: '#F8F6F1',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = '#2A3347'}
                  />
                </div>
                <div>
                  <label style={{ color: '#9CA3AF', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '6px', letterSpacing: '0.5px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#1A2235',
                      border: '1px solid #2A3347',
                      borderRadius: '6px',
                      color: '#F8F6F1',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = '#2A3347'}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={{ color: '#9CA3AF', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                      Budget Range
                    </label>
                    <select
                      value={form.budget}
                      onChange={e => setForm({ ...form, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#1A2235',
                        border: '1px solid #2A3347',
                        borderRadius: '6px',
                        color: form.budget ? '#F8F6F1' : '#6B7280',
                        fontSize: '13px',
                        fontFamily: 'Inter, sans-serif',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Select</option>
                      <option>Under ₹50L</option>
                      <option>₹50L – ₹1Cr</option>
                      <option>₹1Cr – ₹2Cr</option>
                      <option>₹2Cr – ₹5Cr</option>
                      <option>₹5Cr+</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ color: '#9CA3AF', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                      Looking For
                    </label>
                    <select
                      value={form.looking}
                      onChange={e => setForm({ ...form, looking: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: '#1A2235',
                        border: '1px solid #2A3347',
                        borderRadius: '6px',
                        color: form.looking ? '#F8F6F1' : '#6B7280',
                        fontSize: '13px',
                        fontFamily: 'Inter, sans-serif',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Select</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Commercial</option>
                      <option>Plot</option>
                      <option>Rental</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                  Get Free Consultation
                </button>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '-6px' }}>
                  <Shield size={12} style={{ color: '#6B7280' }} />
                  <p style={{ color: '#6B7280', fontSize: '11px', textAlign: 'center' }}>
                    100% Private. We never spam or sell your information.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
