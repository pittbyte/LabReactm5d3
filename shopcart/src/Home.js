import React from "react";
import DisplayProducts from "./DisplayProducts";
import { Container, Row, Col, Form } from "react-bootstrap";

const Home = ({
  products,
  getTotalQuantity,
  onQuantityChange,
  openLightbox,
  layout,
  handleImageClick,
  sortOption,
  handleSortChange
}) => {

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'lowest':
        return a.price - b.price;
      case 'highest':
        return b.price - a.price;
      case 'normal':
      default:
        return 0;
    }
  });

  return (
    <Container>
      <Row className="justify-content-center mb-3">
        <Col xs="auto">
          <h1>Product List</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col xs="auto" className="d-flex align-items-center">
          <Form.Label className="mb-0 mr-2">Sort Price By:</Form.Label>
          <Form.Control
            as="select"
            value={sortOption}
            onChange={handleSortChange}
            className="ml-2"
            style={{ width: 'auto' }}
          >
            <option value="normal">Normal</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          {layout === "list" ? (
            <DisplayProducts
              products={sortedProducts}
              getTotalQuantity={getTotalQuantity}
              onQuantityChange={onQuantityChange}
              openLightbox={openLightbox}
              handleImageClick={handleImageClick}
              layout={layout}
            />
          ) : (
            <DisplayProducts
              products={sortedProducts}
              getTotalQuantity={getTotalQuantity}
              onQuantityChange={onQuantityChange}
              openLightbox={openLightbox}
              handleImageClick={handleImageClick}
              layout={layout}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;