import "./Rules.module.css";
import { Footer } from "./Footer";

const Rules = () => {
  const danger = "#dc3545";
  return (
    <div className="m-5 text-muted">
      <div className="m-5" style={{ border: `1px solid ${danger}` }}>
        <h2 className="text-danger text-center p-3">Sexual health safety</h2>
        <h3 className="text-danger text-center pb-3">The wristband system:</h3>
        <p className="text-danger p-3">
          Upon arrival, you'll be asked to show your most recent negative sexual
          health results. You'll be given a wristband corresponding to the
          length of time that has passed since the date of the test. For
          example, if your test was done within the last two weeks, you will
          receive a blue wristband. If it was done within the last month, you
          will receive a green wristband. If it was done within the last six
          weeks, you will receive a yellow wristband. If it was done within the
          last two months, you will receive an orange wristband. Beyond two
          months, you will get a slightly judgy frown and no wristband. We don't
          tell grown-up people what to do with their naughty bits but we
          strongly discourage anyone from having sex with individuals without a
          wristband. Even with a blue wristband, we urge guests to have an open
          conversation about the number of partners they have had since their
          last clear test results. We believe this system is a significant step
          forward in safeguarding the sexual health of our community, but it is
          not a foolproof solution, and personal responsibility must be
          exercised. For instance, engaging in unprotected oral sex with someone
          you just met at a sex party still carries its risks. Please help us
          keep the community safe by being extra careful.
        </p>
      </div>
      <h1 className="text-center mb-3">How it works</h1>

      <p className="mb-4">
        At the bigger events most people will know one another. If you're a
        complete newbie, chances are you will be at one of the smaller
        introductory events. People will just chill and chat over drinks and at
        some point, surely, somebody will start playing and more and more people
        will then join in, separately or otherwise. It's all super friendly and
        free flowing. Remember that there is never any pressure to join in and
        if you're uncomfortable at any point, do speak to anyone wearing a
        flashing blue armband. The 'generals' are there to make your night as
        amazing as it can be. Please read the rules outlined below
      </p>
      <img
        src="./orgypool.webp"
        alt="Sexy people kissing in shower"
        className="mb-3"
        style={{ width: "100%", maxHeight: "40%" }}
      />
      <h2>Rule # 1</h2>
      <h3>Consent!</h3>
      <p>
        Do make sure that if you are gonna touch somebody the are more “yay”
        than “eeeewww”. At a minimum you must be able to read body language but
        verbally asking is even better.
      </p>
      <h2>Rule # 2</h2>
      <h3>Know your boundaries</h3>
      <p>
        If you’re on the receiving end of unwanted attention you also share the
        responsibility of making sure that stops. If somebody puts a hand on
        your hip and you don’t like it, make sure you say it. Or at the very
        least lean back. They shouldn’t do that but it’s also on you to let them
        know. It’s no good to go with the flow only to regret it the next day.
        No good to you and no good to the person who’s gonna get accused of
        sexual misconduct. That’s not fair. Best thing to do is to think, in
        advance, of a polite way to say no, you can just say “I need a bit of a
        break”. But the more niche “you’re ruining my chi” and “I think you’re
        being ambitious” work too.
      </p>
      <h2>Rule # 3</h2>
      <h3>No default BDSM mode</h3>
      <p>
        If you’re playing with somebody don’t assume you know what they’re into.
        Not everyone likes to be spanked, choked or getting jizzed on the face.
        I particularly hate the latter!
      </p>
      <h2>Rule # 4</h2>
      <h3>Bin your condoms</h3>
      <p>For the love of god...</p>
      <h2>Rule # 5</h2>
      <h3>Stealthing</h3>
      <p>
        This one hardly needs mentioning but better say it and not need it than
        the opposite. Anyone caught removing their johnny without their partner
        knowing will be decapitated. Also, do remember to change condoms every
        time a penis or toy goes from one body to another.
      </p>
      <h2>Rule # 6</h2>
      <h3>No Piggybacking</h3>
      <p>
        If you see two or more people having sex don’t just jump in. It’s really
        awkward to have to shoo someone away. If you are not a regular play
        partner with whoever is in the scrum wait to be invited in.
      </p>
      <h2>Rule # 7</h2>
      <h3>No Squirting</h3>
      <p>
        All you plumbers out there, there are way too many people for this. No
        need to show off. We know you are familiar with the female anatomy but
        nobody wants to be finding a free surface and then have to sit on a wet
        patch.
      </p>
      <h2>Rule # 8</h2>
      <h3>No drinks in the play areas</h3>
      <p>It's just a mess waiting to happen.</p>
      <img
        src="./black_white_girl.jpg"
        alt="People kissing in hot tub"
        style={{ width: "100%", maxHeight: "40%" }}
      />
      <Footer />
    </div>
  );
};

export default Rules;
