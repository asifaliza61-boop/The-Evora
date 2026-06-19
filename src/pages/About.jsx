import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
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

  const team = [
    {
      name: 'Isabella Rossi',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'Visionary fashion designer with 20 years of luxury brand experience.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'Strategic leader passionate about elevating customer experience.',
    },
    {
      name: 'Sofia Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Award-winning designer focused on sustainable luxury fashion.',
    },
    {
      name: 'James Mitchell',
      role: 'VP of Customer Experience',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      bio: 'Customer service expert dedicated to premium support.',
    },
  ];

  const values = [
    {
      icon: '✨',
      title: 'Excellence',
      description: 'We pursue perfection in every detail, from design to customer service.',
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'Committed to ethical sourcing and environmentally responsible practices.',
    },
    {
      icon: '❤️',
      title: 'Integrity',
      description: 'Honest, transparent, and genuine in all our business dealings.',
    },
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Constantly evolving and pushing boundaries in luxury fashion.',
    },
  ];

  const timeline = [
    { year: '2015', event: 'The EVORA is founded by Isabella Rossi' },
    { year: '2017', event: 'Launch of flagship store in New York' },
    { year: '2019', event: 'Expand to 12 countries with e-commerce' },
    { year: '2021', event: 'Become carbon-neutral luxury brand' },
    { year: '2023', event: 'Reach 1 million customers worldwide' },
    { year: '2024', event: 'Launch new sustainable collection' },
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
            <span className="label-sm text-accent block mb-4">OUR STORY</span>
            <h1 className="heading-lg mb-4">About The EVORA</h1>
            <p className="body-lg text-gray-dark">
              Crafting luxury fashion since 2015. A commitment to timeless elegance, 
              quality, and sustainability.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Hero Section with Image */}
      <motion.section
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
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
                WHO WE ARE
              </motion.span>
              <motion.h2
                className="heading-lg mb-6"
                variants={itemVariants}
              >
                Luxury Redefined Through Minimalism
              </motion.h2>

              <motion.div
                className="space-y-4 md:space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p
                  variants={itemVariants}
                  className="body-lg text-gray-dark"
                >
                  Founded in 2015 by Isabella Rossi, The EVORA represents a new approach 
                  to luxury fashion. We believe true elegance lies in simplicity, quality, 
                  and timeless design.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="body-lg text-gray-dark"
                >
                  Every piece in our collection is carefully curated to embody our philosophy: 
                  less is more. We focus on premium materials, impeccable craftsmanship, and 
                  designs that transcend fleeting trends.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="body-lg text-gray-dark"
                >
                  Our commitment extends beyond fashion. We're dedicated to sustainable practices, 
                  ethical sourcing, and supporting the communities we work with.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="aspect-square overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="The EVORA Story"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-accent text-white p-6 md:p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="label-sm">Est. 2015</p>
                <p className="text-2xl md:text-3xl font-bold mt-2">10+ Years</p>
                <p className="body-sm">of Excellence</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="section-padding bg-light border-t border-gray"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="p-8 md:p-12 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-6 text-accent">🎯</div>
              <h3 className="heading-md text-primary mb-4">Our Mission</h3>
              <p className="body-lg text-gray-dark mb-4">
                To create exceptional luxury fashion that empowers individuals to express 
                their authentic style with confidence and elegance.
              </p>
              <p className="body-sm text-gray-dark">
                We believe fashion should be timeless, not temporary. Our mission is to 
                design pieces that become treasured staples in your wardrobe.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="p-8 md:p-12 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-6 text-accent">✨</div>
              <h3 className="heading-md text-primary mb-4">Our Vision</h3>
              <p className="body-lg text-gray-dark mb-4">
                To be the world's most respected luxury brand known for quality, sustainability, 
                and customer-centric design.
              </p>
              <p className="body-sm text-gray-dark">
                We envision a future where luxury and sustainability go hand-in-hand, 
                setting new industry standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values */}
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
            className="max-w-2xl mx-auto text-center mb-12 md:mb-16 lg:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={itemVariants}
              className="label-sm text-accent block mb-4"
            >
              OUR VALUES
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="heading-lg"
            >
              What We Stand For
            </motion.h2>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center p-6 md:p-8 rounded-lg bg-light hover:bg-gray transition-colors"
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="heading-sm text-primary mb-3">{value.title}</h4>
                <p className="body-sm text-gray-dark">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="section-padding bg-light border-t border-gray"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          {/* Section Header */}
          <motion.div
            className="max-w-2xl mx-auto text-center mb-12 md:mb-16 lg:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={itemVariants}
              className="label-sm text-accent block mb-4"
            >
              LEADERSHIP TEAM
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="heading-lg"
            >
              Meet Our Team
            </motion.h2>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                {/* Image */}
                <motion.div
                  className="overflow-hidden mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>

                {/* Info */}
                <h4 className="heading-sm text-primary mb-1">{member.name}</h4>
                <p className="label-xs text-accent mb-2">{member.role}</p>
                <p className="body-sm text-gray-dark">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
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
            className="max-w-2xl mx-auto text-center mb-12 md:mb-16 lg:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={itemVariants}
              className="label-sm text-accent block mb-4"
            >
              OUR JOURNEY
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="heading-lg"
            >
              Key Milestones
            </motion.h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-8 mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gray last:border-b-0"
              >
                {/* Year */}
                <div className="flex-shrink-0">
                  <div className="w-20 md:w-24 text-center">
                    <div className="heading-md text-accent font-bold">{item.year}</div>
                  </div>
                </div>

                {/* Event */}
                <div className="flex-1 pt-2">
                  <motion.div
                    className="inline-block bg-light px-4 py-2 rounded-lg"
                    whileHover={{ backgroundColor: '#D4A373', color: 'white' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="body-base font-medium">{item.event}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="section-padding bg-light border-t border-gray"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Global Customers', value: '1M+' },
              { label: 'Countries', value: '50+' },
              { label: 'Team Members', value: '500+' },
              { label: 'Awards', value: '30+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 md:p-8"
              >
                <motion.div
                  className="heading-3xl md:heading-4xl text-accent font-bold mb-2"
                  whileInView={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <p className="label-sm text-primary">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Sustainability Section */}
      <motion.section
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <motion.div
                className="aspect-square overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80"
                  alt="Sustainability"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <motion.span
                className="label-sm text-accent block mb-4"
                variants={itemVariants}
              >
                COMMITMENT TO PLANET
              </motion.span>
              <motion.h2
                className="heading-lg mb-6"
                variants={itemVariants}
              >
                Sustainable Luxury
              </motion.h2>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p
                  variants={itemVariants}
                  className="body-lg text-gray-dark"
                >
                  At The EVORA, we believe luxury and sustainability must coexist. 
                  We've committed to becoming carbon-neutral by 2025.
                </motion.p>

                <motion.div variants={itemVariants}>
                  <h4 className="heading-sm text-primary mb-2">Our Initiatives:</h4>
                  <ul className="space-y-2">
                    {[
                      'Ethical sourcing from certified suppliers',
                      'Use of sustainable and organic materials',
                      'Carbon-neutral shipping worldwide',
                      'Packaging made from recycled materials',
                      'Annual tree planting program',
                      'Partnership with environmental organizations',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-3 items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-accent font-bold flex-shrink-0">✓</span>
                        <span className="body-sm text-gray-dark">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
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
            JOIN OUR COMMUNITY
          </motion.span>
          <motion.h2
            className="heading-lg text-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Experience The EVORA Difference
          </motion.h2>
          <motion.p
            className="body-lg text-gray-200 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            Discover our latest collections and be part of a community that values 
            quality, elegance, and sustainability.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/shop">
           <motion.button
      className="btn-accent"
        whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
            >
            Shop Collection
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
          
          
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default About;