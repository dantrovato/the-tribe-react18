import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-5">
        Next Events <br />
        ________ <br /> <br />
      </h1>

      <div className="mx-auto text-center" style={{ maxWidth: "80%" }}>
        <div className="text-muted mb-5" style={{ textAlign: "justify" }}>
          <h3 className="text-center text-muted mb-4">Pub Social</h3>
          <h4 className="text-center text-muted mb-4">Wednesday 11th March </h4>
          <img
            src="march_social2026.jpeg"
            alt="Attractive couple flirting at a bar."
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Come and meet the gorgeous children of The Tribe at a pub in
            Mornington Crescent for a Wednesday social with great chats and
            lotsa bantz.
          </p>
        </div>

        <div className="text-muted mb-5" style={{ textAlign: "justify" }}>
          <h3 className="text-center text-muted mb-4">Chavs and Royals</h3>
          <h4 className="text-center text-muted mb-4">
            Friday 20th March - Dalston Junction, London
          </h4>
          <img
            src="hot_cool_wet_dirty.jpeg"
            alt="Sexy people at a wedding"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Come and join this silly bunch for a sexy night of dancing, belly
            laughs and God knows what else. We will be playing and partying in
            East London for a night of hedonism, fun and, we hope, lasting
            connections. <br /> <br />
            This is The Tribe. Believe the hype.
          </p>
        </div>

        <p
          className="text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        ></p>

        <p
          className="text-muted mb-5"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          Register your interest in the{" "}
          <Link className="navbar-brand text-danger" to="/join">
            Join
          </Link>{" "}
          section.
        </p>
      </div>

      <img
        src="./girl_pink.jpg"
        alt="Sexy girl in underwear"
        style={{ maxWidth: "100%", maxHeight: "40%,", marginTop: "2rem" }}
      />
      <Footer />
    </div>
  );
};

export default Events;
