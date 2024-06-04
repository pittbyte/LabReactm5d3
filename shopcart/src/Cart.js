import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ products, layout }) => {
  const cartItems = products.filter((product) => product.quantity > 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart Items</h2>
      {cartItems.length === 0 ? (
        <div>
        <p>There are 0 items in your cart.</p>
        <Link to="/" className="btn btn-success mt-3">Continue Shop</Link>
        </div> 
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((product) => (
              <li key={product.id} className="list-group-item">
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <h6>{product.title}</h6>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="btn btn-primary mt-3">
            Check Out
          </Link>
        </>
      )}
    </div>
  );
};


export default Cart;
