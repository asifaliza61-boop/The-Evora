import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageContent = {
  careers: {
    title: 'Careers',
    eyebrow: 'JOIN THE EVORA',
    body: 'We are building a careful, customer-first luxury fashion experience. Open roles will be shared here as the team grows.',
  },
  press: {
    title: 'Press',
    eyebrow: 'MEDIA',
    body: 'For brand assets, press inquiries, or interview requests, contact hello@theevora.com and our team will respond shortly.',
  },
  blog: {
    title: 'Blog',
    eyebrow: 'STYLE NOTES',
    body: 'Editorial guides, collection stories, and care tips are coming soon.',
  },
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'YOUR DATA',
    body: 'We only use submitted information to support your shopping experience, respond to inquiries, and manage newsletter subscriptions.',
  },
  terms: {
    title: 'Terms of Service',
    eyebrow: 'STORE TERMS',
    body: 'By using THE EVORA, you agree to use the site responsibly and provide accurate information when placing orders or contacting support.',
  },
  cookies: {
    title: 'Cookie Policy',
    eyebrow: 'SITE PREFERENCES',
    body: 'THE EVORA may use browser storage for cart persistence, newsletter subscriptions, and basic site functionality.',
  },
};

const InfoPage = () => {
  const { slug } = useParams();
  const content = pageContent[slug];

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Page not found</h1>
          <Link to="/" className="btn-primary">Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        className="bg-light border-b border-gray section-padding-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-max">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="label-sm text-accent block mb-4">{content.eyebrow}</span>
            <h1 className="heading-lg mb-4">{content.title}</h1>
            <p className="body-lg text-gray-dark">{content.body}</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="container-max py-12 md:py-16">
        <Link to="/contact" className="btn-secondary">Contact Us</Link>
      </section>
    </div>
  );
};

export default InfoPage;
