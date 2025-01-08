import AboutPage from "./AboutPage";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  // const backgroundStyle = {
  //   backgroundImage: "url(./matilda_dan.jpeg)",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   height: "46.5vh",
  //   width: "100%",
  // };
  return (
    <>
      {/* <div className="m-5">
        <p className="text-muted">
          A social experiment in redefining, sex, friendships and relationships
        </p>
      </div> */}

      {/* <img
        // src="./matilda_dan.jpeg"
        src="./matilda_tamas_cropped2.png"
        alt="Man and woman kissing"
        style={{ width: "100%", maxHeight: "40%" }}
      /> */}
      {/* <div style={backgroundStyle}>bananarama</div> */}
      <AboutPage />
      <p
        className="text-muted mb-5 text-center"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <Link className="navbar-brand text-danger" to="/join">
          Join us here
        </Link>{" "}
      </p>
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
