import React, { useState } from 'react';
import { Mail, Phone, Instagram, Send, Check } from 'lucide-react';

/**
 * Contact page component.
 * Integrates direct contact methods and a functional frontend inquiry form.
 * Submission handles feedback states honestly, showing structured data.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Mural Art',
    message: ''
  });

  const [formState, setFormState] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    setFormState('submitting');
    
    // Simulate API delay
    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  return (
    <div className="page-container container section-spacing">
      {/* Page Header */}
      <header style={{ marginBottom: 'var(--space-xl)' }}>
        <span className="script-accent" style={{ fontSize: '1.4rem', color: 'var(--color-mauve)' }}>Connect</span>
        <h1 style={{ marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>Get In Touch</h1>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Have a vision for a custom space, or want to discuss original canvases and education workshops? Reach out below.
        </p>
      </header>

      <div className="grid-two-col" style={{ alignItems: 'flex-start', gap: 'var(--space-xl)' }}>
        
        {/* Left Column: Direct Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-sage-dark)' }}>Direct Connections</h2>
          <p style={{ fontSize: '0.95rem', marginBottom: 'var(--space-xs)' }}>
            Feel free to connect directly through any of the following channels:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            
            {/* Email link */}
            <a 
              href="mailto:yashitadedhia16@gmail.com" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-mist-light)',
                transition: 'border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-mauve)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <div style={{ color: 'var(--color-sage)' }}><Mail size={24} /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>Email</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 400, margin: 0 }}>yashitadedhia16@gmail.com</p>
              </div>
            </a>

            {/* Phone link */}
            <a 
              href="tel:8639772624" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-mist-light)',
                transition: 'border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-mauve)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <div style={{ color: 'var(--color-sage)' }}><Phone size={24} /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>Call Directly</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 400, margin: 0 }}>+91 86397 72624</p>
              </div>
            </a>

            {/* WhatsApp link */}
            <a 
              href="https://wa.me/918639772624" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-mist-light)',
                transition: 'border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-mauve)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <div style={{ color: 'var(--color-sage)' }}>
                {/* SVG for WhatsApp */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>WhatsApp chat</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 400, margin: 0 }}>+91 86397 72624</p>
              </div>
            </a>

            {/* Instagram link */}
            <a 
              href="https://instagram.com/evara_by_yashi" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-mist-light)',
                transition: 'border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-mauve)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <div style={{ color: 'var(--color-sage)' }}><Instagram size={24} /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>Instagram Feed</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 400, margin: 0 }}>@evara_by_yashi</p>
              </div>
            </a>

          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div style={{ 
          backgroundColor: 'var(--color-mist-light)', 
          border: '1px solid var(--color-border)', 
          padding: 'var(--space-md) var(--space-md)',
          width: '100%'
        }}>
          {formState === 'success' ? (
            <div style={{ 
              textAlign: 'center', 
              padding: 'var(--space-md) 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-sm)'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-sage)', 
                color: 'var(--color-mist)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check size={32} />
              </div>
              <h3 style={{ margin: 0 }}>Inquiry Received</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)', maxWidth: '400px' }}>
                Thank you, <strong>{formData.name}</strong>. Yashita will review your request regarding <strong>{formData.inquiryType}</strong> and get back to you shortly at <strong>{formData.email}</strong>.
              </p>
              <div style={{ 
                marginTop: 'var(--space-sm)', 
                borderTop: '1px solid var(--color-border)', 
                paddingTop: 'var(--space-sm)',
                fontSize: '0.8rem',
                color: 'var(--color-sage-dark)',
                textAlign: 'left',
                width: '100%',
                opacity: 0.8
              }}>
                <p style={{ fontWeight: 500, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Submission Summary (Frontend mock):</p>
                <div style={{ fontFamily: 'monospace' }}>
                  Name: {formData.name}<br />
                  Email: {formData.email}<br />
                  Phone: {formData.phone || 'N/A'}<br />
                  Inquiry: {formData.inquiryType}<br />
                  Message: {formData.message}
                </div>
              </div>
              <button 
                className="btn-secondary" 
                style={{ marginTop: 'var(--space-sm)' }}
                onClick={() => {
                  setFormData({ name: '', email: '', phone: '', inquiryType: 'Mural Art', message: '' });
                  setFormState('idle');
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-sage-dark)', marginBottom: '0.25rem' }}>Send an Inquiry</h3>

              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="name" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  disabled={formState === 'submitting'}
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-mist)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--color-charcoal)',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="email" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  disabled={formState === 'submitting'}
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-mist)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--color-charcoal)',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="phone" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  disabled={formState === 'submitting'}
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-mist)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--color-charcoal)',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Inquiry Type */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="inquiryType" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>Inquiry Type</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  disabled={formState === 'submitting'}
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-mist)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--color-charcoal)',
                    outline: 'none',
                    borderRadius: 0,
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23829672' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25rem'
                  }}
                >
                  <option value="Mural Art">Mural Art Commission</option>
                  <option value="Canvas Painting">Canvas Painting Commission</option>
                  <option value="Custom Artwork">Custom Surface Art</option>
                  <option value="Workshop">Art Workshop / Camps</option>
                  <option value="General">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="message" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)' }}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your space, dimensions, or custom requirements..."
                  disabled={formState === 'submitting'}
                  style={{
                    padding: '0.75rem',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-mist)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--color-charcoal)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                disabled={formState === 'submitting'}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Inquiry'} &nbsp; <Send size={14} />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
