import React, { useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import { Modal, Button } from "react-bootstrap";
import ProductModal from "./ProductModal"; // Import ProductModal component

const DisplayProducts = ({ products, getTotalQuantity }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => {
    setActiveProduct({ ...product, quantity: product.quantity || 0 }); // Ensure quantity is defined
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAdd = () => {
    if (activeProduct) {
      const updatedQuantity = (activeProduct.quantity || 0) + 1;
      setActiveProduct({ ...activeProduct, quantity: updatedQuantity });
    }
  };

  const handleSubtract = () => {
    if (activeProduct && (activeProduct.quantity || 0) > 0) {
      const updatedQuantity = activeProduct.quantity - 1;
      setActiveProduct({ ...activeProduct, quantity: updatedQuantity });
    }
  };

  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({}); // Corrected variable name
  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImage(product);
  };

  return (
    <>
      <Products products={products} onProductClick={handleProductClick} />
      <Navbar getTotalQuantity={getTotalQuantity} />
      <ProductModal show={showModal} handleClose={handleCloseModal} product={activeProduct} />
      {/* + & - btns */}
      {activeProduct && (
        <div>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
          <Button variant="danger" onClick={handleSubtract}>Subtract</Button>
          <p>Quantity: {activeProduct.quantity}</p>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImage.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImage.image}
            width="350"
            alt={showImage.desc}
            className="mx-5"
          />
          <p><span className="text-dark">Ratings:</span> {showImage.ratings}/5</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplayProducts;