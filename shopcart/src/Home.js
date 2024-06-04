import React from "react";
import DisplayProducts from "./DisplayProducts";

const Home = ({
  products,
  getTotalQuantity,
  onQuantityChange,
  openLightbox,
  layout,
  handleImageClick,
}) => {
  return (
    <div>
      <h1>j</h1>
      {layout === "list" ? (
        <DisplayProducts
          products={products}
          getTotalQuantity={getTotalQuantity}
          onQuantityChange={onQuantityChange}
          openLightbox={openLightbox}
          handleImageClick={handleImageClick}
          layout={layout}
        />
      ) : (
        // Render  
        <DisplayProducts
          products={products}
          getTotalQuantity={getTotalQuantity}
          onQuantityChange={onQuantityChange}
          openLightbox={openLightbox}
          handleImageClick={handleImageClick}
          layout={layout}
        />
      )}
    </div>
  );
};

export default Home;
