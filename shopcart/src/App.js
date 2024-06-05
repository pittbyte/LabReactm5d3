import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import OAuth from "./OAuth";
import Lightbox from "./Modal";

class ShoppingCartApp extends Component {
  state = {
    products: [
      { id: 0, title: "Unisex Cologne", quantity: 0, image: "/cologne.jpg", price: 35, rating: "4", value: 0 },
      { id: 1, title: "Apple iWatch", quantity: 0, image: "/iwatch.jpg",  price: 199, rating: "3.5", value: 0 },
      { id: 2, title: "Unique Mug", quantity: 0, image: "/mug.jpg",  price: 15, rating: "5", value: 0 },
      { id: 3, title: "Men's Wallet", quantity: 0, image: "/wallet.jpg",  price: 48, rating: "4.5", value: 0},
    ],
    isLightboxOpen: false,
    selectedProduct: null,
    layout: "list", // Default Layout
    isAuthenticated: false, // To manage authentication state
    user: null, // To manage user data
    sortOption: 'normal',
  }; 

  handleSortChange = (event) => {
    this.setState({ sortOption: event.target.value });
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
    this.openLightbox(product);
  };

  handleLogin = (response) => {
    if (response.accessToken || (response.name && response.email)) {
      this.setState({ isAuthenticated: true, user: response });
    }
  };

  render() {
    const { products, isLightboxOpen, selectedProduct, layout, isAuthenticated, sortOption } = this.state;

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
                sortOption={sortOption}
                handleSortChange={this.handleSortChange}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart products={products} layout={layout} />}
          />
          <Route
            path="/checkout"
            element={isAuthenticated ? <CheckOut /> : <OAuth onLogin={this.handleLogin} />}
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