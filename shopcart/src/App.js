import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ShoppingCartApp extends Component {
  state = {
    products: [
      { id: 0, title: "Unisex Cologne", quantity: 0, image: "/cologne.jpg" },
      { id: 1, title: "Apple iWatch", quantity: 0, image: "/iwatch.jpg" },
      { id: 2, title: "Unique Mug", quantity: 0, image: "/mug.jpg" },
      { id: 3, title: "Men's Wallet", quantity: 0, image: "/wallet.jpg" },
    ],
    cart: [],
  };

  getTotalQuantity = () => {
    const { cart } = this.state;
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  render() {
    const { products } = this.state;

    return (
      <div className="container" style={{ position: "relative" }}>
        <div className="row">
          <div className="col">
            <h1 className="bg-info text-black p-3">Shop to React</h1>
            {products.map((product) => (
              <div key={product.id} className="card my-3">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                  <div style={{ marginRight: "20px" }}> 
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) => console.log("Quantity changed:", e.target.value)}
                      style={{ width: "30px", marginLeft: "160px"}}
                    />
                    </div>
                    <div style={{ marginRight: "auto" }}>
                      <p className="card-text">quantity</p>
                    </div>
                  </div>
                </div>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      style={{
                        height: "100px",
                        width: "100px",
                        objectFit: "cover",
                      }}
                    />
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>{this.getTotalQuantity()}</span>
        </div>
      </div>
    );
  }
}

export default ShoppingCartApp;
