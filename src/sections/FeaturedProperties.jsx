import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard.jsx';
import { PROPERTIES } from '../data.js';

const FILTERS = ['All', 'Apartment', 'Villa', 'Commercial', 'Plots'];

export default function FeaturedProperties() {
  const [active, setActive] = useState('All');
  const featured = PROPERTIES.slice(0, 6);
  const filtered = active === 'All' ? featured : featured.filter(p => p.type === active);

  return (
    <section style={{ padding: '100px 0', background: '#0A0F1E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div style={{ marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Curated Selection
            </p>
            <h2
              className="gold-underline"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700, marginBottom: '24px' }}
            >
              Handpicked Properties
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: active === f ? '1px solid #C9A84C' : '1px solid #2A3347',
                  background: active === f ? 'rgba(201,168,76,0.12)' : '#1A2235',
                  color: active === f ? '#C9A84C' : '#9CA3AF',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prop, i) => (
            <PropertyCard key={prop.id} property={prop} delay={i * 0.1} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#9CA3AF' }}>
            No properties in this category yet. Check back soon!
          </div>
        )}

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <Link
            to="/properties"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#C9A84C',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              borderBottom: '1px solid rgba(201,168,76,0.3)',
              paddingBottom: '3px',
              transition: 'all 0.2s',
            }}
            className="hover:border-yellow-400"
          >
            View All Properties
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
