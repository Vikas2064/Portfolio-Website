import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Personal Portfolio"
              description="A collection of My work, experiences, qualifications, skills or accolades you have earned. Created using React, different React module and state management state management library like Recoil."
              ghLink="https://github.com/Vikas2064/Portfolio-Website"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="School Management App"
              description="A fully fledged website for online school mangement with different dashboard for different user levels with admin having full control of the database. Created using HTML, CSS, JavaScript for frontend and express.js, mongoDb for backend."
              ghLink="https://github.com/Vikas2064/School-Management-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News App"
              description="A API based simple news app to show daily news according to the area of interest of the user. Created using React.js"
              ghLink="https://github.com/Vikas2064/DailyNewsApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
