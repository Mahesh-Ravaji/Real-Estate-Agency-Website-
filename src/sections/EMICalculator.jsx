import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

function formatCurrency(n) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString('en-IN')}`;
}

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const monthlyRate = rate / 100 / 12;
  const months = tenure * 12;
  const emi = monthlyRate === 0
    ? loanAmount / months
    : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalAmount = emi * months;
  const totalInterest = totalAmount - loanAmount;

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
              Financial Planning
            </p>
            <h2
              className="gold-underline gold-underline-center"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#F8F6F1', fontWeight: 700 }}
            >
              Plan Your Budget
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: '#1A2235',
            border: '1px solid #2A3347',
            borderRadius: '16px',
            overflow: 'hidden',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Inputs */}
            <div style={{ padding: '40px', borderRight: '1px solid #2A3347' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
                <Calculator size={20} style={{ color: '#C9A84C' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#F8F6F1', fontWeight: 600 }}>
                  EMI Calculator
                </h3>
              </div>

              {/* Loan Amount */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label style={{ color: '#9CA3AF', fontSize: '13px', fontWeight: 500 }}>Loan Amount</label>
                  <span style={{ color: '#C9A84C', fontSize: '14px', fontWeight: 700 }}>
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={20000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                  <span style={{ color: '#6B7280', fontSize: '11px' }}>₹10L</span>
                  <span style={{ color: '#6B7280', fontSize: '11px' }}>₹2Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label style={{ color: '#9CA3AF', fontSize: '13px', fontWeight: 500 }}>Interest Rate</label>
                  <span style={{ color: '#C9A84C', fontSize: '14px', fontWeight: 700 }}>{rate.toFixed(1)}% p.a.</span>
                </div>
                <input
                  type="range"
                  min={7}
                  max={12}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                  <span style={{ color: '#6B7280', fontSize: '11px' }}>7%</span>
                  <span style={{ color: '#6B7280', fontSize: '11px' }}>12%</span>
                </div>
              </div>

              {/* Tenure */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ color: '#9CA3AF', fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '12px' }}>
                  Loan Tenure
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[10, 15, 20, 25, 30].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setTenure(yr)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '4px',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: tenure === yr ? '1px solid #C9A84C' : '1px solid #2A3347',
                        background: tenure === yr ? 'rgba(201,168,76,0.12)' : '#111827',
                        color: tenure === yr ? '#C9A84C' : '#9CA3AF',
                        transition: 'all 0.2s',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {yr} yr
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '8px' }}>Monthly EMI</p>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(36px, 5vw, 54px)',
                  fontWeight: 700,
                  color: '#C9A84C',
                  lineHeight: 1,
                }}>
                  {formatCurrency(Math.round(emi))}
                </div>
                <p style={{ color: '#6B7280', fontSize: '12px', marginTop: '6px' }}>per month</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  { label: 'Principal Amount', value: formatCurrency(loanAmount), gold: false },
                  { label: 'Total Interest', value: formatCurrency(Math.round(totalInterest)), gold: false },
                  { label: 'Total Amount Payable', value: formatCurrency(Math.round(totalAmount)), gold: true },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 16px',
                      background: '#111827',
                      borderRadius: '6px',
                      border: '1px solid #2A3347',
                    }}
                  >
                    <span style={{ color: '#9CA3AF', fontSize: '13px' }}>{item.label}</span>
                    <span style={{ color: item.gold ? '#C9A84C' : '#F8F6F1', fontWeight: 600, fontSize: '14px' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-gold"
                style={{ textAlign: 'center', justifyContent: 'center', fontSize: '13px', padding: '13px' }}
              >
                Talk to Our Expert for This Budget →
              </Link>
              <p style={{ color: '#6B7280', fontSize: '11px', textAlign: 'center', marginTop: '10px' }}>
                *Indicative EMI only. Actual EMI may vary by lender.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
