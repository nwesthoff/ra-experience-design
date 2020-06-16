import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import Citation from "../../components/Bibliography/Citation";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import NextChapter from "../../components/Navigation/NextChapter";

const DiscoverPage: NextPage = () => (
  <Layout title="Discover | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Discover</h1>
        <p>
          Every good design process begins with research, to <em>learn</em>{" "}
          about and <em>discover</em> the context designed experiences are
          happening in. This phase of analysis serves two main purposes, to
          inspire us in preparation of idea generation, <em>and</em> provide
          constraints during evaluation. There's a whole plethora of{" "}
          <em>tools</em>,<em>methodologies</em> and <em>practices</em> to guide
          us through this process. These concepts help us navigate the way we
          learn about the context we're designing for, which we'll go over in
          this chapter.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <h2>Experiences</h2>
        <p>
          First of all, it's important to be aware that experiences are not
          self-contained, they happen inside a larger context and are greatly
          influenced by the way individuals perceive them. As Peter Benz puts
          it:
        </p>
        <blockquote>
          “Experiences emerge in the intertwinement of a variety of objects,
          interactions, spaces and information.”
          <ul>
            <li>
              Peter Benz (<Citation id="experienceBenz">2015, pp. 32</Citation>)
            </li>
          </ul>
        </blockquote>
        <p>
          Benz describes how lived experiences are a result of a moving
          intersection between <em>sense</em>, <em>consciousness</em>,{" "}
          <em>body</em>, and the
          <em>world</em>. An approach for experience designers, as such, could
          focus on <em>thinking</em>, <em>sensing</em> and <em>feeling</em>.
          Though, it's important to remember that these elements can't be seen
          in isolation either, in actual experience they are deeply entangled as
          well. When we do design research we have to understand that everyday
          experience is continuous, seamless, and endless, we're only trying to
          understand a small slice of that.
        </p>
        <p>
          Experiences are influenced by differences far-reaching like our
          marital status, to mundane differences like the operating system our
          phone is using.
        </p>
        <h2>Generative or Exploratory Research</h2>
        <p>
          To make sense of these interweaved messes, research usually starts
          with generative research. This is the type of research to figure out
          what we should be doing and pay attention to. It leads to ideas, and
          is used to define the problem. A generative research question sounds
          something like
          <em>“What’s up with...?”</em>
          <Citation id="justEnough">(Hall, 2013, pp. 33)</Citation>.
        </p>
        <p>Generative research can include:</p>
        <ul>
          <li>Interviews</li>
          <li>Field observation</li>
          <li>Reviewing existing literature</li>
        </ul>
        <p>
          Generative research and analysis develops an understanding of
          <em>who</em> our users are as humans, and how they experience their
          everyday lives <Citation id="dscout" />. It points out useful problems
          to solve. The result of generative research might be a hypothesis,
          like;
          <em>
            “Local parents of young children would value an app that offers
            ideas for science events and activities based on their child’s
            developmental milestones”
          </em>
          .
        </p>
        <p>
          Comb through it and determine the most commonly voiced unmet needs
        </p>
        <p>
          Then you can do further (descriptive) research on how parents
          recognize and commemorate those milestones.
        </p>
        <h2>Descriptive or Explanatory Research</h2>
        <h2>The Process</h2>
        <blockquote>
          “Ideally, everyone who is on the design team should also participate
          in the research.”
          <ul>
            <li>
              Erika Hall (<Citation id="justEnough">2013, pp. 10</Citation>)
            </li>
          </ul>
        </blockquote>
        <h3>Primary research</h3>
        <ul>
          <li>User interviews</li>
          <li>Expert interviews</li>
        </ul>
        <h3>Secondary Research</h3>
        <ul>
          <li>Trend analysis</li>
          <li>DESTEP/PESTEL</li>
          <li>SWOT analysis</li>
        </ul>
      </ContentContainer>
    </PageWrapper>

    <CaseStudyWrapper>
      <ContentContainer wide>
        <h2>In Practice</h2>
        <p>
          Practically applied knowledge...Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </ContentContainer>
    </CaseStudyWrapper>
    <NextChapter title="Define" index={2} />
  </Layout>
);

export default DiscoverPage;
