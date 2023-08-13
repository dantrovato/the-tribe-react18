import "./Rules.module.css";
import { Footer } from "./Footer";

const Rules = () => {
  const danger = "#dc3545";
  return (
    <div className="m-5 text-muted">
      <div className="mb-5" style={{ border: `1px solid ${danger}` }}>
        <h2 className="text-danger text-center pt-3 pb-3">
          Sexual health safety
        </h2>
        <h3 className="text-danger text-center pb-3">The wristband system:</h3>
        <p className="text-danger p-1">
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

      <img
        src="./orgypool.webp"
        alt="Sexy people kissing in shower"
        className="mb-3"
        style={{ width: "100%", maxHeight: "40%" }}
      />
      <h2>Rule # 1</h2>
      <h3>Consent!</h3>
      <p>
        Do not touch anybody sexually without first receiving verbal or, at the
        very least, clear non verbal consent. Verbal consent is best. Just ask
        and remove all doubt
      </p>
      <h2>Rule # 2</h2>
      <h3>Know your boundaries</h3>
      <p>
        This is apparently our most controversial rule; we think that if
        somebody breaks the above rule about consent you should tell them!
        Whoa... <br />
        If somebody puts a hand on your hip and you don’t like it, make sure you
        say it. Or at the very least give a non verbal sign. They should never
        do that but if you just freeze this could be taken as a green light. DO
        NOT go with the flow only to regret it the next day. No good to you and
        no good to the person who’s gonna get accused of sexual misconduct. Best
        thing to do is to think, in advance, of a polite way to say no. You can
        just say “I need a bit of a break” or "maybe later". But the more direct
        “No, thank you” works too. Let's just keep it polite. <br />A handful of
        people have criticised this rule because they see it as potentially
        "blaming the victim". We politely reject their hypothesis. Instead, we
        feel this adds an extra layer of protection, ensuring there will never
        be a victim. These are super friendly parties and the chance of anybody
        being threatening to you is absolute zero. Should that happen, however,
        our "generals" will be on hand to deal with the situation. You'll know
        who they are as they will be wearing a flashy blue armband. <br />
        If having read the above you still fear you may be unable to follow this
        rule this party, sadly, may not be for you.{" "}
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
      <h3>Give space</h3>
      <p>
        If you see two or more people having sex don’t invade their space by
        staring too closely. Like the no piggybacking rule, it's awkward to have
        to shoo someone away. You can respectfully look at people have fun but
        give them plenty of space or you'll get asked to back off.
      </p>
      <h2>Rule # 8</h2>
      <h3>No squirting</h3>
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
