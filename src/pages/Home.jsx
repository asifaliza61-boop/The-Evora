import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { featuredProducts, categories } from '../data/products';

const Home = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1495386794519-c21010271901?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallbackApplied) return;
              img.dataset.fallbackApplied = 'true';
              img.src = 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative container-max text-center text-white z-10 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <span className="label-sm text-accent">Welcome to Luxury</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="heading-display mb-4 md:mb-6 text-white"
          >
            Elevate Your Style
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="body-lg mb-8 md:mb-12 text-gray-200 max-w-xl mx-auto"
          >
            Discover curated collections of luxury fashion with minimalist elegance. 
            Timeless pieces designed for the discerning eye.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/shop">
              <motion.button
                className="btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.button>
            </Link>
           
           <Link to="/about">
  <motion.button
    className="btn-secondary w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Learn More
  </motion.button>
</Link>

          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.section>

      {/* Featured Products Section */}
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
              CURATED SELECTION
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="heading-lg mb-4 md:mb-6"
            >
              Featured Collection
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="body-lg text-gray-dark"
            >
              Hand-selected pieces that embody our commitment to quality, 
              craftsmanship, and timeless elegance.
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid-products"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/shop">
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="section-padding bg-light"
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
              EXPLORE BY CATEGORY
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="heading-lg"
            >
              Shop Collections
            </motion.h2>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <Link to="/shop">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-square mb-4">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.dataset.fallbackApplied) return;
                        img.dataset.fallbackApplied = 'true';
                        img.src = 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=80';
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center"
                      whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                    >
                      <motion.span
                        className="text-white font-semibold opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300"
                      >
                        Shop {category.name}
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="heading-sm text-primary mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="body-sm text-gray-dark">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Promotional Banner */}
      <motion.section
        className="section-padding bg-primary text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Content */}
            <motion.div variants={itemVariants}>
              <motion.span
                variants={itemVariants}
                className="label-sm text-accent block mb-4"
              >
                EXCLUSIVE OFFER
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="heading-lg mb-4 md:mb-6 text-white"
              >
                Summer Collection Sale
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="body-lg text-gray-200 mb-8"
              >
                Up to 40% off on selected premium pieces. Limited time only. 
                Curate your perfect summer wardrobe with our exclusive collection.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/shop">
                  <motion.button
                    className="btn-accent w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Sale
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80"
                alt="Sale"
                className="w-full rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute top-8 right-8 bg-accent text-white px-6 py-3 rounded-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="label-sm">-40%</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Section */}
      <motion.section
        className="section-padding-sm bg-white border-t border-gray"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: '✓', label: 'Premium Quality' },
              { icon: '⚡', label: 'Fast Shipping' },
              { icon: '↩', label: 'Easy Returns' },
              { icon: '🔒', label: 'Secure Checkout' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl mb-3 text-accent">
                  {item.icon}
                </div>
                <p className="label-xs text-primary">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;