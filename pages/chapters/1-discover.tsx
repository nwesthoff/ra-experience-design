import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import Citation from "../../components/Bibliography/Citation";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import Link from "next/link";

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
        <figure>
          <video src="/video/what-is-experience.mp4" controls />
          <figcaption>
            Figure: What is experience? (
            <a href="https://twitter.com/StrangestMp4/status/1272218918325641216?s=20">
              source
            </a>
            ) <br />
            <small style={{ color: "#aaa" }}>
              (Look, I'm not pretending this is useful information, I'm just
              doing some mood setting here.)
            </small>
          </figcaption>
        </figure>
        <h2>Experience</h2>
        <p>
          First of all, it's important to be aware that experiences are not
          self-contained, they happen inside a larger context and are greatly
          influenced by the way individuals perceive them. As Peter Benz puts
          it:
        </p>
        <blockquote>
          <p>
            “Experiences emerge in the intertwinement of a variety of objects,
            interactions, spaces and information.”
          </p>
          <ul>
            <li>
              Peter Benz (<Citation id="experienceBenz">2015, pp. 32</Citation>)
            </li>
          </ul>
        </blockquote>
        <p>
          Benz describes how lived experiences are a result of a moving
          intersection between <em>sense</em>, <em>consciousness</em>,{" "}
          <em>body</em>, and the <em>world</em>. An approach for experience
          designers, as such, could focus on <em>thinking</em>, <em>sensing</em>{" "}
          and <em>feeling</em>. Though, it's important to remember that these
          elements can't be seen in isolation either, in actual experience they
          are deeply entangled as well. When we do design research we have to
          understand that everyday experience is continuous, seamless, and
          endless, we're only trying to understand a small slice of that.
        </p>
        <p>
          Experiences are influenced by differences far-reaching like our
          marital status, to mundane differences like the operating system our
          phone is using.{" "}
        </p>
        <h2>Research</h2>
        <blockquote>
          <p>
            “Ideally, everyone who is on the design team should also participate
            in the research.”
          </p>
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
          <li>Expert analysis</li>
          <li>Trend analysis</li>
          <li>DESTEP/PESTEL</li>
          <li>SWOT analysis</li>
        </ul>
        <h3>Generative or Exploratory Research</h3>
        <p>
          To make sense of these interweaved messes, design research usually
          starts with generative research. This is the type of research to
          figure out what we should be doing and pay attention to. It leads to
          ideas, and is used to define the problem. A generative research
          question sounds something like <em>“What’s up with...?”</em>{" "}
          <Citation id="justEnough">(Hall, 2013, pp. 33)</Citation>.
        </p>
        <p>Generative research can include:</p>
        <ul>
          <li>Interviews</li>
          <li>Field observation</li>
          <li>Reviewing existing literature</li>
        </ul>
        <p>
          Generative research and analysis develops an understanding of who our
          users are <em>as humans</em>, and how they experience their everyday
          lives <Citation id="dscout" />. It points out useful problems to
          solve. The point of generative research is that it takes us out of the
          product and puts us close to the the lives of the people we are trying
          to help. It's easy to focus on the product which can lead us to become
          quite short-sighted. When we break outside the box, we're able to come
          up with truly helpful solutions. It flips our thinking to become
          problem-space focused instead of solution focused.
        </p>
        <h3>Descriptive or Explanatory Research</h3>
        <p>
          Upon combing through our exploratory research (processes we'll learn
          more about in the{" "}
          <Link href="./2-define">
            <a target="blank">next chapter</a>
          </Link>
          ), we're able to determine the unmet needs that are most commonly
          voiced. The result of generative research might be a hypothesis, like;{" "}
          <em>
            “People wear clothes as a statement, to not only show what they
            think is beautiful, but also to show what they care about”
          </em>
          .
        </p>
        <p>
          The next step could be further research on how people currently show
          what they care about with fashion, as well as analogous experiences.
          When performing descriptive research, we no longer focus on what
          problem we're solving, but rather how we might solve the problem.
          While the activities can be very similar to generative research, the
          high-level question is different. We move away from{" "}
          <em>“What's a good problem to solve?”</em> and to{" "}
          <em>“What is the best way to solve the problem we've identified?”</em>{" "}
          <Citation id="justEnough">(Hall, 2013, pp. 14)</Citation>.{" "}
        </p>
        <h3>Evaluative Research</h3>
        <p>
          Even further on in the process, after generating lots of{" "}
          <Link href="./3-develop">
            <a target="blank">ideas</a>
          </Link>
          , and building{" "}
          <Link href="./3-develop">
            <a target="blank">prototypes</a>
          </Link>
          , we move back into research again. This is when we start asking
          ourselves, <em>“Are we getting close?”</em>. Once we're at this stage,
          we're able to put our ideas out in the world to test. This research
          should be done continuously and iteratively, fortunately any time we
          put our design solution in front of our users, we are doing some
          evaluative research.{" "}
        </p>
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
