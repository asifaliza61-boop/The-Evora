import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import InfoPage from './pages/InfoPage';
import './index.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch {
      return [];
    }
  });

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const updateQuantity = (id, quantity, color, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const removeItem = (id, color, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.color === color && item.size === size)
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar cartCount={cartCount} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />




            {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
         <Route
  path="/product/:id"
  element={
    <ProductDetail
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  }
/>

<Route
  path="/cart"
  element={
    <Cart
      cartItems={cartItems}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
    />
  }
/>
            
            
            
            
            {/* <Route path="/cart" element={<Cart/>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:slug" element={<InfoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
