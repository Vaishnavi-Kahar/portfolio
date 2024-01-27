import { Container, Grid } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      title: "Shopify E-commerce Website",
      imageURL: "images/ecommerce.png",
      content:
        "Developed a complete E-Commerce shopping website with user login and registration, seamless product and order management, and secure payment processing using Stripe .",
      techStack: ["React", "Express", "Node", "MongoDB", "JWT", "Redux"],
      demo: "https://graceful-cendol-9e3538.netlify.app/",
      code: "https://github.com/Vaishnavi-Kahar/e-commerce",
    },
    {
      title: "Sorting Visualizer Application",
      imageURL: "images/sorting.png",
      content:
        "Designed a web application to visualize various sorting algorithms and understanding them through interactive visual representations.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      demo: "https://lighthearted-parfait-807bda.netlify.app/",
      code: "https://github.com/Vaishnavi-Kahar/SortingVisualizer",
    },
    {
      title: "Stock Market Prediction",
      imageURL: "images/stock.png",
      content:
        "Predicting stock prices using various time series forecasting models and evaluated model performance using key metrics such as Mean Squared Error and Mean Absolute Error.",
      techStack: [
        "Python",
        "numpy",
        "pandas",
        "matplotlib",
        "sklearn",
        "tensorflow",
      ],

      code: "https://github.com/Vaishnavi-Kahar/Stock-Market-Prediction",
    },
  ];

  return (
    <Container ref={ref} className="projects-section">
      <div className="projectTitle">Projects</div>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default Projects;
