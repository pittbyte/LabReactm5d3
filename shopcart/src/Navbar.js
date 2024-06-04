import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';  

const Navbar = ({ title, getTotalQuantity }) => {
  return (
    <div className="row navbar-custom">
      <div className="col-8 py-3">
        <Link to="/" className="text-white text-decoration-none d-flex align-items-center">
          <h1 className="text-white mb-0">
          {title} <span className="react-icon">R</span>eact
          </h1>
        </Link>
      </div>
      <div className="col-4 py-3 d-flex justify-content-end align-items-center">
        <Link to="/cart" className="text-white text-decoration-none">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>{getTotalQuantity()}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;