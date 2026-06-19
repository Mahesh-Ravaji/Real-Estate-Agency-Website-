import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const SocialIcons = {
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Youtube: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer style={{ background: '#080D1A', borderTop: '1px solid #2A3347' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#C9A84C', fontWeight: 700 }}>
                NestVault
              </div>
              <div style={{ fontSize: '9px', color: '#9CA3AF', letterSpacing: '4px', fontWeight: 600, textTransform: 'uppercase', marginTop: '2px' }}>
                Realty
              </div>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic', fontFamily: 'Playfair Display, serif', marginBottom: '16px' }}>
              "Where Every Address Tells a Story."
            </p>
            <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.7', marginBottom: '16px' }}>
              Pune's most trusted real estate partner since 2014. Helping families find homes and investors find opportunities.
            </p>
            <div style={{ padding: '10px 14px', background: '#1A2235', borderRadius: '6px', border: '1px solid #2A3347', display: 'inline-block' }}>
              <p style={{ color: '#9CA3AF', fontSize: '10px', letterSpacing: '1px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '3px' }}>RERA Registration</p>
              <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, fontFamily: 'monospace' }}>MAHARERA/A51700012345</p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: <SocialIcons.Instagram />, href: '#' },
                { icon: <SocialIcons.Youtube />, href: '#' },
                { icon: <SocialIcons.Facebook />, href: '#' },
                { icon: <SocialIcons.LinkedIn />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#1A2235',
                    border: '1px solid #2A3347',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  className="hover:border-yellow-500 hover:text-yellow-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#F8F6F1', fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Browse Properties', to: '/properties' },
                { label: 'About NestVault', to: '/about' },
                { label: 'Contact Us', to: '/contact' },
                { label: 'EMI Calculator', to: '/#emi' },
                { label: 'Blog & Insights', to: '/blog' },
                { label: 'Schedule Consultation', to: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                    className="hover:text-yellow-400"
                  >
                    <span style={{ color: '#C9A84C', fontSize: '10px' }}>→</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Localities */}
          <div>
            <h4 style={{ color: '#F8F6F1', fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>
              Top Localities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Baner', 'Hinjewadi', 'Wakad', 'Kharadi', 'Undri', 'Viman Nagar'].map((loc) => (
                <li key={loc}>
                  <Link
                    to={`/properties?locality=${loc}`}
                    style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                    className="hover:text-yellow-400"
                  >
                    <span style={{ color: '#C9A84C', fontSize: '10px' }}>→</span>
                    Properties in {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#F8F6F1', fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>
              Contact Info
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li className="flex gap-3">
                <MapPin size={16} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.6' }}>
                  302, Baner Road, Near Balewadi High Street, Pune, Maharashtra – 411045
                </span>
              </li>
              <li>
                <a href="tel:+912012345678" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }} className="hover:text-yellow-400">
                  <Phone size={15} style={{ color: '#C9A84C', flexShrink: 0 }} />
                  +91 20 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:hello@nestvaultrealty.in" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }} className="hover:text-yellow-400">
                  <Mail size={15} style={{ color: '#C9A84C', flexShrink: 0 }} />
                  hello@nestvaultrealty.in
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }} className="hover:text-yellow-400">
                  <MessageCircle size={15} style={{ color: '#25D366', flexShrink: 0 }} />
                  WhatsApp: +91 98765 43210
                </a>
              </li>
              <li style={{ color: '#9CA3AF', fontSize: '14px' }}>
                <span style={{ color: '#C9A84C', fontWeight: 600 }}>Hours:</span><br />
                Mon–Sat: 9:00 AM – 7:00 PM<br />
                Sunday: 10:00 AM – 4:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2A3347', paddingTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
          <p style={{ color: '#6B7280', fontSize: '13px' }}>
            © 2025 NestVault Realty. All Rights Reserved. | MAHARERA/A51700012345
          </p>
          <p style={{ color: '#4B5563', fontSize: '12px' }}>
            Designed with ❤️ in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
