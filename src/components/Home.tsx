const Home = () => {
  const backgroundStyle = {
    backgroundImage: "url(./matilda_dan.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "46.5vh",
    width: "100%",
  };
  return (
    <>
      <p className="col-lg-8 mx-auto fs-5 text-muted p-5">
        A social experiment in redifining, sex, friendships, relationships and
        love
      </p>
      {/* <img
        src="./matilda_dan.JPG"
        alt=""
        style={{ width: "100%", maxHeight: "40%" }}
      /> */}
      <div style={backgroundStyle}>bananarama</div>
    </>
  );
};

export default Home;
