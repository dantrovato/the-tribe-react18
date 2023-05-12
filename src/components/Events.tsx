import { Link } from "react-router-dom";
import { Footer } from "./Footer";
const Events = () => {
  const danger = "#dc3545";
  return (
    <div className="m-5">
      <p className="text-danger p-3" style={{ border: `1px solid ${danger}` }}>
        ALWAYS ASK SOMEONE YOU ARE ABOUT TO PLAY WITH WHEN THEY LAST HAD A
        SEXUAL HEALTH CHECK - "OVER THREE MONTHS AGO" IS <strong>NOT </strong>
        AN ACCEPTABLE ANSWER
      </p>
      <h1 className="text-center text-muted mb-5">Next events</h1>
      <h3 className="text-center text-muted mb-4">Newbies - May 20th 2023 </h3>
      <p
        className=" text-muted mb-3"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        This is one of the smaller parties in Hornsey, N80JU, at the tribe
        house, with hot tub and fire pit in the garden and it's a great intro
        for the newbies. It will have roughly around 30 to 40 very atractive and
        super friendly people. Remember there is never any pressure to get
        involved so come and say hi :)
      </p>
      <p
        className="text-muted mb-3"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        Register your interest in the{" "}
        <Link className="navbar-brand text-danger" to="/join">
          Join
        </Link>{" "}
        section.
      </p>
      <p className="text-muted">
        View{" "}
        <Link className="navbar-brand text-danger" to="/may_20_2023">
          Event
        </Link>{" "}
      </p>
      <h3 className="text-center text-muted mb-4">Social - June 1st 2023 </h3>
      <p
        className=" text-muted mb-3"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        This is a social at a bar in Camden. Location to be given later. Come
        and meet some of our regular play mates and a lot of the new faces too.{" "}
        <a
          style={{ textDecoration: "none", color: `${danger}` }}
          href="https://www.meetup.com/meetup-group-hcdvbmyb/events/293473417/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link"
        >
          Join the Meet Up group
        </a>
      </p>
      <h3 className="text-center text-muted mb-4">
        Tribeval - August 18th 2023{" "}
      </h3>
      <p
        className=" text-muted mb-3"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        This one is mega. Starting earlier in the day we will have a band and 5
        DJs outside, in the garden. Fire pit, hot tub, 4 play rooms and a chill
        out area. Aiming at around 130 people, this is probably one of the last
        big ones we will be able to do at the house before we take the tribe to
        the clubs.
      </p>

      <p
        className="text-muted mb-3"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        Register your interest in the{" "}
        <Link className="navbar-brand text-danger" to="/join">
          Join
        </Link>{" "}
        section.
      </p>

      <img
        src="./girl_pink.jpg"
        alt="Sexy girl in undewear"
        style={{ width: "100%", maxHeight: "40%,", marginTop: "2rem" }}
      />
      <Footer />
    </div>
  );
};

export default Events;
