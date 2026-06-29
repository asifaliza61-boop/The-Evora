import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !trimmedData.name ||
      !emailRegex.test(trimmedData.email) ||
      !trimmedData.subject ||
      !trimmedData.message
    ) {
      setSubmitted(false);
      setFormError('Please complete every field with a valid email address.');
      return;
    }

    setFormError('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const contactMethods = [
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'The EVORA Flagship Store',
      details: ['123 Luxury Avenue', 'New York, NY 10001', 'United States'],
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Customer Support',
      details: ['+1 (555) 123-4567', 'Mon-Fri: 9AM-6PM EST', 'Sat-Sun: 10AM-4PM EST'],
    },
    {
      icon: '✉️',
      title: 'Email Us',
      description: 'We Reply Within 24 Hours',
      details: ['hello@theevora.com', 'support@theevora.com', 'info@theevora.com'],
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Real-Time Support',
      details: ['Available daily', '9AM - 9PM EST', 'Click the chat icon'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
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
            <span className="label-sm text-accent block mb-4">GET IN TOUCH</span>
            <h1 className="heading-lg mb-4">Contact The EVORA</h1>
            <p className="body-lg text-gray-dark">
              Have questions? We'd love to hear from you. Send us a message and we'll 
              respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods Grid */}
      <motion.section
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center p-6 md:p-8 rounded-lg hover:bg-light transition-colors duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="heading-sm text-primary mb-2">{method.title}</h3>
                <p className="body-sm text-gray-dark mb-4">{method.description}</p>
                <div className="space-y-1">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-dark">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="section-padding bg-light border-t border-gray"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <motion.span
                className="label-sm text-accent block mb-4"
                variants={itemVariants}
              >
                WHY CONTACT US
              </motion.span>
              <motion.h2
                className="heading-lg mb-6"
                variants={itemVariants}
              >
                We're Here to Help
              </motion.h2>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: 'Product Inquiries',
                    description: 'Questions about our luxury collections and sizing',
                  },
                  {
                    title: 'Order Support',
                    description: 'Track your order or resolve shipping issues',
                  },
                  {
                    title: 'Returns & Exchanges',
                    description: 'Hassle-free returns within 30 days',
                  },
                  {
                    title: 'Custom Requests',
                    description: 'Special orders and personalization services',
                  },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="pb-4 border-b border-gray last:border-b-0">
                    <h4 className="heading-sm text-primary mb-2">{item.title}</h4>
                    <p className="body-sm text-gray-dark">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {formError && (
                  <motion.p
                    className="text-sm text-red-600 bg-white border border-red-200 px-4 py-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formError}
                  </motion.p>
                )}

                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="label-sm text-primary block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 border border-gray bg-white text-primary placeholder-gray-dark focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="label-sm text-primary block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray bg-white text-primary placeholder-gray-dark focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="label-sm text-primary block mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray bg-white text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="custom">Custom Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="label-sm text-primary block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray bg-white text-primary placeholder-gray-dark focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    className="w-full btn-primary py-3 font-medium relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitted ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-2"
                      >
                        ✓ Message Sent Successfully!
                      </motion.span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.div>

                {/* Privacy Note */}
                <motion.p
                  className="text-xs text-gray-dark text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </motion.p>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          {/* Section Header */}
          <motion.div
            className="max-w-2xl mx-auto text-center mb-12 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={itemVariants}
              className="label-sm text-accent block mb-4"
            >
              FREQUENTLY ASKED QUESTIONS
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="heading-lg"
            >
              Common Questions Answered
            </motion.h2>
          </motion.div>

          {/* FAQ Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'What is your return policy?',
                a: 'We offer 30-day returns on all unworn items with original tags. Returns are free and easy—no questions asked.',
              },
              {
                q: 'How long does shipping take?',
                a: 'Standard shipping takes 3-5 business days. Express shipping (2-3 days) is available at checkout.',
              },
              {
                q: 'Do you ship internationally?',
                a: 'Yes! We ship to 50+ countries. Shipping costs and times vary by location.',
              },
              {
                q: 'How can I track my order?',
a: "You'll receive a tracking number via email once your order ships. Use it to track your package.",
              },
              {
                q: 'Do you offer gift wrapping?',
                a: 'Yes! Premium gift wrapping is available at checkout for a small fee.',
              },
              {
                q: 'Can I cancel or modify my order?',
                a: 'Contact us within 2 hours of placing your order. Well do our best to help you.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 md:p-8 bg-light rounded-lg hover:shadow-md transition-all duration-300"
              >
                <h4 className="heading-sm text-primary mb-3">{faq.q}</h4>
                <p className="body-sm text-gray-dark">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="section-padding-sm bg-primary text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max text-center">
          <motion.span
            className="label-sm text-accent block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            STILL HAVE QUESTIONS?
          </motion.span>
          <motion.h2
            className="heading-lg text-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            We're Always Here to Help
          </motion.h2>
          <motion.p
            className="body-lg text-gray-200 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            Reach out through any of our channels. Our dedicated support team is ready 
            to assist you with anything you need.
          </motion.p>
          <motion.button
            className="btn-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Send Us a Message
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
