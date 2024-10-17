import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.module.css";
import { Footer } from "../Footer";

const Gallery = () => {
  return (
    <Container className="bg-dark">
      <h4 className="text-center text-white p-5">
        Pics never shared without consent
      </h4>
      <script src="https://static.elfsight.com/platform/platform.js" async>
        elfsight
      </script>
      <div
        className="elfsight-app-65954150-555a-40bb-9c8e-d4f0259c6bdf"
        data-elfsight-app-lazy
      ></div>

      <Footer />
    </Container>
  );
};

export default Gallery;
