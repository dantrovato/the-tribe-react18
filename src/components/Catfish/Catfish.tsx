import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Catfish.module.css";
import { Footer } from "../Footer";

const catfish = [
  { src: "../Catfish/catfish1.jpeg", alt: "Instagram account page" },
  { src: "../Catfish/catfish2.jpeg", alt: "Instagram account page" },
  { src: "../Catfish/catfish3.jpeg", alt: "Instagram account page" },
  { src: "../Catfish/catfish4.jpeg", alt: "Instagram account page" },
  { src: "../Catfish/catfish5.jpeg", alt: "Instagram account page" },
  { src: "../Catfish/catfish6.jpeg", alt: "Instagram account page" },
  { src: "../Catfish/catfish7.jpeg", alt: "Instagram account page" },
  { src: "../Catfish/catfish8.jpeg", alt: "Instagram account page" },
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
