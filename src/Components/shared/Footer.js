import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="address">
        <i class="far fa-building"></i>
        <p>Wendenstraße 11, 22111 Hamburg</p>
        </div>
        <div className="vl"></div>
       
          <ul className="all-links">
            <li className="links">
              <Link className="link" to="/">Home </Link>
            </li>
            <li className="links">
              <Link className="link" to="/about">About </Link>
            </li>
            <li className="links">
              <Link className="link" to="/contact">Contact </Link>
            </li >
            <li className="links">
              <Link className="link" to="/careers">Careers </Link>
            </li>
          </ul>
          <div className="vl"></div>
          <div className="anchor-heading">
        <div className="anchors">
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com/Connecting-People-104799601625055/">
          <FaFacebook className="media-icons blue" />
        </a>
        <a href="https://www.instagram.com/connecting_minds_2021/">
          <FaInstagram className="media-icons pink"/>
        </a>
        <a href="https://twitter.com/home">
          <FaTwitter className="media-icons blue"/>
        </a>
        </div>
        <h5> © 2021 Connecting Minds</h5>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
