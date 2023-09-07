import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-5">Next events</h1>

      <div>
        <h3 className="text-center text-muted mb-4">Welcome to the jungle </h3>
        <img
          src="jungle.png"
          alt="Sexy girls in jungle"
          className="mx-auto d-block mb-4"
          style={{ maxWidth: "100%", marginTop: "2rem" }}
        />
        <p
          className=" text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          The Tribe House becomes a jungle. Come reconnect with nature with the
          gorgeous creatures of The Tribe.
        </p>

        <p
          className=" text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          Here are some ideas for{" "}
          <Link
            className="navbar-brand text-danger"
            to="https://www.google.com/search?q=sexy+roman+party+costume&rlz=1C5CHFA_enGB745GB746&oq=sexy+roman+party+costume&aqs=chrome..69i57.13207j0j4&sourceid=chrome&ie=UTF-8"
          >
            sexy roman costumes
          </Link>{" "}
        </p>

        <p
          className=" text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          Tickets: £25 to £40. Tickets not out yet{" "}
        </p>

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
        alt="Sexy girl in undewear"
        style={{ maxWidth: "100%", maxHeight: "40%,", marginTop: "2rem" }}
      />
      <Footer />
    </div>
  );
};

export default Events;
