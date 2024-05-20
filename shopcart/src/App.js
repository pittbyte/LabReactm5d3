import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";

const ShoppingCartApp = () => {
  const [products, setProducts] = useState([
    { id: 0, title: "Unisex Cologne", quantity: 0, image: "/cologne.jpg" },
    { id: 1, title: "Apple iWatch", quantity: 0, image: "/iwatch.jpg" },
    { id: 2, title: "Unique Mug", quantity: 0, image: "/mug.jpg" },
    { id: 3, title: "Men's Wallet", quantity: 0, image: "/wallet.jpg" },
  ]);
  const [cart, setCart] = useState([]);

  const getTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const handleAdd = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleSubtract = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  const handleAddToCart =(product) =>
    {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
    };
  return (
    <Router>
      <Navbar getTotalQuantity={getTotalQuantity} />
      <Routes>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              products={products}
              getTotalQuantity={getTotalQuantity}
              onAdd={handleAdd}
              onSubtract={handleSubtract}
              onAddToCart={handleAddToCart}
            />
          )}
        />
        <Route
          exact
          path="/cart"
          render={(props) => <Cart {...props} cart={cart} />}
        />
      </Routes>
    </Router>
  );
};

export default ShoppingCartApp;
