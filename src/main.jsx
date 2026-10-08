import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import ProductDetails from "./components/ProductDetails";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    category:"Electronics",
    rating:4.5,
    stock:8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    category:"Electronics",
    rating:4.6,
    stock:6,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 999,
    category:"Electronics",
    rating:4.4,
    stock:7,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 2499,
    category:"Fashion",
    rating:3.7,
    stock:10,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
];

<BrowserRouter>
  <Navbar
    cartCount={cart.length}
    wishlistCount={wishlist.length}
    darkMode={darkMode}
    setDarkMode={setDarkMode}
  />

  <Routes>
    <Route path="/" element={<Home />} />

    <Route
      path="/products"
      element={
        <Products
          products={products}
          filteredProducts={filteredProducts}
          addToCart={addToCart}
          setSelectedProduct={setSelectedProduct}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />
      }
    />

    <Route
      path="/cart"
      element={
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />
      }
    />

    <Route
      path="/wishlist"
      element={
        <Wishlist
          wishlist={wishlist}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
        />
      }
    />
  </Routes>

  <Footer />
</BrowserRouter>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);