import React from "react";
import "./Skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgURLs = [
  "./images/html.png",
  "./images/css.png",
  "./images/react.png",
  "./images/mongodb.png",
  "./images/node.png",
  "./images/html.png",
  "./images/css.png",
  "./images/react.png",
  "./images/mongodb.png",
  "./images/node.png",
  // Add more image URLs as needed
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "red", fontSize: "24px", marginLeft: "-20px" }}
      onClick={onClick}
    >
      Previous
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "green",
        fontSize: "24px",
        marginRight: "-20px",
      }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {imgURLs.map((url, index) => (
          <div key={index}>
            <img
              className="slider-image"
              src={url}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
