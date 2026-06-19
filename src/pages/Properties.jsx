import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import PropertyCard from '../components/PropertyCard.jsx';
import { PROPERTIES } from '../data.js';

const LOCALITIES = ['Baner', 'Hinjewadi', 'Wakad', 'Kharadi', 'Undri', 'Viman Nagar'];
const TYPES = ['Apartment', 'Villa', 'Commercial', 'Plots'];
const BHK_OPTIONS = ['1 BHK', '2 BHK', '3 BHK', '4 BHK'];
const STATUSES = ['Ready to Move', 'Under Construction'];
const BUDGET_RANGES = [
  { label: 'Under ₹50L', min: 0, max: 5000000 },
  { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
  { label: '₹1Cr – ₹2Cr', min: 10000000, max: 20000000 },
  { label: '₹2Cr – ₹5Cr', min: 20000000, max: 50000000 },
  { label: '₹5Cr+', min: 50000000, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
];

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ borderBottom: '1px solid #2A3347', paddingBottom: '16px', marginBottom: '16px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#F8F6F1',
          fontSize: '13px',
          fontWeight: 600,
          padding: '0 0 12px',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}
      >
        {title}
        <ChevronDown size={14} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: '#9CA3AF' }} />
      </button>
      {open && children}
    </div>
  );
}

function CheckboxOption({ label, checked, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '4px 0' }}>
      <div
        onClick={onChange}
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '3px',
          border: checked ? '1px solid #C9A84C' : '1px solid #2A3347',
          background: checked ? '#C9A84C' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'all 0.15s',
        }}
      >
        {checked && <span style={{ color: '#0A0F1E', fontSize: '10px', fontWeight: 700 }}>✓</span>}
      </div>
      <span style={{ color: '#9CA3AF', fontSize: '13px' }}>{label}</span>
    </label>
  );
}

export default function Properties() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    types: [],
    bhk: [],
    localities: searchParams.get('locality') ? [searchParams.get('locality')] : [],
    statuses: [],
    budget: null,
  });
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const PER_PAGE = 6;

  useEffect(() => {
    document.title = 'Properties — NestVault Realty';
  }, []);

  const toggle = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(v => v !== value)
        : [...prev[key], value],
    }));
    setPage(1);
  };

  const filtered = useMemo(() => {
    let result = [...PROPERTIES];
    if (filters.types.length) result = result.filter(p => filters.types.includes(p.type));
    if (filters.localities.length) result = result.filter(p => filters.localities.includes(p.locality));
    if (filters.statuses.length) result = result.filter(p => filters.statuses.includes(p.status));
    if (filters.bhk.length) result = result.filter(p => filters.bhk.includes(p.bhk));
    if (filters.budget) {
      const range = BUDGET_RANGES.find(r => r.label === filters.budget);
      if (range) result = result.filter(p => p.priceRaw >= range.min && p.priceRaw <= range.max);
    }

    if (sort === 'price_asc') result.sort((a, b) => a.priceRaw - b.priceRaw);
    else if (sort === 'price_desc') result.sort((a, b) => b.priceRaw - a.priceRaw);

    return result;
  }, [filters, sort]);

  const paginated = filtered.slice(0, page * PER_PAGE);
  const hasMore = paginated.length < filtered.length;

  const clearFilters = () => {
    setFilters({ types: [], bhk: [], localities: [], statuses: [], budget: null });
    setPage(1);
  };

  const activeFilterCount =
    filters.types.length + filters.bhk.length + filters.localities.length +
    filters.statuses.length + (filters.budget ? 1 : 0);

  const FilterContent = (
    <div>
      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#C9A84C',
            fontSize: '12px',
            fontWeight: 600,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '20px',
            padding: 0,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <X size={12} />
          Clear all filters ({activeFilterCount})
        </button>
      )}

      <FilterSection title="Property Type">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {TYPES.map(t => (
            <CheckboxOption
              key={t}
              label={t}
              checked={filters.types.includes(t)}
              onChange={() => toggle('types', t)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Configuration">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {BHK_OPTIONS.map(b => (
            <CheckboxOption
              key={b}
              label={b}
              checked={filters.bhk.includes(b)}
              onChange={() => toggle('bhk', b)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Locality">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {LOCALITIES.map(l => (
            <CheckboxOption
              key={l}
              label={l}
              checked={filters.localities.includes(l)}
              onChange={() => toggle('localities', l)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Status">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {STATUSES.map(s => (
            <CheckboxOption
              key={s}
              label={s}
              checked={filters.statuses.includes(s)}
              onChange={() => toggle('statuses', s)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Budget">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {BUDGET_RANGES.map(r => (
            <CheckboxOption
              key={r.label}
              label={r.label}
              checked={filters.budget === r.label}
              onChange={() => setFilters(prev => ({ ...prev, budget: prev.budget === r.label ? null : r.label }))}
            />
          ))}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Page Header */}
      <div style={{ background: '#080D1A', borderBottom: '1px solid #2A3347', padding: '48px 0 40px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Explore
          </p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 48px)', color: '#F8F6F1', fontWeight: 700, marginBottom: '8px' }}>
            All Properties
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '15px' }}>
            {filtered.length} properties found in Pune
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-8 items-start">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block" style={{ width: '260px', flexShrink: 0, position: 'sticky', top: '100px' }}>
            <div style={{
              background: '#1A2235',
              border: '1px solid #2A3347',
              borderRadius: '10px',
              padding: '24px',
            }}>
              {FilterContent}
            </div>
          </aside>

          {/* Main */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Toolbar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ color: '#9CA3AF', fontSize: '14px' }}>
                Showing <span style={{ color: '#F8F6F1', fontWeight: 600 }}>{paginated.length}</span> of <span style={{ color: '#F8F6F1', fontWeight: 600 }}>{filtered.length}</span> properties
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    background: '#1A2235',
                    border: '1px solid #2A3347',
                    borderRadius: '6px',
                    color: '#F8F6F1',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  <SlidersHorizontal size={14} />
                  Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                </button>

                {/* Sort */}
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  style={{
                    padding: '8px 14px',
                    background: '#1A2235',
                    border: '1px solid #2A3347',
                    borderRadius: '6px',
                    color: '#F8F6F1',
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {SORT_OPTIONS.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {paginated.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginated.map((prop, i) => (
                    <PropertyCard key={prop.id} property={prop} delay={(i % PER_PAGE) * 0.07} />
                  ))}
                </div>

                {hasMore && (
                  <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <button
                      onClick={() => setPage(p => p + 1)}
                      className="btn-outline-gold"
                    >
                      Load More Properties
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏠</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#F8F6F1', marginBottom: '8px' }}>
                  No properties found
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>
                  Try adjusting your filters to see more results.
                </p>
                <button onClick={clearFilters} className="btn-gold">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60 }}>
          <div
            onClick={() => setMobileFiltersOpen(false)}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)' }}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '300px',
              background: '#111827',
              borderRight: '1px solid #2A3347',
              overflowY: 'auto',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#F8F6F1' }}>Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
            {FilterContent}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
            >
              Show {filtered.length} Properties
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
