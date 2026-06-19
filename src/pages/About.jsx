import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import { TEAM, STATS } from '../data.js';
import LeadCapture from '../sections/LeadCapture.jsx';

const TIMELINE = [
  { year: '2014', title: 'NestVault Founded', desc: 'Arjun Nair founded NestVault with just 3 team members and a vision to redefine real estate in Pune.' },
  { year: '2016', title: '100th Family Milestone', desc: 'We crossed the milestone of 100 families settled, becoming a trusted name in the Baner-Wakad corridor.' },
  { year: '2018', title: 'Commercial Division Launched', desc: 'Expanded into commercial real estate, serving IT startups, clinics, and retail businesses.' },
  { year: '2020', title: 'Digital-First Transformation', desc: 'Launched virtual tours and digital documentation, becoming Pune\'s first fully digital realty advisor.' },
  { year: '2022', title: '500+ Families Settled', desc: 'A landmark year — we crossed 500 families and ₹100Cr in total transaction value.' },
  { year: '2025', title: '₹200Cr+ & Expanding', desc: 'Now a 20-person team with 6 locality experts, 200+ Google reviews at 4.9★, and growing.' },
];

const AWARDS = [
  { icon: '🏆', title: 'Best Realty Advisor 2023', org: 'Pune Real Estate Forum' },
  { icon: '⭐', title: '4.9★ Google Rating', org: '200+ Verified Reviews' },
  { icon: '🤝', title: 'Authorized Channel Partner', org: 'Godrej, Lodha, Kolte-Patil' },
  { icon: '📜', title: 'RERA Compliant Since 2017', org: 'MAHARERA/A51700012345' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us — NestVault Realty';
  }, []);

  return (
    <div style={{ background: '#0A0F1E', paddingTop: '80px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 0 80px',
          background: '#080D1A',
          borderBottom: '1px solid #2A3347',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '700px' }}
          >
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Our Story
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 60px)', color: '#F8F6F1', fontWeight: 700, lineHeight: 1.15, marginBottom: '20px' }}>
              10 Years of Turning Addresses Into{' '}
              <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Homes</span>
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '17px', lineHeight: 1.8 }}>
              NestVault Realty was founded on a simple belief: that every family deserves a home that fits their life — not just their budget. Since 2014, we've helped 500+ Pune families make the most important investment of their lives with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid #2A3347', background: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  padding: '16px',
                  borderRight: i < STATS.length - 1 ? '1px solid #2A3347' : 'none',
                }}
              >
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: '#C9A84C', fontWeight: 700, marginBottom: '6px' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#9CA3AF', fontSize: '13px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '4/5',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Arjun Nair - Founder"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px',
                  background: 'linear-gradient(to top, rgba(10,15,30,0.95), transparent)',
                }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#F8F6F1', fontWeight: 600 }}>Arjun Nair</div>
                  <div style={{ color: '#C9A84C', fontSize: '13px' }}>Founder & Managing Director</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
                Founder's Note
              </p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3vw, 38px)', color: '#F8F6F1', fontWeight: 700, marginBottom: '20px', lineHeight: 1.3 }}>
                "I Started NestVault Because I Had the Wrong Broker."
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'When I was searching for my first apartment in Pune in 2012, I was misled by a broker who showed me properties that didn\'t exist and pushed me toward an overpriced flat. It cost me ₹4 lakh and 6 months of my life.',
                  'That experience became my mission. I wanted to build a real estate company that people could actually trust — one where every advisor is incentivized to find the right property for the client, not just the fastest commission.',
                  'Today, 500+ families later, our promise is still the same: we tell you the truth about every property, we negotiate hard on your behalf, and we stay with you until you\'re settled in your new home.',
                ].map((para, i) => (
                  <p key={i} style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.8 }}>{para}</p>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '8px', paddingTop: '20px', borderTop: '1px solid #2A3347' }}>
                  <img
                    src="https://i.pravatar.cc/60?img=12"
                    alt="Arjun Nair"
                    style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2px solid #C9A84C', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ color: '#F8F6F1', fontWeight: 600, fontFamily: 'Playfair Display, serif', fontSize: '16px' }}>Arjun Nair</div>
                    <div style={{ color: '#C9A84C', fontSize: '12px' }}>Founder, NestVault Realty</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 0', background: '#080D1A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Our Journey
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700 }}>
              A Decade of Trust
            </h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'repeating-linear-gradient(180deg, #C9A84C 0, #C9A84C 8px, transparent 8px, transparent 16px)',
              transform: 'translateX(-50%)',
              opacity: 0.3,
            }} className="hidden md:block" />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  marginBottom: '32px',
                  flexDirection: i % 2 === 0 ? 'row' : 'row',
                }}
              >
                <div style={{
                  minWidth: '80px',
                  padding: '6px 12px',
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  borderRadius: '4px',
                  color: '#0A0F1E',
                  fontSize: '14px',
                  fontWeight: 700,
                  textAlign: 'center',
                  flexShrink: 0,
                }}>
                  {item.year}
                </div>
                <div style={{
                  background: '#1A2235',
                  border: '1px solid #2A3347',
                  borderRadius: '8px',
                  padding: '18px 20px',
                  flex: 1,
                }}>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', color: '#F8F6F1', fontWeight: 600, marginBottom: '6px' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              The People Behind NestVault
            </p>
            <h2 className="gold-underline gold-underline-center" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700 }}>
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#1A2235',
                  border: '1px solid #2A3347',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                whileHover={{ borderColor: '#C9A84C', y: -4 }}
              >
                <div style={{ padding: '28px 20px 20px' }}>
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '50%',
                        border: '3px solid #C9A84C',
                        objectFit: 'cover',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '3px',
                      right: '3px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: '#22c55e',
                      border: '2px solid #1A2235',
                    }} />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', color: '#F8F6F1', fontWeight: 600, marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                    {member.role}
                  </p>
                  <p style={{ color: '#6B7280', fontSize: '11px', marginBottom: '14px' }}>
                    {member.experience} Experience
                  </p>
                  <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.6, borderTop: '1px solid #2A3347', paddingTop: '14px' }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: '70px 0', background: '#080D1A', borderTop: '1px solid #2A3347' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3vw, 36px)', color: '#F8F6F1', fontWeight: 700 }}>
              Awards & Recognition
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AWARDS.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#1A2235',
                  border: '1px solid #2A3347',
                  borderRadius: '10px',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{award.icon}</div>
                <h4 style={{ color: '#F8F6F1', fontSize: '14px', fontWeight: 600, marginBottom: '6px', fontFamily: 'Playfair Display, serif' }}>
                  {award.title}
                </h4>
                <p style={{ color: '#9CA3AF', fontSize: '12px' }}>{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LeadCapture />
    </div>
  );
}
