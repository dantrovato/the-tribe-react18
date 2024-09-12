import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-5">Next events</h1>

      <div className="mx-auto text-center" style={{ maxWidth: "80%" }}>
        <div className="mb-5">
          {/* <h3 className="text-center text-muted mb-4">Tribe Social </h3>
          <h4 className="text-center text-muted mb-4">
            Wednesday April 10th 2024{" "}
          </h4> */}

          {/* <h4 className="text-center text-muted mb-4">Mornington crescent </h4> */}
          {/* <img
            src="blonde.png"
            alt="Sexy girl semi naked holding beer over her breast"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          /> */}
          {/* <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Cheeky monthly Social to break the ice and meet some of the tribe
            ahead of a party. It's a wholesome evening for a change...
          </p>

          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          ></p> */}
        </div>

        <div className="text-muted mb-5" style={{ textAlign: "justify" }}>
          <h3 className="text-center text-muted mb-4">
            2069 - Age of Tribelon
          </h3>
          <h4 className="text-center text-muted mb-4">October 5th 2024 </h4>
          <img
            src="public/2069website.jpg"
            alt="Attractive Girls in fluorescent make up almost kissing"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            The civil wars fought on August 2024 escalated to the whole globe
            (or the entire pizza, for the flat earthers), decimating the
            population of the planet. Our only chance of survival was to flee to
            the nearest habitable atmosphere. Our target was an impenetrable
            planet in the Galaxy of Turnpikus Lanos, currently inhabited by
            unwelcoming, albeit oddly attractive, aliens. Our mission is to,
            erm, penetrate this society and mate with as many of their people as
            possible, thereby spawning a morally loose and even hotter new race.
            This yummy lot will rule over the now less attractive and boring
            natives, creating a utopia which will henceforth be known as
            Tribelon, a destination much coveted by sexually insatiable space
            tourists.
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
