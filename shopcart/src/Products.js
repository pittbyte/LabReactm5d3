import React from "react";

const Products = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {products.map((product) => (
            <div key={product.id} className="card my-3">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div style={{ marginRight: "20px" }}>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        console.log("Quantity changed:", e.target.value)
                      }
                      style={{ width: "30px", marginLeft: "160px" }}
                    />
                  </div>
                  <div style={{ marginRight: "auto" }}>
                    <p className="card-text">quantity</p>
                  </div>
                </div>
              </div>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{
                  height: "100px",
                  width: "100px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
