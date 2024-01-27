import React from "react";
import "./ProjectCard.css";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Chip,
  Divider,
  CardMedia,
} from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <Card className="cardContainer">
        <CardMedia
          component="img" // Use "img" component for images
          sx={{
            height: "200px",
            overflow: "hidden",

            borderRadius: "7px",
          }}
          image={project.imageURL}
          title={project.title}
        />
        <CardHeader className="title" title={project.title} />

        <CardContent>
          <Typography variant="body2">{project.content}</Typography>
          <Divider style={{ margin: "10px 0" }} />
          {project.techStack && project.techStack.length > 0 && (
            <div className="techStack">
              {project.techStack.map((tech, index) => (
                <Chip key={index} label={tech} style={{ margin: "4px" }} />
              ))}
            </div>
          )}
          {(project.demo || project.code) && (
            <div className="buttons">
              {project.demo && (
                <Button
                  style={{ margin: "4px", borderRadius: "20px" }}
                  variant="outlined"
                  color="primary"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              )}
              {project.code && (
                <Button
                  style={{ margin: "4px", borderRadius: "20px" }}
                  variant="outlined"
                  color="secondary"
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
