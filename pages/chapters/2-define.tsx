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
          everything that pushes towards organization, reduction and clarity.
          Synthesis is often described as the most elusive, and hardest part of
          design.
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
        <h2>Magic of Design</h2>
        <p>
          Many aspects of design are visible activities, and easy to grasp even
          for non-designers. They are easily understood by watching our idols.
          Synthesis is often a lot more solitary, completely hidden and as a
          result, less obviously understood. Good designers come with a magical
          status because synthesis is frequently performed privately in
          professional practice <Citation id="abductiveThinkingKolko" />.{" "}
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
          That opaqueness only disappears after{" "}
          <Link href="./3-develop">
            <a>ideation</a>
          </Link>{" "}
          has started. The result is designers often have trouble communicating
          the value of their insights due to a lack of transparency.
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
        <h2>Value of sense-making</h2>
        <ul>
          <li>Prioritize work</li>
          <li>
            Communicate with each other, as well as outside stakeholders.{" "}
          </li>
        </ul>
        <h2>Co-design</h2>
        <p>
          Design synthesis has not drastically changed since Kolko's analysis.
          Nonetheless, there has been a sizeable body of research drawing
          attention to transition from individual to group-level sense-making.
          Supporting verbal exchanges and cognitive processes in collective
          sense-making <Citation id="stiglianiCodesign" /> .{" "}
        </p>
        <h2>Insight</h2>
        <p>
          Data becomes useful to the design process once we start to see themes,
          trends and developments. In order to find themes in a vast amount of
          data, designers should analyse word repetitions, scrutinize terms,and
          analyse linguistic features like metaphors or transitions{" "}
          <Citation id="insightDepth" />. This is what we call <em>insight</em>.
          Arunima, design researcher at IDEO, says design research is about more
          than describing the <em>now</em>, it's about inspiring the{" "}
          <em>next</em> <Citation id="arunimaIDEO" />. She describes insight as:
          “a gut-felt response that makes you sit up and think”. It changes our
          opinions and as a result how we solve a problem. Spotify's Adrian
          Buendia is a bit more pragmatic, he said:{" "}
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
          Even the insight generation is a function of experience. Yuan &amp;
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
          ethic standards and morals. Their intellectual prowess, and the
          accumulation of world view as well as breadth of experience.
        </p>
        <h2>How Might We</h2>
      </ContentContainer>
    </PageWrapper>

    <CaseStudyWrapper>
      <ContentContainer wide>
        <h2>In Practice</h2>
        <p>
          Design research tasks are not sequential, rather, they are iterative
        </p>
        <h3>Interview Downloads</h3>
        <h3>Affinity Mapping</h3>
        <h3>Customer Journey Map</h3>
        <h3>Design Sprint</h3>
        <p>
          adds sketch + decide / lightning jams / incorporates people from many
          disciplines in the process
        </p>
        <h3>Personas</h3>
        <p>
          Personas come in all kinds of ways, shapes and forms, but generally
          they look like a profile of a user within the user group they
          represent. Persona's combine similar user needs, habits, and attitudes
          and communicate the nuanced commonalities and differences between
          Spotify's users <Citation id="spotify1" />. Here are some examples,
          have a swipe!
        </p>
      </ContentContainer>
    </CaseStudyWrapper>
    <Personas />
    <CaseStudyWrapper style={{ margin: "0" }}>
      <ContentContainer>
        <p>
          It's important to note that our meaningful, rich social relationships
          are with real humans — not with one-dimensional, hypothetical
          stereotypes <Citation id="dscoutPersona" />. They aren't supposed to
          be a caricature. Personas exist to create empathy, to remind us of who
          we spoke with, and who we're designing for. As our research advances,
          personas move with the project. Personas should influence how we
          recruit people for ongoing research too, by creating participant
          communities for each of the personas.
        </p>
      </ContentContainer>
    </CaseStudyWrapper>
    <NextChapter title="Develop" index={3} />
  </Layout>
);

export default DefinePage;
