import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data.js';

export default function BlogPreview() {
  return (
    <section style={{ padding: '100px 0', background: '#0A0F1E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '50px', flexWrap: 'wrap', gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Market Insights
            </p>
            <h2
              className="gold-underline"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700 }}
            >
              From Our Blog
            </h2>
          </motion.div>
          <Link
            to="/blog"
            style={{ color: '#C9A84C', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
            className="hover:underline"
          >
            View All Posts <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{
                background: '#1A2235',
                border: '1px solid #2A3347',
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ y: -6, borderColor: '#C9A84C' }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  className="hover:scale-105"
                />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{
                    padding: '3px 10px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    borderRadius: '3px',
                    color: '#C9A84C',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#6B7280', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#F8F6F1', fontWeight: 600, marginBottom: '10px', lineHeight: 1.3 }}>
                  {post.title}
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.7, marginBottom: '16px' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #2A3347', paddingTop: '14px' }}>
                  <span style={{ color: '#6B7280', fontSize: '12px' }}>{post.date}</span>
                  <span style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
