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
          <h3 className="text-center text-muted mb-4">Play Social</h3>
          <h4 className="text-center text-muted mb-4">
            Thursday 12th February{" "}
          </h4>
          <img
            src="social_feb2026.jpeg"
            alt="Attractive couple flirting at a bar."
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Come and meet the gorgeous children of the tribe at a bar in East
            London for a Thursday social and a little more if the mood strikes.
          </p>
        </div>

        <div className="text-muted mb-5" style={{ textAlign: "justify" }}>
          <h3 className="text-center text-muted mb-4">Chavs and Royals</h3>
          <h4 className="text-center text-muted mb-4">
            Friday 20th February - Manor House, London
          </h4>
          <img
            src="chavs_and_royals_web.jpeg"
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
            North London for a night of hedonism, fun and, we hope, lasting
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
