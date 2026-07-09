import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import scrappy from "../../Assets/Projects/scrappy.png";
import eventify from "../../Assets/Projects/eventify.png";
import bmw from "../../Assets/Projects/bmw.png";
import imagineAi from "../../Assets/Projects/ImagineAi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my main projects.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Scrappy Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrappy}
              isBlog={false}
              title="Scrappy"
              description="Eco-friendly web platform that transforms waste into value. Helps users trade recyclable materials and promote sustainability."
              ghLink="https://github.com/MannSolanki/Scrappy"
            />
          </Col>


          {/* Eventify */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventify}
              isBlog={false}
              title="Eventify"
              description="Platform to compare and book catering & photography services for events with an easy and modern interface."
              ghLink="https://github.com/Ankiitsuthar/Eventify"
            />
          </Col>

          {/* BMW Experience */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmw}
              isBlog={false}
              title="BMW Experience Website"
              description="Cinematic, luxury-style car browsing experience with premium animations and BMW M stripe hover effects. Responsive design for multiple car model showcase."
              ghLink="https://github.com/MannSolanki/BMW--showroom"
              demoLink="https://bmw-motion.netlify.app"
            />
          </Col>

          {/* Imagine AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagineAi}
              isBlog={false}
              title="Imagine AI"
              description={
                "AI-powered image-to-image generation platform that transforms uploaded images into creative AI-generated visuals using modern AI models and an interactive UI."
              }
              ghLink="https://github.com/MannSolanki/Imagine-AI"
              demoLink="https://your-imagine-ai-demo.example.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
