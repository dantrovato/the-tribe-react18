import { Footer } from "./Footer";

const FAQ = () => {
  return (
    <div className="m-5 text-muted">
      <h1 className="mb-2">FAQs</h1>

      <p className="mb-4">Q - Can you tell me more about the parties?</p>
      <p className="mb-4">
        A - Before the party you'll have the option to be added to a WhatsApp
        group with all the other guests so you can get to know each other and
        flirt a bit. These groups get pingy so you may want to mute the chat.
        Nude pictures flow freely, here, so be aware of that. At the bigger
        events most people will mostly know one another. If you're a complete
        newbie, chances are you will be at one of the smaller introductory
        events. People will just chill and chat over drinks for a while and, at
        some point, surely, somebody will start playing and more and more people
        will then join in, separately or otherwise. It's all super friendly and
        free flowing. Remember that there is never any pressure to join in and
        if you're uncomfortable at any point, do speak to anyone wearing a
        flashing blue armband. The 'generals' are there to make your night as
        amazing as it can be. Please read the rules here: <br />
      </p>
      <a
        className="navbar-brand text-danger p-4"
        href="https://thetribeexperiment.com/rules"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="kimjong.png"
          alt="kim jong un pointing to the right"
          className="mb-5"
          style={{ maxWidth: "100%", marginTop: "2rem" }}
        />
        <span className="p-5 ">Rules</span>
      </a>
      <p className="mb-4">Q - What do you do about sexual health safety?</p>
      <p className="mb-4">
        A - We ask members to get tested before attending the party. Guests get
        a wristband of a colour that indicates how recent the last test was up
        to a maximum of three months. This is so that guests can know at a
        glance who had a sexual screening when. Not everyone manages to get a
        test on time but it's good practice to push for it. It's then up to
        individual members to determine who they want to play with. You can read
        more about it in the{" "}
        <a
          className="navbar-brand text-danger"
          href="https://thetribeexperiment.com/rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          rules
        </a>{" "}
        section.
      </p>
      <p className="mb-4">Q - Am I expected to participate?</p>
      <p className="mb-4">A - No. Never. You can just come and make friends.</p>
      <p className="mb-4">
        Q - What is the male to female ration, what kind of people attend and
        what age group are they?
      </p>
      <p className="mb-4">
        A - We aim at a 45:55 male to female ratio but that varies from party to
        party. The age bracket tends to range from early 20s to late 30s and
        members are friendly, open minded and fuuuuuun.
      </p>
      <p className="mb-4">Q - What if I don't fancy anyone?</p>
      <p className="mb-4">
        A - We invite the most attractive people on the London scene so it's
        unlikely that you will not fancy absolutely anybody. That said, we do
        suggest to people to come with the purpose of making friends and great
        connections. Sex is a just bi-product.
      </p>
      <p className="mb-4">Q - How do I turn somebody down?</p>
      <p className="mb-4">
        A - Come prepared with some stock phrases, such as "You're ruining my
        chi", "I think you're being a bit ambitious there" or "I would rather
        put bleach in my eyes". All of these work. However, we find that a
        softer approach is generally nicer for everyone involved. Say, "Maybe
        later", "Not now", "I'm taking a break" etc. People are grown ups and
        know the score. In any case, you will never have to explain yourself. If
        anybody bothers you, go to speak to one of the "generals" (people with a
        flashy blue armband) and tell them about it. They will deal with it for
        you.
      </p>
      <p className="mb-4">
        Q - I am a single girl and I am a bit intimidated. What can I do?
      </p>
      <p className="mb-4">
        A - In every party chat there is a link to a What's App group for single
        girls. The idea is for the girls to meet at a bar for pre-drinks, bond,
        and come together as a group.
      </p>
      <p className="mb-4">Q - Can I get changed at the party?</p>
      <p className="mb-4">
        A - Yes, of course. Come in your civilian clothes and change here.
      </p>
      <p className="mb-4">Q - Is every room an absolute fuck fest?</p>
      <p className="mb-4">
        A - No, not at all. Play generally only goes on in a couple of rooms.
        There is a chill out ball pit where no play is allowed and the dancy bit
        where people just socialize, chat and throw some moves.
      </p>
      <p className="mb-4">Q - Is there a bar?</p>
      <p className="mb-4">
        A - It depends on the particular party and where it's held. Generally
        it's bring your own bottle.
      </p>

      <Footer />
    </div>
  );
};

export default FAQ;
