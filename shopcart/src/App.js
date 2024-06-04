import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import Lightbox from "./Modal";

class ShoppingCartApp extends Component {
  state = {
    products: [
      { id: 0, title: "Unisex Cologne", quantity: 2, image: "/cologne.jpg" },
      { id: 1, title: "Apple iWatch", quantity: 1, image: "/iwatch.jpg" },
      { id: 2, title: "Unique Mug", quantity: 3, image: "/mug.jpg" },
      { id: 3, title: "Men's Wallet", quantity: 0, image: "/wallet.jpg" },
    ],
    isLightboxOpen: false,
    selectedProduct: null,
    layout: "list", // Default Layout
  };

  getTotalQuantity = () => {
    const { products } = this.state;
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  handleQuantityChange = (id, delta) => {
    this.setState((prevState) => {
      const products = prevState.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: Math.max(0, product.quantity + delta),
          };
        }
        return product;
      });
      return { products };
    });
  };

  openLightbox = (product) => {
    this.setState({
      isLightboxOpen: true,
      selectedProduct: product,
    });
  };

  closeLightbox = () => {
    this.setState({
      isLightboxOpen: false,
      selectedProduct: null,
    });
  };

  handleImageClick = (product) => {
    this.openLightbox( product);
    
  };

  render() {
    const { products, isLightboxOpen, selectedProduct, layout } = this.state;

    return (
      <Router>
        <Navbar title="Shop2" getTotalQuantity={this.getTotalQuantity} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                getTotalQuantity={this.getTotalQuantity}
                onQuantityChange={this.handleQuantityChange}
                openLightbox={this.openLightbox}
                layout={layout}
                handleImageClick={this.handleImageClick}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart products={products} layout={layout} />}
          />
        </Routes>
        {isLightboxOpen && (
          <Lightbox
            product={selectedProduct}
            onClose={this.closeLightbox}
            layout={layout}
            isOpen={isLightboxOpen}
          />
        )}
      </Router>
    );
  }
}

export default ShoppingCartApp;
