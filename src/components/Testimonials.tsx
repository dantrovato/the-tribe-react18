import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="container">
      <h2 className="text-center">Testimonials</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./girl_pink.jpg"
            alt="Testimonial 1"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p>
              "I came by myself the other day and instantly felt right at home.
              Everyone’s so welcoming and lovely (and sexy as fuck). Had some of
              the best experiences, such a hot night omg"
            </p>
            <h4>John Doe</h4>
            <p>Company ABC</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./black_white_girl.jpg"
            alt="Testimonial 2"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p>
              "Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua."
            </p>
            <h4>Jane Smith</h4>
            <p>Company XYZ</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional testimonials */}
      </Carousel>
    </div>
  );
};

export default Testimonials;
