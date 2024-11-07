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

      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        className="elfsight-app-d0806375-7ca1-4645-b7c6-1cbcc688461c"
        data-elfsight-app-lazy
      ></div>

      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        className="elfsight-app-15829d16-0a2c-446f-977f-163b48d30be7"
        data-elfsight-app-lazy
      ></div>

      <Footer />
    </Container>
  );
};

export default Gallery;
