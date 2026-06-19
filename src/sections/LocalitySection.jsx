import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LOCALITIES } from '../data.js';

export default function LocalitySection() {
  return (
    <section style={{ padding: '100px 0', background: '#080D1A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Hyperlocal Expertise
            </p>
            <h2
              className="gold-underline gold-underline-center"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700 }}
            >
              We Know Pune Like No One Else
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {LOCALITIES.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer' }}
              className="group"
            >
              <div style={{ aspectRatio: '4/3', position: 'relative' }}>
                <img
                  src={loc.image}
                  alt={loc.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="group-hover:scale-105"
                />
                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, rgba(10,15,30,0.4) 50%, transparent 100%)',
                  transition: 'opacity 0.3s',
                }} />

                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#F8F6F1', fontWeight: 700, marginBottom: '4px' }}>
                    {loc.name}
                  </h3>
                  <p style={{ color: '#9CA3AF', fontSize: '12px', marginBottom: '10px' }}>
                    {loc.avgPrice}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600 }}>
                      {loc.listings} Listings
                    </span>
                    <Link
                      to={`/properties?locality=${loc.name}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: '#C9A84C',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                      }}
                      className="group-hover:opacity-100"
                    >
                      Explore
                      <ArrowRight size={12} />
                    </Link>
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
