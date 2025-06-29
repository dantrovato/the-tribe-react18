import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-5">Next Events</h1>

      <div className="mx-auto text-center" style={{ maxWidth: "80%" }}>
        <div className="text-muted mb-5" style={{ textAlign: "justify" }}>
          <h3 className="text-center text-muted mb-4">Play Social</h3>
          <h4 className="text-center text-muted mb-4">Friday 18th July </h4>
          <img
            src="socialJuly2025web.jpg"
            alt="Attractive couple flirting at a bar. He is sniffing her neck. What a weirdo!"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Come and meet the gorgeous children of the tribe at a bar in East
            London for a Friday social and a little more if the mood strikes.
            The bar closes at 2 am but the party is likely to continue at some
            afterparty. Because you just can't get enough of us, can you?!
          </p>
        </div>

        <div className="text-muted mb-5" style={{ textAlign: "justify" }}>
          <h3 className="text-center text-muted mb-4">Tribeval III</h3>
          <h4 className="text-center text-muted mb-4">Saturday 26th July</h4>
          <img
            src="tribeval3web.jpg"
            alt="Sexy fire woman at a festival. She is wearing a red top and has a fire staff."
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            Come and join this silly bunch for a night of music, dancing and
            belly laughs. We will be playing and partying in North London for a
            night of hedonism, fun and, we hope, lasting connections. <br />{" "}
            <br />
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
