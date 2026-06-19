import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data.js';

function CountUp({ to, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const match = to.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  const prefix = match ? match[1] : '';
  const numericPart = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : to;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericPart / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericPart, duration]);

  const display = numericPart % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section style={{ background: '#080D1A', borderBottom: '1px solid #2A3347', borderTop: '1px solid #2A3347' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '16px 24px',
                borderRight: i < STATS.length - 1 ? '1px solid #2A3347' : 'none',
              }}
              className={i % 2 === 0 ? 'border-r border-[#2A3347] lg:border-r' : ''}
            >
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#C9A84C',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                <CountUp to={stat.value} />
              </div>
              <div style={{ color: '#9CA3AF', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
