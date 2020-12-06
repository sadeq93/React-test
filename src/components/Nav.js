import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/radar">Radar</Link>
      <Link to="/bar">Bar</Link>
    </div>
  );
};
export default Nav;
