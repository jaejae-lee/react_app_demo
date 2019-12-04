import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => (
    <ul className="list-group">
      <li className="list-group-item">
  
        <Link to="/">Home</Link>
      </li>
      <li className="list-group-item">
        <Link to="/people">List of People</Link>
      </li>
      <li className="list-group-item">
        <Link to="/Squares">Clicky Squares</Link>
      </li>
      <li className="list-group-item">
        <Link to="/signup">Sign Up here</Link>
      </li>
      <li className="list-group-item">
        <Link to="/prebuilt">Prebuilt components</Link>
      </li>
  </ul> );
 
 export default Footer;