import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="container bg-dark">
      <h2 className="text-center">Testimonials</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./hannah_chickpea1.JPG"
            alt="Testimonial 1"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p>
              "I came by myself the other day and instantly felt right at home.
              Everyone’s so welcoming and lovely (and sexy as fuck). Had some of
              the best experiences, such a hot night omg"
            </p>
            <h4>Hanna Chickpea</h4>
            <p>New member</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./liv_body.png"
            alt="Testimonial 2"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p className="">
              "Hiiiii everyone, I’m Liv/Olivia - it was my first tribe party
              last Friday and I had a lottttt of fun, genuinely couldn’t believe
              how friendly and hot everybody was"
            </p>
            <h4>Liv</h4>
            <p>New Member</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional testimonials */}
      </Carousel>
    </div>
  );
};

export default Testimonials;
