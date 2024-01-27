import React from "react";
import "./Experience.css";
import { Container } from "@mui/material";

const Experience = React.forwardRef((props, ref) => {
  return <Container ref={ref}></Container>;
});

export default Experience;

/* <div className="mainEx">
  <h1 className="ExHead">Experience</h1>
  <div className="ExDiv">
    <div className="leftEx">
      <img src="./images/html.png" alt="html.png" />
      <img src="./images/css.png" alt="html.png" />
      <img src="./images/react.png" alt="html.png" />
      <img src="./images/node.png" alt="html.png" />
      <img src="./images/mongodb.png" alt="html.png" />
    </div>
    <div className="rightEx">
      <div className="exContent">
        <h3 className="exTitle">Title</h3>
        <p className="exTime">Sept, 2022 - Present</p>
        <p className="exPara">
          <ul>
            <li>Worked on Google Maps </li>
            <li>Reduced load times by 50%</li>
          </ul>
        </p>
      </div>
      <div className="exContent">
        <h3 className="exTitle">Title</h3>
        <p className="exTime">Sept, 2022 - Present</p>
        <p className="exPara">
          <ul>
            <li>Worked on Google Maps </li>
            <li>Reduced load times by 50%</li>
          </ul>
        </p>
      </div>
      <div className="exContent">
        <h3 className="exTitle">Title</h3>
        <p className="exTime">Sept, 2022 - Present</p>
        <p className="exPara">
          <ul>
            <li>Worked on Google Maps </li>
            <li>Reduced load times by 50%</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</div>; */
