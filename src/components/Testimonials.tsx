import { Carousel } from "react-bootstrap";
import { Footer } from "./Footer";

const testimonials = [
  {
    src: "./hannah_chickpea2.png",
    alt: "A girl at a festival, laughing",
    quote:
      "I came by myself the other day and instantly felt right at home. Everyone’s so welcoming and lovely (and sexy as fuck). Had some of the best experiences, such a hot night omg",
    name: "Hannah Chickpea",
    member: "Member since May 2023",
  },
  {
    src: "./liv_body.png",
    alt: "Sexy girl body in lingerie",
    quote:
      "It was my first tribe party last Friday and I had a lottttt of fun, genuinely couldn’t believe how friendly and hot everybody was",
    name: "Liv",
    member: "New Member",
  },
  {
    src: "./ruben.jpeg",
    alt: "Handsome guy",
    quote:
      "The Tribe is an amazing group of people who I have created beautiful friendships with and and where I found a sense of community",
    name: "Ruben",
    member: "Member since May 2023",
  },
  {
    src: "./shelly.jpeg",
    alt: "Sexy girl in stockings",
    quote:
      "The Tribe is more than just another party, it’s a likeminded community who helped me overcome the insecurities I had about my own sexuality and begin to accept myself for who I am without judgement",
    name: "Shelly",
    member: "Member since 2020",
  },
  {
    src: "./carlota1.jpg",
    alt: "Sexy girl with a small roll up cigarette",
    quote:
      "I always felt so welcome and safe that it became more like a family than just a party.",
    name: "Carlota",
    member: "Member since 2020",
  },
  {
    src: "./marco.jpeg",
    alt: "Sexy man standing up",
    quote:
      "Passionate and intimate experience. You can express your sensuality and discover the lust and kink you may have hidden inside you.",
    name: "Marco",
    member: "Member since May 2023",
  },
  {
    src: "./dave_wolves.png",
    alt: "Man surrounded by wolves",
    quote:
      "The thing that stands out to me about the Tribe are the friendships forged, the support given and the genuine love that flows throughout the group, during and after the events",
    name: "Davide",
    member: "Member since 2020",
  },
  {
    src: "./demi.jpeg",
    alt: "Man surrounded by wolves",
    quote:
      "Can't beat the cuddle puddle at the end of the night.. such a great group of people, always an amazing vibe",
    name: "Demi",
    member: "Member since 2022",
  },
  {
    src: "./kyle_lyd.png",
    alt: "Man and woman in kinky outfit in front of mirror",
    quote:
      "We were lucky enough to meet this amazing group of people. We have had some amazing memories, made amazing friends, and could not recommend more. Always a safe positive space for you to truly be yourself with others alike",
    name: "Kyle and Selene",
    member: "Member since October 2022",
  },
  {
    src: "./lorna_cropped.png",
    alt: "Man and woman in kinky outfit in front of mirror",
    quote:
      "'It is absurd to divide people into good and bad. People are either charming or tedious' Oscar Wilde. The tribe are by far, far from being tedious, instead, delectably charming at a minimum.",
    name: "Lorna",
    member: "Member since October 2022",
  },
  // {
  //   src: "./tribe1.jpg",
  //   alt: "Party people sitting on a sofa",
  //   quote: "Chilling by the fire",
  //   name: "LOOK",
  //   member: "Look at the state of them!",
  // },
  // {
  //   src: "./tribe2.jpg",
  //   alt: "Party people sitting on a sofa",
  //   quote: "",
  //   name: "",
  //   member: "And them!!!",
  // },
  {
    src: "./he_man.WEBP",
    alt: "Cartoon character 'He Man'",
    quote: "He Man (They Mxn as of 2019)",
    name: "I am a fictional character",
    member:
      "And my penis is entirely hypothetical. But if me and my male member existed we'd be sure to join the tribe",
  },
  {
    src: "./tribe_garden1.JPG",
    alt: "Hot tub and tent in the garden",
    quote: "The tent and hot tub",
    name: "Many a naughty has happened here",
    member: "And many more to happen still",
  },
];

const Testimonials = () => {
  return (
    <div className="container bg-dark">
      <h5 className="text-center text-white p-4">
        Pics never shared without consent
      </h5>

      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block mx-auto"
              src={testimonial.src}
              alt={testimonial.alt}
              style={{ height: "30rem" }}
            />
            <Carousel.Caption>
              <p>{testimonial.quote}</p>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.member}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Footer />
    </div>
  );
};

export default Testimonials;
