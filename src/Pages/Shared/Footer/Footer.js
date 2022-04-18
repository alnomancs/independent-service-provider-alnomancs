import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" text-center py-3 bg-dark text-white">
      Copyright © {new Date().getFullYear()} Muzmatch.com
    </footer>
  );
};

export default Footer;
