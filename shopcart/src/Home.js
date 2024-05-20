import React from "react";
import DisplayProducts from "./DisplayProducts";


const Home = ({ products, getTotalQuantity }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <DisplayProducts products={products} getTotalQuantity={getTotalQuantity} />
    </div>
  );
};

export default Home;