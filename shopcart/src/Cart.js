import React from "react";

const Cart = ({ products, layout }) => {
  const cartItems = products.filter((product) => product.quantity > 0);

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;
