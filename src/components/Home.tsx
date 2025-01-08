import AboutPage from "./AboutPage";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <AboutPage />
      <h4
        className="text-muted mb-5 text-center"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <Link
          className="btn btn-outline-secondary"
          to="/join"
          style={{
            color: "#6c757d", // Matches Bootstrap's text-muted color
            borderColor: "#6c757d", // Matches the muted color for the border
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          JOIN US HERE
        </Link>
      </h4>
      <img
        src="./girl_with_chain.jpg"
        alt="Girl sensually biting a chain"
        style={{ width: "100%", maxHeight: "40%" }}
      />
      <Footer />
    </>
  );
};

export default Home;
