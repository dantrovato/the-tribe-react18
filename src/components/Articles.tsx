import { Footer } from "./Footer";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="m-5">
      <h1 className="d-block text-center text-muted">Click on links below</h1>
      <a
        className="navbar-brand text-muted  d-block text-center m-5"
        href="https://medium.com/@dantrovato/choking-the-gooch-c4ae28227ac7"
        target="_blank"
        rel="noopener noreferrer"
      >
        Choking the Gooch - A guide to male multiple orgasms - Written by
        Danimal
      </a>{" "}
      <Footer />
    </div>
  );
};

export default Articles;
