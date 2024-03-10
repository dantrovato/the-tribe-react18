import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.module.css"; // Import your custom CSS file

const wet = [
  { src: ".././wetblackwhite.jpeg", alt: "fava" },
  { src: ".././chrisrtizt.jpeg", alt: "fava" },
  { src: "../././nickfoxrtizt.jpeg", alt: "fava" },
  { src: "../ariel.jpeg", alt: "fava" },

  { src: "../sharkcolour.jpeg", alt: "fava" },
  { src: "../WET/anabum.jpg", alt: "fava" },
  { src: "../WET/rox1.jpg", alt: "fava" },
  { src: "../WET/muff.jpg", alt: "fava" },
  { src: "../WET/chloemerlinmegan.jpg", alt: "fava" },
  { src: "../WET/astraunaut.jpg", alt: "fava" },
  { src: "../WET/balls.jpg", alt: "fava" },
  { src: "../WET/crab.jpg", alt: "fava" },
  { src: "../WET/decorations1.jpg", alt: "fava" },
  { src: "../WET/dmarcus.jpg", alt: "fava" },
  { src: "../WET/jelly2.jpg", alt: "fava" },
  { src: "../WET/jellyfish.jpg", alt: "fava" },
  { src: "../WET/leon.jpg", alt: "fava" },
  { src: "../WET/matthewdenise.jpg", alt: "fava" },
  { src: "../WET/rox2.jpg", alt: "fava" },
  { src: "../WET/roxbobjaz.jpg", alt: "fava" },
  { src: "../WET/seahorse.jpg", alt: "fava" },
  { src: "../WET/tribebanner.jpg", alt: "fava" },
  { src: "../jamesp.jpeg", alt: "fava" },
];
const jungle = [
  { src: "../seanlucy.jpeg", alt: "fava" },
  { src: "../chriskiko.jpeg", alt: "fava" },
  { src: "../chrisdemi.jpeg", alt: "fava" },
  { src: "../merlincarlotanegin.jpeg", alt: "fava" },
  { src: "../stairs.jpeg", alt: "fava" },
  { src: "../leonnegin.jpeg", alt: "fava" },
  { src: "../danjungle.jpeg", alt: "fava" },
  { src: "../junglesetup.jpeg", alt: "fava" },
  { src: "../yenemmaapple.jpeg", alt: "fava" },
];

const Gallery = () => {
  return (
    <Container className="bg-dark">
      <img
        src="wet.png"
        alt="Sexy girl semi naked holding beer over her breast"
        className="mx-auto d-block mb-4"
        style={{ maxWidth: "100%", paddingTop: "2rem" }}
      />
      <h4 className="text-center text-white p-4">Wet dreams did come true</h4>

      <Row>
        {wet.map((image, index) => (
          <Col md={3} key={index} className="text-center">
            <div className="gallery-item">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid gallery-image"
                style={{
                  height: "350px",
                  width: "270px",
                  objectFit: "cover",
                  padding: "1rem",
                }} // Apply inline styles here
              />
            </div>
          </Col>
        ))}
        <img
          src="jungle.jpeg"
          alt="Sexy girl semi naked holding beer over her breast"
          className="mx-auto d-block mb-4"
          style={{ maxWidth: "52rem", paddingTop: "2rem" }}
        />
        <h4 className="text-center text-white p-4">
          Welcome to the jungle October 2023
        </h4>
      </Row>
      <Row>
        {jungle.map((image, index) => (
          <Col md={3} key={index} className="text-center">
            <div className="gallery-item">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid gallery-image"
                style={{
                  height: "350px",
                  width: "270px",
                  objectFit: "cover",
                  padding: "1rem",
                }} // Apply inline styles here
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
