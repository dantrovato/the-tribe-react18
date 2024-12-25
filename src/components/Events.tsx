import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-5">Next events</h1>

      <div className="mx-auto text-center" style={{ maxWidth: "80%" }}>
        <div className="text-muted mb-5" style={{ textAlign: "justify" }}>
          <h3 className="text-center text-muted mb-4">
            The Eroticles of Narnia - The loin, the switch in the wardrobe
          </h3>
          <h4 className="text-center text-muted mb-4">New Year's Eve</h4>
          <img
            src="/narniawebsite4.png"
            alt="Attractive people in a bar"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            A fun filled night of great deep house, a huge ball pit, a hot tub,
            two monitored play rooms and lots and lots of gorgeous people
          </p>
        </div>

        <div className="text-muted mb-5" style={{ textAlign: "justify" }}>
          <h3 className="text-center text-muted mb-4">Play social</h3>
          <h4 className="text-center text-muted mb-4">Thursday 16th January</h4>
          <img
            src="/play_socialwebsite.png"
            alt="Attractive people in a bar"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Come and meet the gorgeous children of the tribe at a bar in East
            London for a midweek social and a little more if the mood strikes
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
