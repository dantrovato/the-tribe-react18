import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-5">Next events</h1>

      <div>
        <h3 className="text-center text-muted mb-4">
          Social - Thursday July 6th 2023{" "}
        </h3>
        <p
          className=" text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          Come to our second social event! This is a clothes-on drink in a bar,
          where you can meet new people or catch up with familiar faces in a
          super relaxed environment. We are looking forward to seeing you there!{" "}
          Register your interest in the{" "}
          <Link className="navbar-brand text-danger" to="/join">
            Join
          </Link>{" "}
          section.
        </p>
        <h3 className="text-center text-muted mb-4">
          Newbies part 2 - Friday July 21st 2023{" "}
        </h3>
        <p
          className=" text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          This is a gathering of the hottest new people in the scene or just new
          to the tribe. It's a smaller and more intimate and relaxed party and
          it's a less hectic introduction into our community. Register your
          interest in the{" "}
          <Link className="navbar-brand text-danger" to="/join">
            Join
          </Link>{" "}
          section.
        </p>
      </div>

      <div>
        <h3 className="text-center text-muted mb-4">
          Tribeval - August 19th 2023{" "}
        </h3>
        <p
          className=" text-muted mb-3"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          This one is mega. Starting earlier in the day we will have a band
          provisionally named 'The beauty and the sons of a bitch'and a bunch of
          DJs playing in the garden. The garden, as always, featuring the
          massive fire pit, hot tub, 4 play rooms and a chill out area. Aiming
          at around 100 people, this is probably one of the bigger ones ever.
          Tickets £20.{" "}
        </p>

        <p
          className="text-muted mb-3"
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
        style={{ width: "100%", maxHeight: "40%,", marginTop: "2rem" }}
      />
      <Footer />
    </div>
  );
};

export default Events;
