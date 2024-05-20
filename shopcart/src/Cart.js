import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      {/* Render the cart items here */}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} style={{ width: "50px" }} />
            <div>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
