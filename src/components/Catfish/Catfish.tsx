import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Catfish.module.css";
import { Footer } from "../Footer";

const catfish = [
  { src: "../catfish1.jpeg", alt: "Instagram account page" },
  { src: "../catfish2.jpeg", alt: "Instagram account page" },
  { src: "../catfish3.jpeg", alt: "Instagram account page" },
  { src: "../catfish4.jpeg", alt: "Instagram account page" },
  { src: "../catfish5.jpeg", alt: "Instagram account page" },
  { src: "../catfish6.jpeg", alt: "Instagram account page" },
  { src: "../catfish7.jpeg", alt: "Instagram account page" },
  { src: "../catfish8.jpeg", alt: "Instagram account page" },
];

const Catfish = () => {
  return (
    <Container className="bg-dark">
      <h4 className="text-center text-white p-5">
        Below is an inventory of stinky catfish or profiles reported to us as
        suspect
      </h4>

      <Row>
        {catfish.map((image, index) => (
          <Col md={3} key={index} className="text-center">
            <div className="catfish-item">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid catfish-image"
                style={{
                  height: "350px",
                  width: "270px",
                  objectFit: "cover",
                  padding: "1rem",
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  );
};

export default Catfish;
