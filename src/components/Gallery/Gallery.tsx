import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.module.css"; // Import your custom CSS file

const wet = [
  { src: ".././wetblackwhite.jpeg", alt: "party people" },
  { src: ".././chrisrtizt.jpeg", alt: "two men in neptune outfits" },
  { src: "../././nickfoxrtizt.jpeg", alt: "people in sexy sea themed outfits" },
  {
    src: "../ariel.jpeg",
    alt: "sign that says 'ariel only wanted legs so she could open them'",
  },

  { src: "../sharkcolour.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../WET/anabum.jpg", alt: "sexy girl in lingerie" },
  { src: "../WET/rox1.jpg", alt: "sexy girl in lingerie" },
  { src: "../WET/muff.jpg", alt: "sign that says no muff diving" },
  {
    src: "../WET/chloemerlinmegan.jpg",
    alt: "people in sexy sea themed outfits",
  },
  { src: "../WET/astraunaut.jpg", alt: "tapestry of underwater astronaut" },
  { src: "../WET/balls.jpg", alt: "balls in a ballpit" },
  { src: "../WET/crab.jpg", alt: "sign that says 'eat me like a crab'" },
  { src: "../WET/decorations1.jpg", alt: "decorations" },
  { src: "../WET/dmarcus.jpg", alt: "fava" },
  { src: "../WET/jelly2.jpg", alt: "jellyfish decoration" },
  { src: "../WET/jellyfish.jpg", alt: "jellyfish decoration" },
  { src: "../WET/leon.jpg", alt: "people in sexy sea themed outfits" },
  { src: "../WET/matthewdenise.jpg", alt: "people in sexy sea themed outfits" },
  { src: "../WET/rox2.jpg", alt: "sexy girl in lingerie" },
  { src: "../WET/roxbobjaz.jpg", alt: "people in sexy sea themed outfits" },
  {
    src: "../WET/seahorse.jpg",
    alt: "sign that says 'you are hung like a horse'",
  },
  { src: "../WET/tribebanner.jpg", alt: "banner of a logo" },
  { src: "../jamesp.jpeg", alt: "party boy" },
];
const jungle = [
  { src: "../seanlucy.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../chriskiko.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../chrisdemi.jpeg", alt: "people in sexy sea themed outfits" },
  {
    src: "../merlincarlotanegin.jpeg",
    alt: "people in sexy sea themed outfits",
  },
  { src: "../stairs.jpeg", alt: "stairs decorated like a jungle" },
  { src: "../carlotamerlin.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../leonnegin.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../danjungle.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../junglesetup.jpeg", alt: "Jungle decorations" },
  {
    src: "../yenemmaapple.jpeg",
    alt: "people in sexy sea themed outfits biting apple together",
  },
  { src: "../louisiana.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../carlotajungle.jpeg", alt: "people in sexy sea themed outfits" },
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
