import React from "react";
import {Link} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ getTotalQuantity }) => {
  return (
    <div style={{ position: "absolute", top: 0, right: '50px', left: 'calc(100% - 150px)' }}>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <Link to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{getTotalQuantity()}</span>
      </Link>
    </div>
  );
};

export default Navbar;