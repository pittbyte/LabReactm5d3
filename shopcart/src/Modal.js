import React from "react";
import { Modal } from "react-bootstrap"; 
import "./Lightbox.css";

const Lightbox = ({ product, onClose, isOpen }) => {
  return (
    <Modal show={isOpen} onHide={onClose} dialogClassName="lightbox-modal">
      <Modal.Body>
        <div className="lightbox-content">
          <div className="close-btn" onClick={onClose}>
            X
          </div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <div className="ratings">{product.ratings}</div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Lightbox;
