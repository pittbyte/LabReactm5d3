import React from "react";
import {Modal, Button } from "react-bootstrap";

const ProductModal = ({ show, handleClose, product}) => {
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={product.image} alt={product.title} style={{ width: "100%"}} />
                <p>Description: Add product description here</p>
                <p>Ratings: {product.rating}</p> {/*Display ratings */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;