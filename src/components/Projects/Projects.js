import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import glamour from "../../Assets/Projects/glamour.png";
import cert from "../../Assets/Projects/certificate.png";
import abeezcreation from "../../Assets/Projects/abeezcreation.png";
import gmt from "../../Assets/Projects/gmtsoftware.png";
import azim from "../../Assets/Projects/azimhealth.png";

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
              imgPath={abeezcreation}
              isBlog={false}
              title="ABEEZCREATION"
              description="Abeezcreation is more than just a photography brand; it's a journey through the lens, capturing the essence of life's most precious moments. With a keen eye for detail and a passion for storytelling, we specialize in crafting timeless photographs that resonate with emotion and authenticity. Whether it's a wedding, a portrait session, or a special event, our mission is to freeze-frame those fleeting moments, preserving them for a lifetime of cherished memories.."
              ghLink="https://github.com/codebyabraham/abeezcreation"
              demoLink="https://abeezcreation.vercel.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={azim}
              isBlog={false}
              title="AzimhealthAI"
              description="AzimhealthAI is a cutting-edge web platform designed to streamline data collection and analysis for medical institutions. Our intuitive interface simplifies the process of gathering critical patient information, allowing healthcare professionals to make more informed decisions and deliver personalized care. By harnessing the power of artificial intelligence and machine learning, we're revolutionizing the way medical data is collected, paving the way for enhanced efficiency, accuracy, and ultimately, better patient outcomes."
              ghLink="https://github.com/codebyabraham/AzimhealthAI"
              demoLink="https://www.azimhealthai.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert}
              isBlog={false}
              title="Certificate"
              description="Streamlining Credential Management.
              Say goodbye to paperwork and administrative headaches with our innovative certificate portal. Designed to simplify the process of managing certifications and credentials, our platform offers a centralized hub for storing, tracking, and verifying important documents. Whether you're an individual seeking to organize your qualifications or an organization tasked with managing a large volume of certificates, our user-friendly interface and robust features make certificate management a breeze."
              ghLink="https://github.com/codebyabraham/Certportal"
              demoLink="https://certportal.vercel.app//"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glamour}
              isBlog={false}
              title="GlamourGroove"
              description="Redefining Fashion in the Digital Age
              Step into the world of glamourgroove, where style meets substance in every stitch and seam. Our fashion brand website is more than just an online store; it's a curated showcase of the latest trends, timeless classics, and everything in between. From haute couture to casual chic, we offer a diverse range of apparel and accessories to suit every taste and occasion. With a focus on quality, sustainability, and inclusivity, we're redefining the fashion landscape one click at a time."
              ghLink="https://github.com/codebyabraham/glamourgrove"
              demoLink="https://glamourgrove.vercel.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmt}
              isBlog={false}
              title="GMTSoftware"
              description="Unlock Your Coding Potential
              Embark on a transformative journey into the world of programming with GMTSoftware. Our bootcamp offers aspiring developers the opportunity to learn and master a diverse array of programming languages, frameworks, and tools. From Python to JavaScript, HTML/CSS to React, our comprehensive curriculum covers all the essentials for building real-world applications and launching a successful career in tech. With hands-on projects, expert instructors, and a supportive community, we're here to help you unlock your coding potential and thrive in the digital age."
              ghLink="https://github.com/codebyabraham/GMTsoftware-Portal-Codebase"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
