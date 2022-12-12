import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <div>
      
        <div className="footercontainer">
          <div>
          <a href="https://www.instagram.com">
            <FaInstagram
              size={30}
              style={{ color: "#cf4520", marginRight: "2rem" }} />
          </a>
          </div>
          <div>
          <a href="https://www.linkdin.com">
            <FaLinkedin
              size={30}
              style={{ color: "#cf4520", marginRight: "2rem" }} />
          </a>
          </div>
          <FaMailBulk
            size={20}
            style={{ color: "#cf4520", marginRight: "2rem" }} />
        </div>
     
    </div>
  );
}

export default Footer;
