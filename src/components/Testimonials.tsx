import { Carousel } from "react-bootstrap";
import { Footer } from "./Footer";

const Testimonials = () => {
  return (
    <div className="container bg-dark">
      <h5 className="text-center text-white p-4">
        Pics never shared without consent
      </h5>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./hannah_chickpea2.png"
            alt="Testimonial 1"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p>
              I came by myself the other day and instantly felt right at home.
              Everyone’s so welcoming and lovely (and sexy as fuck). Had some of
              the best experiences, such a hot night omg
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
              Hiiiii everyone, I’m Liv/Olivia - it was my first tribe party last
              Friday and I had a lottttt of fun, genuinely couldn’t believe how
              friendly and hot everybody was
            </p>
            <h4>Liv</h4>
            <p>New Member</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./carlota1.jpg"
            alt="Testimonial 3"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p className="">
              I always felt so welcome and safe that it became more like a
              family than just a party.
            </p>
            <h4>Carlota</h4>
            <p>Member since March 2021</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./matilda_mirror_cropped.jpg"
            alt="Testimonial 4"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p className="">
              I went to my first Tribe Party in October and haven’t looked back
              since. It’s an incredibly liberating and welcoming group of
              hotties. Can’t wait for many more adventures with this crazy bunch
            </p>
            <h4>Matilda</h4>
            <p>Member since October 2022</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./kyle_lyd.png"
            alt="Testimonial 5"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p className="">
              We were lucky enough to meet this amazing group of people. We have
              had some amazing memories, made amazing friends, and could not
              recommend more. Always a safe positive space for you to truly be
              yourself with others alike
            </p>
            <h4>Kyle and Lyd</h4>
            <p>New Member</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./lorna.jpeg"
            alt="Testimonial 5"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p className="">
              'It is absurd to divide people into good and bad. People are
              either charming or tedious' Oscar Wilde. The tribe are by far, far
              from being tedious, instead, delectably charming at a minimum.
              ❤️😘
            </p>
            <h4>Lorna</h4>
            <p>Member since October 2022</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./tribe1.jpg"
            alt="Group pic"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p className="">Chilling by the fire</p>
            <h4>Look</h4>
            <p>Look at the state of them!!!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./tribe2.jpg"
            alt="Group pic"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            {/* <p className="">"Still chilling by the fire"</p> */}
            {/* <h4>Look</h4> */}
            <p>AND THEM!!!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./he_man.WEBP"
            alt="Hot tub and tent in the garden"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p className="">He Man (They Mxn as of 2019)</p>
            <h4>I am a fictional character</h4>
            <p>
              And my penis is entirely hypothetical. But if me and my male
              member existed we'd be sure to join the tribe
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="./tribe_garden1.JPG"
            alt="Hot tub and tent in the garden"
            style={{ height: "30rem" }}
          />
          <Carousel.Caption>
            <p className="">The tent and hot tub</p>
            <h4>Many a naughty has happened here</h4>
            <p>And many more to happen still</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Footer />
    </div>
  );
};

export default Testimonials;
