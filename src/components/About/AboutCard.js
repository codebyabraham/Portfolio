import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abraham Yusuf </span>
            from <span className="purple"> Abuja, Nigeria.</span>
            <br />
            I am currently employed as a software developer at GMTSoftware.
            <br />
            I have a Bachelor of Science (BSc) degree in Computer Science at ABU
            Zaria.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography & Cinematography
            </li>
            <li className="about-activity">
              <ImPointRight /> TV Presenting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There's Beauty in Creativity!"{" "}
          </p>
          <footer className="blockquote-footer">Abraham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
