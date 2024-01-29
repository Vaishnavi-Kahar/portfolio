import React from "react";
import "./About.css";
import { Grid } from "@mui/material";

const imgURLs = [
  "./images/cpp.png",
  "./images/python.png",
  "./images/html.png",
  "./images/css.png",
  "./images/react.png",
  "./images/node.png",
  "./images/express.png",
  "./images/mongodb.png",

  // Add more image URLs as needed
];
const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="mainA">
        <div className="aboutMain">
          <h1 className="aboutHeading">Skills and Experience</h1>
          <div className="aboutDiv">
            <div className="leftAbout">
              {/* <h1>Skills</h1> */}
              <Grid container spacing={1}>
                {imgURLs.map((url, index) => (
                  <Grid item key={index} xs={6} sm={4} md={4}>
                    <div className="skill-container">
                      <div className="skill-circle">
                        <img src={url} alt={`Skill ${index}`} />
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div className="rightAbout">
              {/* <h1>Experience</h1> */}
              <div className="aboutContent">
                <h3 className="aHead">ARISTA Fellowship</h3>
                <p className="aDate">Aug 2022 - April 2023</p>

                <p className="aPara">
                  <ul>
                    <li>
                      Developed a machine learning-driven slip prediction system
                      for a robot with see-saw-like motion, ensuring object
                      stability during user-controlled motion.
                    </li>
                    <li>
                      Implemented a probabilistic event detector model with
                      parameters α and β to enhance slip prediction accuracy.
                    </li>
                  </ul>
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
