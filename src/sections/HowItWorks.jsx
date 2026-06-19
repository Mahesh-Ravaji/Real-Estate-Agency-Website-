import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../data.js';

export default function HowItWorks() {
  return (
    <section style={{ padding: '100px 0', background: '#0A0F1E', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              The Process
            </p>
            <h2
              className="gold-underline gold-underline-center"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700 }}
            >
              Your Journey to a New Home
            </h2>
          </motion.div>
        </div>

        {/* Desktop steps */}
        <div className="hidden lg:block">
          <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute',
              top: '27px',
              left: '60px',
              right: '60px',
              height: '2px',
              background: 'repeating-linear-gradient(90deg, #C9A84C 0, #C9A84C 8px, transparent 8px, transparent 16px)',
              opacity: 0.4,
            }} />

            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ flex: 1, textAlign: 'center', padding: '0 12px', position: 'relative' }}
              >
                {/* Circle */}
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 0 0 6px rgba(201,168,76,0.1)',
                  fontSize: '20px',
                }}>
                  {step.icon}
                </div>

                <div style={{
                  background: '#1A2235',
                  border: '1px solid #2A3347',
                  borderRadius: '8px',
                  padding: '18px 14px',
                  marginTop: '8px',
                }}>
                  <div style={{ color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Step {step.step}
                  </div>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', color: '#F8F6F1', fontWeight: 600, marginBottom: '8px' }}>
                    {step.title}
                  </h4>
                  <p style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile steps */}
        <div className="lg:hidden flex flex-col gap-4">
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                background: '#1A2235',
                border: '1px solid #2A3347',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '18px',
              }}>
                {step.icon}
              </div>
              <div>
                <div style={{ color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Step {step.step}
                </div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#F8F6F1', fontWeight: 600, marginBottom: '6px' }}>
                  {step.title}
                </h4>
                <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
