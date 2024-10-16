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
          <h3 className="text-center text-muted mb-4">Bad Trip</h3>
          <h4 className="text-center text-muted mb-4">November 9th 2024 </h4>
          <img
            src="/badtripwebsite.png"
            alt="Attractive Girl in a psychedelic surrounding"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            The mission on Tribelon (previous party) was going so well, but the
            council of Haringanus was alerted to our presence by the copulatory
            vocalisations emanating from the love tent. So we had to dash back
            to earth. We grabbed whatever food the local vegetation had to offer
            and, just our luck, most of it was space psychedelic. We are now
            collectively gonna go through the bad trip from hell.
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
