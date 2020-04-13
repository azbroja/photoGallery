import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Search</Link>
    </li>
    <li>
      <Link to="/favorites">Favorites</Link>
    </li>
  </ul>
);

export default Navigation;
