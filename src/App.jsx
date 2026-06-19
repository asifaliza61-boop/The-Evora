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
import './index.css';

function App() {
  // const [cartCount, setCartCount] = useState(3);
const [cartItems, setCartItems] = useState([]);

const updateQuantity = (id, quantity, color, size) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id &&
      item.color === color &&
      item.size === size
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





  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar cartCount={cartItems.length} />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;