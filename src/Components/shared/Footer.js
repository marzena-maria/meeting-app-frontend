import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div>
        <div>
        <ul>
                <li>
                    <Link to='/' >Home </Link>
                </li>
                <li>
                    <Link to='/about' >About </Link>
                </li>
                <li>
                    <Link to='/contact' >Contact </Link>
                </li>
                </ul>
        </div>
          <h3>Follow Us</h3>
        <a href="https://www.facebook.com/Connecting-People-104799601625055/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/connecting_minds_2021/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/home">
          <FaTwitter />
        </a>
      </div>
      © 2021 Connecting Minds
    </div>
  );
}

export default Footer;
