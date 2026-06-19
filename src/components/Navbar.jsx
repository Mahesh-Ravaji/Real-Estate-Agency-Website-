import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastY, setLastY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(10, 15, 30, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid #2A3347' : 'none',
          transition: 'background 0.4s ease, border 0.4s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none group">
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#C9A84C',
                  letterSpacing: '1px',
                  lineHeight: 1,
                }}
              >
                NestVault
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  fontWeight: 600,
                  color: '#9CA3AF',
                  letterSpacing: '4px',
                  lineHeight: 1,
                  marginTop: '3px',
                  textTransform: 'uppercase',
                }}
              >
                Realty
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: location.pathname === link.to ? '#C9A84C' : '#F8F6F1',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    letterSpacing: '0.3px',
                    position: 'relative',
                  }}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: '#C9A84C',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+912012345678"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#9CA3AF',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-white"
              >
                <Phone size={14} />
                +91 20 1234 5678
              </a>
              <Link to="/contact" className="btn-outline-gold" style={{ padding: '9px 20px', fontSize: '13px' }}>
                Schedule Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded"
              style={{ color: '#F8F6F1' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.7)' }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72"
              style={{ background: '#111827', borderLeft: '1px solid #2A3347' }}
            >
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: '#2A3347' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#C9A84C', fontWeight: 700 }}>
                  NestVault
                </span>
                <button onClick={() => setMobileOpen(false)} style={{ color: '#9CA3AF' }}>
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    style={{
                      padding: '12px 16px',
                      color: location.pathname === link.to ? '#C9A84C' : '#F8F6F1',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      borderRadius: '6px',
                      background: location.pathname === link.to ? 'rgba(201,168,76,0.08)' : 'transparent',
                      transition: 'all 0.2s',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="px-6 mt-4">
                <Link to="/contact" className="btn-gold w-full" style={{ width: '100%', justifyContent: 'center' }}>
                  Schedule Consultation
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded"
                  style={{
                    padding: '12px',
                    background: '#25D366',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '12px',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        style={{ background: '#111827', borderTop: '1px solid #2A3347' }}
      >
        <div className="grid grid-cols-2">
          <a
            href="tel:+912012345678"
            className="flex items-center justify-center gap-2 py-3"
            style={{ color: '#F8F6F1', textDecoration: 'none', fontSize: '14px', fontWeight: 600, borderRight: '1px solid #2A3347' }}
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3"
            style={{ color: '#25D366', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
