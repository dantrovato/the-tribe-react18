import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
      <div className="container-fluid m-5">
        <Link className="navbar-brand text-danger" to="/home">
          Home
        </Link>
        <Link className="navbar-brand text-danger" to="/about">
          About
        </Link>
        <Link className="navbar-brand text-danger" to="/events">
          Events
        </Link>
        <Link className="navbar-brand text-danger" to="/membership">
          Join
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
