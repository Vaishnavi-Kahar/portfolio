import React from "react";

const Experience = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="experience-section">
      <div className="mainEx">
        <h1 className="ExHead">Experience</h1>
        <div className="leftEx">icons</div>
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
    </section>
  );
});

export default Experience;
