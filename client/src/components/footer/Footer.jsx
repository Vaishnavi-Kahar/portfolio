import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Form from "../form/Form";

const Footer = React.forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="contact-section">
        <div className="leftFoot">
          <div className="contactHeading">Contact</div>
          <div className="contactPara">Feel free to reach out!</div>
          <div className="linkFoot">
            <div className="linkItem">
              <FontAwesomeIcon icon={faEnvelope} className="linkLogo" />
              <a className="links" href="mailto:vaishnavi22kahar@gmail.com">
                vaishnavi22kahar@gmail.com
              </a>
            </div>

            <div className="linkItem">
              <FontAwesomeIcon icon={faLinkedin} className="linkLogo" />
              <a
                className="links"
                href="https://linkedin.com/in/vaish21/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/vaish21/
              </a>
            </div>
            <div className="linkItem">
              <FontAwesomeIcon icon={faGithub} className="linkLogo" />
              <a
                className="links"
                href="https://github.com/Vaishnavi-Kahar"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Vaishnavi-Kahar
              </a>
            </div>
          </div>
        </div>

        <div className="rightFoot">
          <Form />
        </div>
      </section>
    </>
  );
});

export default Footer;
