import React from "react";
import "./Profile.css";
const Profile = () => {
  const redirectToResume = () => {
    // Open your resume link in a new tab
    window.open(
      "https://drive.google.com/file/d/1CaapcEpisk6423yxIltjKk7t087ltjEZ/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="mainProf">
      <div className="leftProf">
        <h1 className="heading">Hi, I'm Vaishnavi</h1>
        <p className="para">
          I’m a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you’d like to learn more!
        </p>
        <div className="contactMe">
          <div className="butt" onClick={redirectToResume}>
            My Resume
          </div>
        </div>
      </div>
      <div className="rightProf">
        <div className="image-container">
          <img
            loading="lazy"
            src="./images/Mypic2.jpg"
            alt="Profile"
            className="circular-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
