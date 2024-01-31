import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-5">Next events</h1>

      <div className="mx-auto text-center" style={{ maxWidth: "80%" }}>
        <div className="mb-5">
          <h3 className="text-center text-muted mb-4">Tribe Social </h3>
          <h4 className="text-center text-muted mb-4">
            Wednesday February 21st 2024{" "}
          </h4>

          {/* <h4 className="text-center text-muted mb-4">Mornington crescent </h4> */}
          <img
            src="feb2024.png"
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

        <div className="text-center text-muted mb-5">
          <h3 className="text-center text-muted mb-4">
            WET - Creatures of the sea{" "}
          </h3>
          <h4 className="text-center text-muted mb-4">March 2nd 2024 </h4>
          <img
            src="wet.png"
            alt="Sexy girl making devil sign and sticking tongue out"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Get ready to say hello to spring with the gorgeous children of the
            tribe. The tribe house is once again transformed into an ocean of
            sexiness, giggles and new connections.
          </p>
        </div>

        <div className="text-center text-muted mb-5">
          <h3 className="text-center text-muted mb-4">Rockers and groupies </h3>
          <h4 className="text-center text-muted mb-4">April 13th 2024 </h4>
          <img
            src="rockstar.jpg"
            alt="Sexy girl in a red dress under water"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Dress up as your favourite rockstar or a very slutty groupie and
            come forget you're an adult with the gorgeous children of the tribe.
            Fun times you'll never forget (or remember...)
          </p>
        </div>

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
