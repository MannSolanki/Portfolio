import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I’m <b className="purple">Mann Solanki</b>, a passionate 
              <b className="purple"> Frontend & Web Developer</b> who loves 
              building modern, responsive, and user-friendly websites.
              <br />
              <br />

              I mainly work with
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, React.js, Bootstrap, and modern UI tools
                </b>
              </i>{" "}
              to create clean and interactive web experiences.
              <br />
              <br />

              My interest lies in developing
              <i>
                <b className="purple">
                  {" "}
                  responsive web apps, creative UI designs,
                </b>
              </i>{" "}
              and improving user experience through smooth animations 
              and performance optimization.
              <br />
              <br />

              I enjoy learning new technologies, building projects,
              and constantly improving my skills to become a better
              <b className="purple"> full-stack developer</b> in the future.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
