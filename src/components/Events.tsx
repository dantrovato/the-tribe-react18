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
          <h3 className="text-center text-muted mb-4">Night of Caligula</h3>
          <h4 className="text-center text-muted mb-4">July 27th 2024 </h4>
          <img
            src="CaligulaLybertyne2.jpg"
            alt="Attractive Girls in fluorescent make up almost kissing"
            className="mx-auto d-block mb-4"
            style={{ maxWidth: "100%", marginTop: "2rem" }}
          />
          <p
            className="text-muted mb-3"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            The long awaited Tribe / Sultry Soirée collaboration is finally
            here. Full out debauchery at this stunning, 2 million pounds listed
            building in the heart of the City of London. DO NOT MISS
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
