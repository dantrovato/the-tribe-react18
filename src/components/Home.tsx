import AboutPage from "./AboutPage";
import { Footer } from "./Footer";

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

      <img
        src="./matilda_dan.jpeg"
        alt="Man and woman kissing"
        style={{ width: "100%", maxHeight: "40%" }}
      />
      {/* <div style={backgroundStyle}>bananarama</div> */}
      <AboutPage />
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
