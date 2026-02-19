import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import scrappy from "../../Assets/Projects/scrappy.png";
import todo from "../../Assets/Projects/todo.png";
import eventify from "../../Assets/Projects/eventify.png";

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

          {/* Todo List */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List App"
              description="Simple task management app built with JavaScript/React. Users can add, delete and manage daily tasks easily."
              ghLink="https://github.com/MannSolanki/WDF_Test"
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

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
