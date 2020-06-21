import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import Personas from "../../components/Personas";
import Citation from "../../components/Bibliography/Citation";
import Link from "next/link";

const DefinePage = () => (
  <Layout title="Empathise | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Define</h1>
        <p>
          Designers often describe their work as organizing complexity, to find
          clarity in chaos <Citation id="abductiveThinkingKolko" />. During
          synthesis, we often manipulate data, words and pictures, to create
          cohesion and a sense of continuity in our work. The define phase is
          everything that pushes towards the organization, reduction and
          clarity. Synthesis is often described as the most elusive and hardest
          part of design.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <blockquote>
          <p>“Good design is as little design as possible”</p>
          <ul>
            <li>
              Dieter Rams <Citation id="ramsPrinciples" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <h2>Sense-making</h2>
        <p>
          This phase intends to make sense of our research data. Before we're
          able to develop new ideas we have to <em>prioritize</em> which
          problems our users have most (or most often) trouble with{" "}
          <Citation id="dscout" />. Structured data also enables us to
          communicate better with each other, as well as outside stakeholders.{" "}
        </p>
        <h3>Magic of Design</h3>
        <p>
          Many aspects of design are visible activities and easy to grasp even
          for non-designers. They are easily understood by watching our idols.
          Synthesis is often a lot more solitary and completely hidden as a
          result. Some (good) designers have magical status because synthesis is
          often performed privately <Citation id="abductiveThinkingKolko" />.{" "}
        </p>
        <blockquote>
          <p>“A good designer can create normalcy out of chaos.”</p>
          <ul>
            <li>
              Jeffrey Veen <Citation id="jeffVeen" page="104" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <p>
          Only after{" "}
          <Link href="./3-develop">
            <a>ideation</a>
          </Link>{" "}
          has started the work becomes transparent again. The result is
          designers often have trouble communicating the value of their insights
          due to a lack of transparency.
        </p>
        <blockquote>
          <p>
            “When synthesis is conducted as a private exercise, there is no
            visible connection between the input and the output; often, even the
            designers themselves are unable to articulate exactly why their
            design insights are valuable.”
          </p>
          <ul>
            <li>
              Jon Kolko <Citation id="abductiveThinkingKolko" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <h3>Co-design</h3>
        <p>
          Design synthesis has not drastically changed since Kolko's analysis.
          Nonetheless, there has been a sizeable body of research drawing
          attention to the transition from individual to group-level
          sense-making. Supporting verbal exchanges and cognitive processes in
          collective sense-making <Citation id="stiglianiCodesign" /> .{" "}
        </p>
        <h2>Insight</h2>
        <p>
          Data becomes useful to the design process once we start to see themes.
          To find themes in a vast amount of data, designers should analyse word
          repetitions and analyse metaphors and analogies{" "}
          <Citation id="insightDepth" />. This is what we call <em>insight</em>.
          Arunima, design researcher at IDEO, says design research is more than
          describing the <em>now</em>, it's about inspiring the <em>next</em>{" "}
          <Citation id="arunimaIDEO" />. She describes insight as:{" "}
          <em>“a gut-felt response that makes you sit up and think”</em>. It
          changes our opinions and consequently how we solve a problem.
          Spotify's Adrian Buendia is a bit more pragmatic, he said:{" "}
        </p>
        <blockquote>
          <p>
            “[F]or us the real magic is in the insight — the interpretation of
            that information”
          </p>
          <ul>
            <li>
              Adrian Buendia <Citation id="spotify2" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <h3>Perspective</h3>
        <p>
          Even insight generation is a function of personal experience. Yuan &
          Hsieh <Citation id="insightDepth" hideAuthor /> describe how insight
          is the result of an observation, influenced by current knowledge
          (epistemology).
        </p>
        <figure>
          <a download href="/img/insight-kolko.jpg">
            <img src="/img/insight-kolko.jpg" />
          </a>
          <figcaption>
            Figure: Generation of insight <Citation id="insightDepth" />
          </figcaption>
        </figure>
        <p>
          Data gathered through during discovery are guided by the researcher's
          ethical standards and morals. Their intellectual prowess and the
          accumulation of world view as well as the breadth of their experience.
        </p>
      </ContentContainer>
    </PageWrapper>

    <CaseStudyWrapper style={{ paddingBottom: "0" }}>
      <ContentContainer>
        <h2>In Practice</h2>
        <p>
          Throughout the project we used several techniques to (collaboratively)
          make sense of the context we were working in. With the vast amounts of
          data we produced it was easy to get lost, but several tools helped us
          see the red thread in our work.
        </p>
        <h3>Interview Downloads</h3>
        <p>
          Digesting our 20+ thirty to sixty minute interviews provided quite a
          challenge. Interview downloads <Citation id="arunimaIDEO" /> are a
          great way to collaboratively summarise our results. Afterwards they
          were easy to share with the team, which proved necessary because some
          of our interviews were in Portuguese and Russian.
        </p>
        <h3>Affinity Mapping</h3>
        <p>
          Our business, industry and interviews all came together in an affinity
          map. We clustered our digital Post-It's™ and described what themes
          they signify.
        </p>
        <figure>
          <img style={{ maxWidth: "600px" }} src="/img/affinity-map.png" />
          <figcaption>
            Figure: The clusters we created from our collective research
          </figcaption>
        </figure>
        <h3>Personas</h3>
        <p>
          We used personas to combine similar user needs, habits and attitudes
          to make our user research more digestible. They communicate the
          nuanced commonalities and differences between Spotify's users{" "}
          <Citation id="spotify1" />. These personas were created for our
          project for PVH, have a swipe!{" "}
        </p>
      </ContentContainer>
    </CaseStudyWrapper>
    <Personas />
    <CaseStudyWrapper style={{ margin: "0" }}>
      <ContentContainer>
        <p>
          A common pitfall to personas is that they become one-dimensional,
          hypothetical stereotypes <Citation id="dscoutPersona" />. Personas
          aren't supposed to be a caricature, they exist to create empathy, to
          remind us of who we spoke with and who we're designing for. As our
          research advanced, our personas also developed.
        </p>
        <h2>Key findings</h2>
        <p>Despite the rise of the sustainability movement:</p>
        <ul>
          <li>
            The majority of fast fashion lovers still want cute, cheap outfits
            that look great on Instagram
          </li>
          <li>
            Those who are concerned by environmental issues, still desire a
            different look every day, they don’t really want clothes that last
            long
          </li>
        </ul>
        <p>
          Although we tried not to be driven too much by technology, we saw a
          clear opportunity; fashion designers are exploring digital clothing.
          We went into ideation guided by the following statement:
        </p>
        <p>
          <strong>
            How might we make people feel they have an endless wardrobe without
            owning stuff?
          </strong>
        </p>
      </ContentContainer>
    </CaseStudyWrapper>
    <NextChapter title="Develop" index={3} />
  </Layout>
);

export default DefinePage;
