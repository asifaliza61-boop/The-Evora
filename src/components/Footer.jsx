import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  // ✅ NEW: Subscribe form state
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [subscribeLoading, setSubscribeLoading] = useState(false);

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { label: 'New Arrivals', href: '/shop' },
        { label: 'Best Sellers', href: '/shop' },
        { label: 'Sale', href: '/shop' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Shipping Info', href: '/contact' },
        { label: 'Returns', href: '/contact' },
        { label: 'FAQ', href: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Blog', href: '/blog' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // ✅ FIXED: Subscribe handler with validation
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setSubscribeMessage('❌ Please enter a valid email');
      setTimeout(() => setSubscribeMessage(''), 3000);
      return;
    }

    setSubscribeLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      const subscribers = JSON.parse(localStorage.getItem('evora-subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('evora-subscribers', JSON.stringify(subscribers));
      }

      setSubscribeMessage('✓ Thanks for subscribing!');
      setEmail('');
      setSubscribeLoading(false);

      setTimeout(() => setSubscribeMessage(''), 3000);
    }, 800);
  };

  // Click handler to navigate
  const handleNavigation = (href) => {
    navigate(href);
  };

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <motion.div
        className="border-b border-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max section-padding-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="heading-sm mb-4 md:mb-6">Stay Updated</h3>
            <p className="body-base mb-6 md:mb-8">
              Subscribe to our newsletter for exclusive offers and style tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-secondary text-white placeholder-gray-dark focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <motion.button
                type="submit"
                className="btn-accent px-8 py-3 cursor-pointer disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={subscribeLoading}
              >
                {subscribeLoading ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </form>
            {subscribeMessage && (
              <motion.p
                className={`mt-3 text-sm ${
                  subscribeMessage.includes('Thanks') ? 'text-accent' : 'text-red-400'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {subscribeMessage}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Links Section */}
      <motion.div
        className="container-max section-padding-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="pointer-events-auto">
            <button
              onClick={() => handleNavigation('/')}
              className="block mb-4 group bg-transparent border-none cursor-pointer p-0"
            >
              <h4 className="heading-sm text-white group-hover:text-accent transition-colors text-left">
                THE EVORA
              </h4>
            </button>
            <p className="body-sm text-gray-dark mb-4">
              Luxury fashion redefined through minimalism and elegance.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'instagram', url: 'https://instagram.com' },
                { name: 'facebook', url: 'https://facebook.com' },
                { name: 'twitter', url: 'https://twitter.com' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-dark hover:text-accent transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <motion.div 
              key={column.title} 
              variants={itemVariants}
              className="pointer-events-auto"
            >
              <h5 className="label-sm text-white mb-4">
                {column.title}
              </h5>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label} className="pointer-events-auto">
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="body-sm text-gray-dark hover:text-accent transition-colors bg-transparent border-none cursor-pointer text-left p-0 hover:underline"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="border-t border-secondary pointer-events-auto">
        <div className="container-max py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-sm text-gray-dark text-center md:text-left">
              © {currentYear} THE EVORA. All rights reserved.
            </p>
            <div className="flex gap-6 flex-wrap justify-center md:justify-end">
              <button
                onClick={() => handleNavigation('/privacy')}
                className="body-sm text-gray-dark hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-0 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation('/terms')}
                className="body-sm text-gray-dark hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-0 hover:underline"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavigation('/cookies')}
                className="body-sm text-gray-dark hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-0 hover:underline"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
