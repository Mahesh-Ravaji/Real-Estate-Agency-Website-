import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Maximize2, Building2, Calendar } from 'lucide-react';

export default function PropertyCard({ property, delay = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="property-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={property.image}
          alt={property.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 60%)' }} />

        {/* Badge */}
        {property.badge && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            padding: '4px 10px',
            borderRadius: '3px',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            background: property.badge === 'NEW' ? '#C9A84C' : 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            color: '#0A0F1E',
          }}>
            {property.badge}
          </div>
        )}

        {/* Status */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          padding: '4px 10px',
          borderRadius: '3px',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.5px',
          background: property.status === 'Ready to Move' ? 'rgba(34,197,94,0.2)' : 'rgba(234,179,8,0.2)',
          color: property.status === 'Ready to Move' ? '#4ade80' : '#fbbf24',
          border: `1px solid ${property.status === 'Ready to Move' ? 'rgba(34,197,94,0.4)' : 'rgba(234,179,8,0.4)'}`,
        }}>
          {property.status}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 600, color: '#F8F6F1', lineHeight: 1.2 }}>
              {property.name}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: '#9CA3AF', fontSize: '13px' }}>
              <MapPin size={12} style={{ color: '#C9A84C' }} />
              {property.locality}, Pune
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#C9A84C' }}>
              {property.price}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', margin: '14px 0', padding: '10px 0', borderTop: '1px solid #2A3347', borderBottom: '1px solid #2A3347' }}>
          {property.bhk !== 'Plot' && property.bhk !== 'Commercial' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#9CA3AF', fontSize: '12px' }}>
              <Building2 size={12} style={{ color: '#C9A84C' }} />
              {property.bhk}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#9CA3AF', fontSize: '12px' }}>
            <Maximize2 size={12} style={{ color: '#C9A84C' }} />
            {property.area.toLocaleString()} sqft
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#9CA3AF', fontSize: '12px' }}>
            <Calendar size={12} style={{ color: '#C9A84C' }} />
            {property.floor}
          </div>
        </div>

        <Link
          to="/contact"
          className="btn-gold"
          style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '13px' }}
        >
          Schedule Visit
        </Link>
      </div>
    </motion.div>
  );
}
