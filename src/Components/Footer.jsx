import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const iconStyle = {
    fontSize: "4rem", // Adjust the font size for larger icons
    borderRadius: "50%",
    padding: "20px", // Adjust the padding for larger icons
    backgroundColor: "#3b5998", // Default color for icons
    color: "#fff", // Default color for icon text
  };

  return (
    <div className="p-5 text-center">
      <p>© 2023 All Rights Reserved By StoreCode</p>
      <p>Privacy Policy</p>
      <div>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          <FaFacebook style={iconStyle} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          <FaInstagram style={{ ...iconStyle, backgroundColor: "#e4405f" }} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          <FaLinkedin style={{ ...iconStyle, backgroundColor: "#0077b5" }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
