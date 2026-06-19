import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  // Dummy cart items
  // const [cartItems, setCartItems] = useState([
  //   { id: 1, product: products[0], quantity: 2, color: 'White', size: 'M' },
  //   { id: 3, product: products[2], quantity: 1, color: 'Black', size: 'S' },
  //   { id: 6, product: products[5], quantity: 1, color: 'Cream', size: 'M' },
  // ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal + shipping + tax - discount;

  // const updateQuantity = (id, quantity) => {
  //   if (quantity <= 0) {
  //     removeItem(id);
  //     return;
  //   }
  //   setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  // };

  // const removeItem = (id) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id));
  // };

  const applyPromoCode = () => {
    if (promoCode === 'LUXURY20') {
      setDiscount(subtotal * 0.2);
    } else if (promoCode === 'WELCOME10') {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

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
      {/* Page Header */}
      <motion.section
        className="bg-light border-b border-gray section-padding-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-lg mb-2">Shopping Cart</h1>
            <p className="body-lg text-gray-dark">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="container-max py-12 md:py-16 lg:py-20">
        {cartItems.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {cartItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex gap-4 md:gap-6 pb-6 md:pb-8 border-b border-gray last:border-b-0"
                >
                  {/* Product Image */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={`/product/${item.product.id}`}>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover cursor-pointer"
                      />
                    </Link>
                  </motion.div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <motion.div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="block group mb-2"
                      >
                        <h3 className="heading-sm text-primary group-hover:text-accent transition-colors line-clamp-2">
                          {item.product.name}
                        </h3>
                      </Link>
                      <div className="flex gap-4 text-sm text-gray-dark mb-2 md:mb-4">
                        <span>Color: <span className="font-medium text-primary">{item.color}</span></span>
                        <span>Size: <span className="font-medium text-primary">{item.size}</span></span>
                      </div>
                      <p className="body-sm text-gray-dark">
                        ${item.product.price.toFixed(2)} each
                      </p>
                    </motion.div>

                    {/* Quantity & Price */}
                    <div className="flex items-center justify-between">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray w-fit">
                        <button
                          // onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.color, item.size)}
                          className="px-3 py-2 hover:bg-light transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 border-l border-r border-gray font-medium text-sm">
                          {item.quantity}
                        </span>
                        <button
                          // onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.color, item.size)}
                          className="px-3 py-2 hover:bg-light transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>

                      {/* Total Price */}
                      <div className="text-right">
                        <p className="heading-sm text-primary font-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <motion.button
                    onClick={() => removeItem(item.id, item.color, item.size)}
                    className="flex-shrink-0 text-gray-dark hover:text-accent transition-colors p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Remove item"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 sticky top-20 h-fit"
            >
              <div className="bg-light p-6 md:p-8 rounded-lg space-y-6">
                <h3 className="heading-sm text-primary">Order Summary</h3>

                {/* Price Breakdown */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-dark">Subtotal</span>
                    <span className="font-medium text-primary">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <motion.div
                      className="flex justify-between text-accent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <span>Discount ({promoCode})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </motion.div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-dark">
                      Shipping
                      {shipping === 0 && <span className="text-accent ml-1">(Free)</span>}
                    </span>
                    <span className="font-medium text-primary">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-dark">Tax (8%)</span>
                    <span className="font-medium text-primary">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="divider"></div>

                {/* Total */}
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-dark">Total</span>
                  <span className="heading-md text-primary font-bold">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Promo Code */}
                <div className="space-y-3 pt-4 border-t border-gray">
                  <label className="label-xs text-primary block">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      className="flex-1 px-3 py-2 border border-gray text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <motion.button
                      onClick={applyPromoCode}
                      className="btn-secondary px-4 py-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-dark">
                    Try: <span className="font-medium text-accent">LUXURY20</span> or <span className="font-medium text-accent">WELCOME10</span>
                  </p>
                </div>

                {/* Checkout Button */}
                <motion.button
                  className="w-full btn-primary py-3 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Checkout
                </motion.button>

                {/* Continue Shopping */}
                <Link to="/shop">
                  <motion.button
                    className="w-full btn-secondary py-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue Shopping
                  </motion.button>
                </Link>

                {/* Info Box */}
                <div className="bg-white p-4 rounded text-xs text-gray-dark space-y-2">
                  <p>✓ Free shipping on orders over $150</p>
                  <p>✓ 30-day returns on all items</p>
                  <p>✓ Secure SSL checkout</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-24 h-24 mx-auto mb-6 text-gray opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="heading-lg mb-4 text-gray-dark">Your Cart is Empty</h2>
            <p className="body-lg text-gray-dark mb-8 max-w-md mx-auto">
              Explore our collection and add items to your cart to get started.
            </p>
            <Link to="/shop">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Shopping
              </motion.button>
            </Link>
          </motion.div>
        )}
      </section>

      {/* Why Shop With Us */}
      {cartItems.length > 0 && (
        <motion.section
          className="section-padding-sm bg-light border-t border-gray"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: '✓', label: 'Premium Quality' },
                { icon: '⚡', label: 'Fast Shipping' },
                { icon: '↩', label: 'Easy Returns' },
                { icon: '🔒', label: 'Secure Checkout' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl mb-3 text-accent">
                    {item.icon}
                  </div>
                  <p className="label-xs text-primary">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default Cart;