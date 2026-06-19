import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
          alt="Luxury property"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.72) 60%, rgba(10,15,30,0.5) 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '780px' }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '2px',
              marginBottom: '24px',
              background: 'rgba(201,168,76,0.06)',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }} />
            <span style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Pune's Most Trusted Realty
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              color: '#F8F6F1',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-0.5px',
            }}
          >
            Find Your Perfect Home{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Before</span>{' '}
            Someone Else Does
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ color: '#D1D5DB', fontSize: 'clamp(15px, 1.8vw, 18px)', marginBottom: '40px', lineHeight: 1.7 }}
          >
            10+ Years | 500+ Families Settled | ₹200Cr+ in Transactions | Pune's Most Trusted Realty
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link to="/properties" className="btn-gold" style={{ fontSize: '15px', padding: '15px 36px' }}>
              Browse Properties
            </Link>
            <Link to="/contact" className="btn-outline-gold" style={{ fontSize: '15px', padding: '15px 36px' }}>
              Talk to an Expert
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span style={{ color: '#9CA3AF', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} style={{ color: '#C9A84C' }} />
      </motion.div>
    </section>
  );
}
