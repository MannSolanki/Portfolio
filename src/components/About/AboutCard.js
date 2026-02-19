import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mann Solanki</span> 
            from <span className="purple">Vadodara, Gujarat, India</span>.
            <br />
            <br />
            I’m currently a <span className="purple">B.Tech student</span> at{" "}
            <span className="purple">Parul University</span>, specializing in{" "}
            <span className="purple">
              Information Technology & Data Analytics
            </span>.
            <br />
            <br />
            I’m a passionate{" "}
            <span className="purple">Frontend Web Developer</span> who enjoys
            building responsive, user-friendly, and modern web applications.
            I love transforming ideas into real-world projects using{" "}
            <span className="purple">
              JavaScript, React.js, Node.js
            </span>{" "}
            and modern UI technologies.
            <br />
            <br />
            I’m always eager to learn new technologies, improve my development
            skills, and build solutions that create meaningful impact.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Creative Web Projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always learning, always building, always growing."
          </p>
          <footer className="blockquote-footer">Mann Solanki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
