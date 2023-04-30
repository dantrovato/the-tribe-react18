import { Link } from "react-router-dom";
const Events = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted">Events</h1>
      <p className="m-5 text-muted">
        Next Event, on May 20th 2023, is a smaller one and it's an intro for the
        newbies. It will have roughly around 30 to 40 people.
      </p>
      <p className="m-5 text-muted">
        Register your interest in the{" "}
        <Link className="navbar-brand text-danger" to="/rules">
          Rules
        </Link>{" "}
        section.
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
