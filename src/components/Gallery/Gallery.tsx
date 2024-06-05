import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.module.css";
import { Footer } from "../Footer";

const rockhard = [
  { src: "../Rockhard/anotherprick.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/abbygradyrox.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/abbyroxkiss.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/abicourtney.jpeg", alt: "gitl in ballpit in uv room" },
  {
    src: "../Rockhard/arihollyroxrtizt.jpeg",
    alt: "gitl in ballpit in uv room",
  },
  {
    src: "../Rockhard/danroxhard.jpeg",
    alt: "gitl in ballpit in uv room",
  },
  {
    src: "../Rockhard/dimitriholliehug.jpeg",
    alt: "gitl in ballpit in uv room",
  },
  {
    src: "../Rockhard/dimitrispanksrox.jpeg",
    alt: "gitl in ballpit in uv room",
  },
  { src: "../Rockhard/donnakikorox.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/donnamac.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/donnamac2.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/emmablur.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/epicceiling.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/girltrain.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/gradykikorox.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/hollielaugh.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/hollieroxrtizt.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/hollietamas.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/jamesjamie.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/jamierori.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/kikodj.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/kikoguns.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/kitchenchill.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/kitchencuddle.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/lindsayholdem.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/kitchenchill.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/linprismag.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/linprismag2.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/makguns.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/michaellicking.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/perigirl.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/perigirl2.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/posters1.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/posters2.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/posters3.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/posters4.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/posters5.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/prisbum.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/prisjames.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/roxsophie.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/sofiesnick.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/tamasjanecute.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/tamasjanekiss.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/tamasuendel.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Rockhard/thegrope.jpeg", alt: "gitl in ballpit in uv room" },
];

const wet = [
  { src: ".././wetblackwhite.jpeg", alt: "party people" },
  { src: ".././chrisrtizt.jpeg", alt: "two men in neptune outfits" },
  { src: "../././nickfoxrtizt.jpeg", alt: "people in sexy sea themed outfits" },
  {
    src: "../ariel.jpeg",
    alt: "sign that says 'ariel only wanted legs so she could open them'",
  },

  { src: "../sharkcolour.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../Wet/rox1.jpg", alt: "sexy girl in lingerie" },
  { src: "../Wet/muff.jpg", alt: "sign that says no muff diving" },
  {
    src: "../Wet/chloemerlinmegan.jpg",
    alt: "people in sexy sea themed outfits",
  },
  { src: "../Wet/astraunaut.jpg", alt: "tapestry of underwater astronaut" },
  { src: "../Wet/balls.jpg", alt: "balls in a ballpit" },
  { src: "../Wet/crab.jpg", alt: "sign that says 'eat me like a crab'" },
  { src: "../Wet/decorations1.jpg", alt: "decorations" },
  { src: "../Wet/dmarcus.jpg", alt: "fava" },
  { src: "../Wet/jelly2.jpg", alt: "jellyfish decoration" },
  { src: "../Wet/jellyfish.jpg", alt: "jellyfish decoration" },
  { src: "../Wet/leon.jpg", alt: "people in sexy sea themed outfits" },
  { src: "../Wet/matthewdenise.jpg", alt: "people in sexy sea themed outfits" },
  { src: "../Wet/rox2.jpg", alt: "sexy girl in lingerie" },
  { src: "../Wet/roxbobjaz.jpg", alt: "people in sexy sea themed outfits" },
  {
    src: "../Wet/seahorse.jpg",
    alt: "sign that says 'you are hung like a horse'",
  },
  { src: "../Wet/tribebanner.jpg", alt: "banner of a logo" },
  { src: "../jamesp.jpeg", alt: "party boy" },
];
const jungle = [
  { src: "../Jungle/seanlucy.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../Jungle/chriskiko.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../Jungle/chrisdemi.jpeg", alt: "people in sexy sea themed outfits" },
  {
    src: "../Jungle/merlincarlotanegin.jpeg",
    alt: "people in sexy sea themed outfits",
  },
  { src: "../Jungle/stairs.jpeg", alt: "stairs decorated like a jungle" },
  {
    src: "../Jungle/carlotamerlin.jpeg",
    alt: "people in sexy sea themed outfits",
  },
  { src: "../Jungle/leonnegin.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../Jungle/danjungle.jpeg", alt: "people in sexy sea themed outfits" },
  { src: "../Jungle/junglesetup.jpeg", alt: "Jungle decorations" },
  {
    src: "../Jungle/yenemmaapple.jpeg",
    alt: "people in sexy sea themed outfits biting apple together",
  },
  { src: "../Jungle/louisiana.jpeg", alt: "people in sexy sea themed outfits" },
  {
    src: "../Jungle/carlotajungle.jpeg",
    alt: "people in sexy sea themed outfits",
  },
];

const random = [
  { src: "../Random/shellyballpit.jpeg", alt: "gitl in ballpit in uv room" },
  { src: "../Random/bumball.jpeg", alt: "bum with ball in between bumcheecks" },
  { src: "../Random/chloeshibari.jpeg", alt: "girl tied up in shibari rope" },
  {
    src: "../Random/ellneon.jpeg",
    alt: "lady DJ in yellow lingerie in uv room",
  },
  {
    src: "../Random/tentsex.jpeg",
    alt: "naked people chilling in a large tent",
  },
  { src: "../Random/peritribeval.jpeg", alt: "man in uv room" },
  { src: "../Random/leonneon.jpeg", alt: "man in uv room" },
  { src: "../Random/ballpitcows.jpeg", alt: "people in ballpit in uv room" },
  { src: "../Random/ballpitscratch.jpeg", alt: "people in ballpit in uv room" },
];

const Gallery = () => {
  return (
    <Container className="bg-dark">
      <h4 className="text-center text-white p-5">
        Pics never shared without consent
      </h4>
      <div>
        <img
          src="rockstars.png"
          alt="Sexy girl sticking tongue out"
          className="mx-auto d-block mb-4"
          style={{ maxWidth: "80%" }}
        />
        <h4 className="text-center text-white p-4">
          Music makes the people (something something) together
        </h4>

        <Row>
          {rockhard.map((image, index) => (
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
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <img
          src="wet.png"
          alt="Sexy girl under water"
          className="mx-auto d-block mb-4"
          style={{ maxWidth: "100%" }}
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
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <img
          src="jungle.jpeg"
          alt="Two sexy girls in the jungle"
          className="mx-auto d-block mb-4"
          style={{ maxWidth: "52rem", paddingTop: "2rem" }}
        />
        <h4 className="text-center text-white p-4">
          Welcome to the jungle October 2023
        </h4>
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
      </div>
      <div>
        <h4 className="text-center text-white p-4">Random snaps</h4>
        <Row>
          {random.map((image, index) => (
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
      </div>

      <Footer />
    </Container>
  );
};

export default Gallery;
