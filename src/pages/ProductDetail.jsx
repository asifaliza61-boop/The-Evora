import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ cartItems, setCartItems }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // ✅ FIX: reset state when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0] || '');
      setSelectedSize(product.sizes?.[0] || '');
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleAddToCart = () => {
    const cartProduct = {
      id: product.id,
      product,
      quantity,
      color: selectedColor,
      size: selectedSize,
    };

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.color === selectedColor &&
          item.size === selectedSize
      );

      if (existingIndex !== -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prevItems, cartProduct];
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="container-max py-6 md:py-8">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-gray-dark hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="text-gray-dark hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-primary">{product.category}</span>
        </div>
      </div>

      <section className="container-max pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* IMAGE */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* INFO */}
          <div>

            <h1 className="text-3xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="mb-4 text-gray-600">
              {product.description}
            </p>

            {/* COLOR */}
            <div className="mb-4">
              <p>Color: {selectedColor}</p>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 border ${
                      selectedColor === color ? 'bg-black text-white' : ''
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="mb-4">
              <p>Size: {selectedSize}</p>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border ${
                      selectedSize === size ? 'bg-black text-white' : ''
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QTY */}
            <div className="mb-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="mx-3">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-3"
            >
              {addedToCart ? 'Added!' : 'Add to Cart'}
            </button>

          </div>
        </div>

      </section>

      {/* RELATED */}
      <section className="container-max">
        <h2 className="text-2xl mb-6">Related Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;