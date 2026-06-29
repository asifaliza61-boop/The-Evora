import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const MAX_PRICE = 700;
const PRODUCTS_PER_PAGE = 9;

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(MAX_PRICE);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Women', 'Men', 'Accessories'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', color: '#1A1A1A' },
    { name: 'White', color: '#F9F8F5' },
    { name: 'Navy', color: '#1a3a52' },
    { name: 'Camel', color: '#C9B5A0' },
  ];

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedSize('');
    setSelectedColor('');
    setSortBy('featured');
    setPriceRange(MAX_PRICE);
  };

  const matchesFilters = (product, category = selectedCategory) => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesPrice = product.price <= priceRange;
    const matchesSize = !selectedSize || product.sizes.includes(selectedSize);
    const matchesColor = !selectedColor || product.colors.includes(selectedColor);

    return matchesCategory && matchesPrice && matchesSize && matchesColor;
  };

  const filteredProducts = products
    .filter((product) => matchesFilters(product))
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return b.id - a.id;
      return 0;
    });

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const pageStart = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(pageStart, pageStart + PRODUCTS_PER_PAGE);
  const visibleStart = filteredProducts.length === 0 ? 0 : pageStart + 1;
  const visibleEnd = Math.min(pageStart + PRODUCTS_PER_PAGE, filteredProducts.length);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSize, selectedColor, priceRange, sortBy]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

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
            <span className="label-sm text-accent block mb-4">SHOP</span>
            <h1 className="heading-lg mb-4">All Products</h1>
            <p className="body-lg text-gray-dark">
              Discover our complete collection of luxury fashion items.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="container-max py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          <motion.div
            className={`${showFilters ? 'block' : 'hidden'} lg:block col-span-1`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6 lg:mb-0">
              <h3 className="heading-sm text-primary">Filters</h3>
              <button
                className="lg:hidden text-gray-dark hover:text-primary"
                onClick={() => setShowFilters(false)}
                aria-label="Close filters"
              >
                X
              </button>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="label-sm text-primary mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block text-left body-sm font-medium transition-all duration-300 ${
                        selectedCategory === cat
                          ? 'text-accent'
                          : 'text-gray-dark hover:text-primary'
                      }`}
                    >
                      {cat}
                      <span className="ml-2 text-xs text-gray-dark">
                        ({products.filter((product) => matchesFilters(product, cat)).length})
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="divider"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h4 className="label-sm text-primary mb-4">Price Range</h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max={MAX_PRICE}
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                  <p className="body-sm text-gray-dark">Up to ${priceRange}</p>
                </div>
              </motion.div>

              <div className="divider"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="label-sm text-primary mb-4">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize((current) => (current === size ? '' : size))}
                      className={`aspect-square border transition-colors flex items-center justify-center text-sm font-medium hover:bg-light ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="divider"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <h4 className="label-sm text-primary mb-4">Color</h4>
                <div className="grid grid-cols-4 gap-3">
                  {colors.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedColor((current) => (current === item.name ? '' : item.name))}
                      className={`aspect-square rounded-full border-2 transition-all ${
                        selectedColor === item.name
                          ? 'border-primary ring-2 ring-accent ring-offset-2'
                          : 'border-gray hover:border-primary'
                      }`}
                      style={{ backgroundColor: item.color }}
                      title={item.name}
                      aria-label={`Filter by ${item.name}`}
                    ></button>
                  ))}
                </div>
              </motion.div>

              <motion.button
                className="w-full btn-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={resetFilters}
              >
                Reset Filters
              </motion.button>
            </div>
          </motion.div>

          <div className="col-span-1 lg:col-span-3">
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-gray"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <p className="body-sm text-gray-dark">
                  Showing {visibleStart}-{visibleEnd} of {filteredProducts.length} results
                </p>
                <button
                  className="lg:hidden btn-secondary text-sm px-4 py-2"
                  onClick={() => setShowFilters(true)}
                >
                  Filters
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent bg-white"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </motion.div>

            {filteredProducts.length > 0 ? (
              <motion.div
                className="grid-products"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {paginatedProducts.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="body-lg text-gray-dark mb-4">
                  No products found with current filters.
                </p>
                <button className="btn-secondary" onClick={resetFilters}>
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {filteredProducts.length > 0 && totalPages > 1 && (
        <motion.section
          className="border-t border-gray py-8 md:py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container-max flex justify-center items-center gap-2">
            <button
              className="btn-secondary px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-10 h-10 flex items-center justify-center font-medium transition-all ${
                  num === currentPage
                    ? 'bg-primary text-white'
                    : 'border border-gray hover:border-primary'
                }`}
              >
                {num}
              </button>
            ))}
            <button
              className="btn-secondary px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default Shop;
