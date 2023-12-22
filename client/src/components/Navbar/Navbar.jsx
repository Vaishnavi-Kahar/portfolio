import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ aboutRef, experienceRef, projectsRef, contactRef }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNavItems, setShowNavItems] = useState(false);
  const breakpoint = 909; // Adjust the breakpoint according to your design

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleNavToggle = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <div className="nav">
      <div className="leftNav">Portfolio</div>
      <div className="rightNav">
        {windowWidth <= breakpoint ? (
          <div className="rightNavIcon" onClick={handleNavToggle}>
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          </div>
        ) : (
          <>
            <div
              className="rightContent"
              onClick={() => handleNavigation(aboutRef)}
            >
              About
            </div>
            <div
              className="rightContent"
              onClick={() => handleNavigation(experienceRef)}
            >
              Experience
            </div>
            <div
              className="rightContent"
              onClick={() => handleNavigation(projectsRef)}
            >
              Projects
            </div>
            <div
              className="rightContent"
              onClick={() => handleNavigation(contactRef)}
            >
              Contact
            </div>
          </>
        )}
        {/* Show items below the icon on smaller screens */}
        {windowWidth <= breakpoint && showNavItems && (
          <div className="rightNavColumn show">
            <div
              className="rightContent"
              onClick={() => handleNavigation(aboutRef)}
            >
              About
            </div>
            <div
              className="rightContent"
              onClick={() => handleNavigation(experienceRef)}
            >
              Experience
            </div>
            <div
              className="rightContent"
              onClick={() => handleNavigation(projectsRef)}
            >
              Projects
            </div>
            <div
              className="rightContent"
              onClick={() => handleNavigation(contactRef)}
            >
              Contact
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
