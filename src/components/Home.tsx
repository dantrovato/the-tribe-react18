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
        alt=""
        style={{ width: "100%", maxHeight: "40%" }}
      />
      {/* <div style={backgroundStyle}>bananarama</div> */}
    </>
  );
};

export default Home;
