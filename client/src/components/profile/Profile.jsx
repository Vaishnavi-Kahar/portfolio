import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="mainProf">
      <div className="leftProf">
        <h1 className="heading">Hi, I'm Vaishnavi</h1>
        <p className="para">
          I’m a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you’d like to learn more!
        </p>
        <div className="contactMe">
          <div className="butt">Contact Me</div>
        </div>
      </div>
      <div className="rightProf">
        <div className="image-container">
          <img
            src="./images/profile.png"
            alt="Profile"
            className="circular-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
