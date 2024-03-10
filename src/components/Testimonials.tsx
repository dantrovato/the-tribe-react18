import { Carousel } from "react-bootstrap";
import { Footer } from "./Footer";

const testimonials = [
  {
    src: "./roxanne.jpeg",
    alt: "Sexy woman open legged on a chair",
    quote:
      '"Being very new to the scene I was nervous to join a party but I soon realised I had nothing to worry about. Everyone in the Tribe is so welcoming, open, hot and most importantly… fun! Not only are the parties great, but the sense of being part of a community where you can chat, learn and share experiences is invaluable. I feel like I’ve made friends for life here."',
    name: "R",
    member: "Member since January 2024",
  },
  {
    src: "./ruben.jpeg",
    alt: "Handsome guy",
    quote:
      '"The Tribe is an amazing group of people who I have created beautiful friendships with and and where I found a sense of community"',
    name: "Ruben",
    member: "Member since May 2023",
  },
  {
    src: "./liv_body.png",
    alt: "Sexy girl body in lingerie",
    quote:
      '"It was my first tribe party last Friday and I had a lottttt of fun, genuinely couldn’t believe how friendly and hot everybody was"',
    name: "Liv",
    member: "New Member",
  },
  {
    src: "./viking.jpeg",
    alt: "Sexy viking",
    quote:
      '"Tribe is a portal to a place where judgements do not exist and inhibitions can safely take a back seat. After years on the scene it was refreshing to finally find a place that suited everyone, experienced or novice, with warmth, humility, kindness and, if required, a big dollop of debauchery. I’d encourage anyone keen to meet and connect with colourful, open minded, safe crowd of beautiful people and broaden their horizons"',
    name: "R",
    member: "Member since January 2024",
  },
  {
    src: "./hannah_chickpea2.png",
    alt: "A girl at a festival, laughing",
    quote:
      '"I came by myself the other day and instantly felt right at home. Everyone’s so welcoming and lovely (and sexy as fuck). Had some of the best experiences, such a hot night omg"',
    name: "Hannah Chickpea",
    member: "Member since May 2023",
  },
  {
    src: "./shelly.jpeg",
    alt: "Sexy girl in stockings",
    quote:
      '"The Tribe is more than just another party, it’s a likeminded community who helped me overcome the insecurities I had about my own sexuality and begin to accept myself for who I am without judgement"',
    name: "Shelly",
    member: "Member since 2020",
  },
  {
    src: "./marco.jpeg",
    alt: "Sexy man standing up",
    quote:
      '"Passionate and intimate experience. You can express your sensuality and discover the lust and kink you may have hidden inside you"',
    name: "Marco",
    member: "Member since May 2023",
  },
  {
    src: "./carlota1.jpg",
    alt: "Sexy girl with a small roll up cigarette",
    quote:
      '"I always felt so welcome and safe that it became more like a family than just a party"',
    name: "Carlota",
    member: "Member since 2020",
  },
  {
    src: "./dave_wolves.png",
    alt: "Man surrounded by wolves",
    quote:
      '"The thing that stands out to me about the Tribe are the friendships forged, the support given and the genuine love that flows throughout the group, during and after the events"',
    name: "Davide",
    member: "Member since 2020",
  },
  {
    src: "./shanika.jpeg",
    alt: "Black woman in red dress posing sideways in the street",
    quote:
      '"Loved loved loved my first Tribe last night, I met some amazing people and had the best time!! Thank you @Dan 4.0 and everyone else that made my night, I’ll be a regular now for sure 💃🏽  what a hot crowd 🥵"',
    name: "Shanika",
    member: "Member since March 2024",
  },
  {
    src: "./demi.jpeg",
    alt: "Man surrounded by wolves",
    quote:
      '"Can\'t beat the cuddle puddle at the end of the night.. such a great group of people, always an amazing vibe"',
    name: "Demi",
    member: "Member since 2022",
  },
  {
    src: "./jamesp.jpeg",
    alt: "Selfie ofd a man",
    quote:
      '"Great party thank you, surely a testament to time! And great to meet you all awesome people! ❤️ Love you all"',
    name: "James",
    member: "Member since January 2020",
  },
  {
    src: "./denise.jpeg",
    alt: "woman in kinky outfit in front of mirror",
    quote:
      '"Just wanted to say a HUGE thank you for last night! It was seriously incredible, and you all made my first tribe party absolutely magical. ✨Can\'t wait for the next event to see all your beautiful faces and asses again! x"',
    name: "Denise",
    member: "Member since March 2024",
  },
  {
    src: "./lorna_cropped.png",
    alt: "Man and woman in kinky outfit in front of mirror",
    quote:
      '"It is absurd to divide people into good and bad. People are either charming or tedious\' Oscar Wilde. The tribe are by far, far from being tedious, instead, delectably charming at a minimum."',
    name: "Lorna",
    member: "Member since October 2022",
  },
  {
    src: "./yulia.jpeg",
    alt: "Woman in lingerie on bed",
    quote:
      '"What a memorable first Tribe experience 😍 thanks for organising the sexiest night in London and everyone’s friendly hospitality 🫶 pleasure meeting you all wonderful people"',
    name: "Yulia",
    member: "Member since March 2024",
  },
  {
    src: "./jessgalletta.jpeg",
    alt: "Woman in lingerie on bed",
    quote:
      '"Another epic tribe 🤩😈😘 so many hotties, not enough time! Can’t wait to see you all soon xx"',
    name: "Jess",
    member: "Member since December 2023",
  },
  {
    src: "./wetblackwhite.jpeg",
    alt: "Party people posing",
    quote: "There's a shark in the room!!",
    name: "Scenes from the 'WET' party",
    member: "Wet dreams did come true!",
  },
  {
    src: "./chrisrtizt.jpeg",
    alt: "Two men in fancy dress posing for a pic",
    quote: "Gods of the Seas",
    name: "Scenes from the 'WET' party",
    member: "Taking the theme seriously",
  },
  {
    src: "./nickfoxrtizt.jpeg",
    alt: "Party people posing",
    quote: "Something fishy in here",
    name: "Scenes from the 'WET' party",
    member: "Did the fox get the fish?",
  },
  {
    src: "./sharkcolour.jpeg",
    alt: "Party people posing",
    quote: "Costume regret",
    name: "Scenes from the 'WET' party",
    member: "You ever see a shark sweating balls?",
  },
  {
    src: "./he_man.WEBP",
    alt: "Cartoon character 'He Man'",
    quote: "He Man (They Mxn as of 2019)",
    name: '"I am a fictional character...',
    member:
      "...and my penis is entirely hypothetical. But if and my male member and I existed we'd be sure to join the tribe\"",
  },
  {
    src: "./tribe_garden1.JPG",
    alt: "Hot tub and tent in the garden",
    quote: "The tent and hot tub",
    name: "Many a naughty has happened here",
    member: "And many more to happen still",
  },
  {
    src: "./kyle_lyd.png",
    alt: "Man and woman in kinky outfit in front of mirror",
    quote:
      '"We were lucky enough to meet this amazing group of people. We have had some amazing memories, made amazing friends, and could not recommend more. Always a safe positive space for you to truly be yourself with others alike"',
    name: "Kyle and Selene",
    member: "Member since October 2022",
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
