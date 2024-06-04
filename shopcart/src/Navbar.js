import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ title, getTotalQuantity }) => {
  return (
    <div className="row">
      <div className="col-8 bg-primary py-3">
        <Link to="/" className="text-white text-decoration-none">
          <h1 className="text-white">{title} <FontAwesomeIcon icon={faReact} style={{ backgroundColor: "black", color: "white", borderRadius: "50%", padding: "5px" }} /></h1>
        </Link>
      </div>
      <div className="col-4 bg-primary py-3 d-flex justify-content-end align-items-center">
        <Link to="/cart" className="text-white text-decoration-none">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>{getTotalQuantity()}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;