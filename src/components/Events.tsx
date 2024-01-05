import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-5">Next events</h1>

      <div className="mx-auto text-center" style={{ maxWidth: "80%" }}>
        <div className="mb-5">
          <h3 className="text-center text-muted mb-4">
            Tribe Social January 27th 2024{" "}
          </h3>

          {/* <h4 className="text-center text-muted mb-4">Mornington crescent </h4> */}
          <img
            src="jan24.png"
            alt="Sexy girl in lingerie"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            The Tribe Social is a casual drink (or several) in a pub. Perfect
            occasion to meet the tribe among civilians and make some friends
            ahead of a party.
          </p>

          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          ></p>
        </div>

        <h3 className="text-center text-muted mb-4">
          "Dancing" on ice - Part Two - January 27th 2024{" "}
        </h3>
        <img
          src="white.png"
          alt="Sexy girl in lingerie"
          className="mx-auto d-block mb-4"
          style={{ maxWidth: "100%", marginTop: "2rem" }}
        />
        <p
          className="text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          We would normally leave it a bit longer between parties but since
          loads of people were away for New Year's and the decorations look
          amazing, we decided to host a sequel for those friends who missed it
          the first time around. Come and meet some amazing people and
          experience a night to blush about.
        </p>

        {/* <p
          className="text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          Here are some ideas for{" "}
          <Link
            className="navbar-brand text-danger"
            to="https://www.google.com/search?q=sexy+jungle+lingerie+and+costumes&tbm=isch&ved=2ahUKEwj1w9bisZmBAxWfkScCHYEzD-8Q2-cCegQIABAA&oq=sexy+jungle+lingerie+and+costumes&gs_lcp=CgNpbWcQA1CZBliXFmDHGmgAcAB4AIABPogBtQGSAQEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=RDn6ZPWRH5-jnsEPgee8-A4&bih=929&biw=1680&rlz=1C5CHFA_enGB745GB746"
          >
            jungle costumes
          </Link>{" "}
        </p> */}

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
