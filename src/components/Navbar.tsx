import { Link, NavLink } from "react-router-dom";
import ContactPage from "./ContactPage";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand text-danger" to="/home">
          Homer
        </Link>
        <Link className="navbar-brand text-danger" to="/about">
          Abouter
        </Link>
        <Link className="navbar-brand text-danger" to="/contact">
          ContactPager
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
