const Hero = () => {
  return (
    <div className="bg-black" style={{ width: "100%" }}>
      <div className="pt-5 text-center bg-body-tertiary rounded-3">
        <img
          src="./tribe_symbol_full.png"
          alt="Tribe logo"
          style={{ height: "7rem" }}
          className="mb-3"
        ></img>
        <div className="mb-5">
          <img
            src="./tribe_font_full.png"
            alt="Tribe logo"
            style={{ height: "2rem", marginLeft: "0rem" }}
          ></img>
        </div>

        <div className="d-inline-flex gap-2 mb-5"></div>
      </div>
    </div>
  );
};

export default Hero;
