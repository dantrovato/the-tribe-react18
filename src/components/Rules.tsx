import "./Rules.module.css";
import { Footer } from "./Footer";

const Rules = () => {
  const danger = "#dc3545";
  return (
    <div className="m-5 text-muted" style={{ textAlign: "justify" }}>
      <div className="mb-5" style={{ border: `1px solid ${danger}` }}>
        <h2 className="text-danger text-center pt-3 pb-3">
          Sexual health safety
        </h2>
        <h3 className="text-danger text-center pb-3">The wristband system:</h3>
        <p className="text-danger p-3">
          While you don't have to have a recent sexual health result to attend
          the party, we recommend that you do. We also recommend having a
          conversation about your sexual health with whomever you're about to
          play with. Sometimes, it's inconvenient to do so, especially when
          engaging with someone quite spontaneously. To make this smoother, we
          have introduced the wristband system.
          <br /> Upon arrival, you can opitonally present your recent sexual
          health test results. Based on the date of your test, you will receive
          a wristband of a color that indicates the recency of your test:
          <br />
          <br />- Green wristband (for example) for tests taken within the last
          month.
          <br />- Yellow wristband for tests taken within the last two months.
          <br />- Orange wristband for tests taken within the last three months.
          <br />- Grey wristband for partial test results.
          <br />
          <br /> (The colours will change from party to party)
          <br />
          <br /> No wristband provided for tests that are more than three months
          old.
          <br />
          <br /> If you do not have recent test results, it's okay; not everyone
          does. We encourage open discussions about your recent sexual history
          and the reasons for not having a wristband. While we respect personal
          choices, we discourage unprotected oral sex with individuals lacking a
          wristband. Even with a wristband, we urge guests to avoid unprotected
          intercourse and openly communicate about their sexual history since
          their last clear test results. While this system enhances the sexual
          health safety of our community, it is not foolproof, and personal
          responsibility remains essential. The wristband system serves as a
          quick way to know when somebody got tested. Engaging in unprotected
          oral sex with someone you just met at the event still carries risks,
          as does kissing, apparently (goddamn it!). Your cooperation is vital
          in maintaining a safe community.
        </p>
      </div>

      <img
        src="./orgypool.webp"
        alt="Sexy people kissing in shower"
        className="mb-3"
        style={{ width: "100%", maxHeight: "40%" }}
      />
      <h2>Rule # 1</h2>
      <h3>Enthusiastic consent!</h3>
      <p>
        Do not touch anybody sexually without first receiving clear,
        enthusiastic consent. This applies to people you have played with in the
        past. Things change quickly in the community and just because somebody
        was happy to play with you at one stage doesn't mean they want to play
        with you now.
      </p>
      <h2>Rule # 2</h2>
      <h3>Know your boundaries</h3>
      <p>
        Consent is everything. If someone crosses your boundaries, you have
        every right to let them know—and we encourage you to do so. If someone
        touches your hip and you don’t like it, it's completely okay to speak up
        or give a clear non-verbal signal.
        <br />
        While no one should ever overstep, staying silent or freezing in the
        moment can sometimes be misinterpreted. You never have to go along with
        something you’re unsure about, and setting clear boundaries in the
        moment protects both you and those around you.
        <br />
        We understand that some people may struggle with freezing in certain
        situations, and we have nothing but empathy and support for that.
        However, in an environment like this, where open, enthusiastic
        communication is key, expressing your limits is completely normal.
        Although it's incredibly unlikely an event may occur, we highly
        recommend you prepare yourself for giving a verbal signal by practising
        what you might say. If this feels difficult or overwhelming, we
        completely understand, but then events of this kind might not be the
        best fit for you.
        <br />
        That said, these are warm, welcoming spaces, and you’re never alone. Our
        "Generals" (easily spotted in blue armbands) are always on hand to
        ensure that everyone feels safe and respected. At the end of the day,
        we’re all here to have a good time—let’s make sure it’s a great one for
        everyone.
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
      <h2>Rule # 9</h2>
      <h3>No drinks, chewing gum, shoes, phones in the play areas</h3>
      <p>Your things will be waiting for you when you come out.</p>
      <h2>Rule # 10</h2>
      <h3>Don't get too drunk</h3>
      <p>If you're not sober enough you won't be let into the play areas.</p>
      <h2>Rule # 11</h2>
      <h3>
        No DMs to anybody in the what's app chat until you asked them in the
        chat first
      </h3>
      <p>
        Girls especially can get inundated with unwanted messages. Just ask in
        the chat if you can message them privately.
      </p>
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
