import React from "react";
import { Card, Button, Col, Row, Form } from "react-bootstrap";

const DisplayProducts = ({ products, onQuantityChange, handleImageClick }) => {
  return (
    <div>
      {products.map((product) => (
        <Row key={product.id} className="mb-4">
          <Col>
            <Card>
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={3} className="d-flex flex-column align-items-center">
                    <div className="text-center mb-2">
                      <span>{product.title}</span>
                      <span className="text-danger"> - ${product.price}</span>
                    </div>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.title}
                      className="img-fluid mb-2"
                      style={{
                        width: "100px",
                        height: "auto",
                        objectFit: "contain"
                      }}
                      onClick={() => handleImageClick(product)}
                    />
                  </Col>
                  <Col md={9} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex align-items-center quantity-control">
                      <Button
                        variant="secondary"
                        onClick={() => onQuantityChange(product.id, -1)}
                        className="quantity-button"
                      >
                        -
                      </Button>
                      <span className="quantity-text mx-2">{product.quantity}</span>
                      <Button
                        variant="secondary"
                        onClick={() => onQuantityChange(product.id, 1)}
                        className="quantity-button"
                      >
                        +
                      </Button>
                      <Form.Control
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          onQuantityChange(product.id, parseInt(e.target.value))
                        }
                        style={{ width: "60px" }}
                        className="ml-2"
                      />
                      <Form.Label className="mb-0 ml-2">Quantity</Form.Label>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default DisplayProducts;
