import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

const DisplayProducts = ({ products, onQuantityChange, handleImageClick }) => {
  return (
    <div>
      {products.map((product) => (
        <Row key={product.id} className="mb-4">
          <Col>
            <Card>
              <Card.Body className="d-flex align-items-center">
                <div>
                  <Card.Title className="mb-0">{product.title}</Card.Title>{" "}
                  <div className="me-3">
                    {" "}
          
                    <Card.Img
                      variant="text"
                      src={product.image}
                      alt={product.title}
                      className="img-fluid"
                      style={{
                        width: "200px",
                        height: "auto",
                        objectFit: "contain",
                      }}
                      onClick={() => handleImageClick(product)}
                    />
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="secondary"
                      onClick={() => onQuantityChange(product.id, -1)}
                    >
                      -
                    </Button>
                    <span>{product.quantity}</span>
                    <Button
                      variant="secondary"
                      onClick={() => onQuantityChange(product.id, 1)}
                    >
                      +
                    </Button>
                  </div>
                  <div className="border rounded p-2 mt-2 text-center">
                    {" "}
                    {/* Quantity selector box */}
                    <p className="m-0">Quantity</p>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        onQuantityChange(product.id, parseInt(e.target.value))
                      }
                      style={{ width: "50px" }}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default DisplayProducts;
