import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
      <div className="container-fluid m-5">
        <Link className="navbar-brand text-danger" to="/home">
          Home
        </Link>
        {/* <Link className="navbar-brand text-danger" to="/about">
          About
        </Link> */}
        <Link className="navbar-brand text-danger" to="/events">
          Events
        </Link>
        <Link className="navbar-brand text-danger" to="/join">
          Join
        </Link>
        {/* <Link className="navbar-brand text-danger" to="/form">
          Form
        </Link> */}
        <Link className="navbar-brand text-danger" to="/rules">
          Rules
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
