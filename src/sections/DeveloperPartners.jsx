import { motion } from 'framer-motion';
import { PARTNERS } from '../data.js';

export default function DeveloperPartners() {
  return (
    <section style={{ padding: '70px 0', background: '#0A0F1E', borderTop: '1px solid #2A3347', borderBottom: '1px solid #2A3347' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>
            Authorized Channel Partners
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ borderColor: '#C9A84C' }}
              style={{
                background: '#1A2235',
                border: '1px solid #2A3347',
                borderRadius: '8px',
                padding: '18px 12px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <p style={{ color: '#9CA3AF', fontSize: '12px', fontWeight: 600, lineHeight: 1.3 }}>
                {partner}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
