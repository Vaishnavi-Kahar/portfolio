import React from "react";
import "./About.css";
const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="mainA">
        <div className="aboutMain">
          <h1 className="aboutHeading">About</h1>
          <div className="aboutDiv">
            <div className="leftAbout">
              <img src="images/about.png" alt="about.png" />
            </div>
            <div className="rightAbout">
              <div className="aboutContent">
                <h3 className="aHead">Frontend developer</h3>
                <p className="aPara">
                  I’m a front-end developer with experience in building
                  responsive and optimized sites
                </p>
              </div>
              <div className="aboutContent">
                <h3 className="aHead">Backend developer</h3>
                <p className="aPara">
                  I have experience developing fast and optimised back-end
                  systems and APIs
                </p>
              </div>
              <div className="aboutContent">
                <h3 className="aHead">UI designer</h3>
                <p className="aPara">
                  I have designed multiple landing pages and have created design
                  systems as well
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
