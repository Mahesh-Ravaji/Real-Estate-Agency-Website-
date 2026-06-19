import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data.js';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((idx + 1) % TESTIMONIALS.length);

  return (
    <section style={{ padding: '100px 0', background: '#0A0F1E', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Client Stories
            </p>
            <h2
              className="gold-underline gold-underline-center"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700, marginBottom: '40px' }}
            >
              Words From Our Families
            </h2>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '4px',
            }}>
              <Star size={14} fill="#C9A84C" color="#C9A84C" />
              <span style={{ color: '#F8F6F1', fontSize: '14px', fontWeight: 600 }}>4.9/5</span>
              <span style={{ color: '#9CA3AF', fontSize: '13px' }}>from 200+ Google Reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{
                background: '#1A2235',
                border: '1px solid #2A3347',
                borderRadius: '10px',
                padding: '32px',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                fontFamily: 'Playfair Display, serif',
                fontSize: '80px',
                color: 'rgba(201,168,76,0.1)',
                lineHeight: 1,
                pointerEvents: 'none',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#C9A84C" color="#C9A84C" />
                ))}
              </div>

              <p style={{ color: '#D1D5DB', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>
                "{t.review}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #2A3347', paddingTop: '20px' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #C9A84C', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', color: '#F8F6F1', fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div style={{ color: '#C9A84C', fontSize: '12px', marginTop: '2px' }}>
                    {t.property}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
