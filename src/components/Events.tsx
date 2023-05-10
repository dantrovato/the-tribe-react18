import { Link } from "react-router-dom";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted">Events</h1>
      <p
        className=" text-muted mb-3"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        Next Event, on May 20th 2023, is a smaller one and it's an intro for the
        newbies. It will have roughly around 30 to 40 people.
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
      <p className="text-danger">
        ALWAYS ASK SOMEONE YOU ARE ABOUT TO PLAY WITH WHEN THEY LAST HAD A
        SEXUAL HEALTH CHECK - OVER THREE MONTHS AGO IS <strong>NOT </strong>
        AN ACCEPTABLE ANSWER
      </p>
      <img
        src="./girl_pink.jpg"
        alt="Sexy girl in undewear"
        style={{ width: "100%", maxHeight: "40%" }}
      />
    </div>
  );
};

export default Events;
