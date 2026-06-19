import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: '🏆',
    title: '10+ Years of Local Expertise',
    desc: 'Deep-rooted knowledge of Pune\'s micro-markets, builder reputations, and upcoming infrastructure projects.',
  },
  {
    icon: '🤝',
    title: 'End-to-End Handholding',
    desc: 'From the first call to key handover, your dedicated advisor is available 7 days a week.',
  },
  {
    icon: '📋',
    title: 'RERA Compliant Transactions',
    desc: 'Every property we list is RERA-verified. We handle all legal documentation with complete transparency.',
  },
  {
    icon: '💰',
    title: 'Best Price Guarantee',
    desc: 'Our negotiation experts ensure you get the best deal. If you find a lower price, we\'ll match or beat it.',
  },
];

export default function WhyUs() {
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
              Our Promise
            </p>
            <h2
              className="gold-underline gold-underline-center"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700 }}
            >
              Why 500+ Families Chose Us
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{
                background: '#1A2235',
                border: '1px solid #2A3347',
                borderRadius: '10px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ borderColor: '#C9A84C', y: -4 }}
            >
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '18px',
              }}>
                {feat.icon}
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#F8F6F1', fontWeight: 600, marginBottom: '10px' }}>
                {feat.title}
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: 1.7 }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
