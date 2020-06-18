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
          <em>tools</em>, <em>methodologies</em> and <em>practices</em> to guide
          us through this process. These concepts help us navigate the way we
          learn about the context we're designing for, which we'll go over in
          this chapter.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <h2>Research</h2>
        <p>
          Businesses often think they know what their customers want, but they
          don't actively seek it out. They might hear bits and pieces, but in
          Matt's (experience designer at{" "}
          <a href="https://www.retrofuzz.com/">RetroFuzz</a> and our Industry
          Leader at Hyper Island) experience there's often no structure to it{" "}
          <Citation id="mattInterview" />. He's often had clients that ask for
          award winning experiences. While that certainly doesn't sound like a
          bad result, it does nothing more than to impress our contemporaries.
          Some clients have <em>no idea</em> of what their customers think,
          because they think they're subject matter experts. Design research is
          about increasing proximity to our users, to better understand what
          their needs are.
        </p>
        <blockquote>
          <p>
            “Ideally, everyone who is on the design team should also participate
            in the research.”
          </p>
          <ul>
            <li>
              Erika Hall <Citation id="justEnough" page="10" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <h3>Designing for who?</h3>
        <p>
          As designers working for a company or brand, there's an interesting
          duality to consider. Working commercially we ultimately want to do
          what's right for the business. Sometimes that's in line with what the
          customer wants, but at other times they oppose each other. In the end
          it's a balancing act. As designers we have to try to get a mutual win
          for the business and customers. Unfortunately, we can't win them all
          and when that happens that's where the hard decisions will have to be
          made <Citation id="mattInterview" />.
        </p>
        <h3>Generative or Exploratory Research</h3>
        <p>
          To make sense of these interweaved messes, design research usually
          starts with generative research. This is the type of research to
          figure out what we should be doing and pay attention to. It leads to
          ideas, and is used to define the problem. A generative research
          question sounds something like <em>“What’s up with...?”</em>{" "}
          <Citation id="justEnough" page="33" />.
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
          <Citation id="justEnough" page="14" />.{" "}
        </p>
        <h3>Evaluative Research</h3>
        <p>
          Even further on in the process, after generating lots of{" "}
          <Link href="./3-develop">
            <a target="blank">ideas</a>
          </Link>
          , and building{" "}
          <Link href="./3-deliver">
            <a target="blank">prototypes</a>
          </Link>
          , we move back into research again. This is when we start asking
          ourselves, <em>“Are we getting close?”</em>. Once we're at this stage,
          we're able to put our ideas out in the world to test. This research
          should be done continuously and iteratively, fortunately any time we
          put our design solution in front of our users, we are doing some
          evaluative research.
        </p>
      </ContentContainer>
    </PageWrapper>

    <CaseStudyWrapper>
      <ContentContainer>
        <h2>In Practice</h2>
        <p>
          For our module experience design, we were handed an assignment by
          PVH's global innovation team; Area52. Their brief? To help everybody
          become more sustainable: PVH, their consumers and other industry
          partners. After a quick session of <em>ripping the brief</em>{" "}
          <Citation id="diamondRevamped" /> with our industry leaders, we
          started our research process.{" "}
        </p>
        <h3>Primary research</h3>
        <p>
          Our primary research was a mix of in-depth <em>user interviews</em>{" "}
          <Citation id="ideoUserInterview" /> and <em>expert interviews</em>{" "}
          <Citation id="ideoExpertInterview" />. During the entire project we
          spoke with 12 (potential) users from various countries and with
          varying interest in sustainable business. We also spoke with industry
          11 experts on sustainability, digital fashion and fashion marketing.
          We backed this up with insight from the industry through secondary
          research.
        </p>
        <h3>Secondary Research</h3>
        <p>
          Our secondary research was a blend of industry analysis and business
          analysis. Our analysis of the fashion industry, with a focus on
          sustainability, revolved around a DESTEP (similar to PESTEL) analysis.
          It provides a holistic view of the industry and shows large movements
          in the industry as a whole. We learnt about PVH and its subsidiaries
          through a SWOT analysis. To top it all of we also analysed what
          fashion experts had to say about sustainability specifically.{" "}
        </p>
        <h2>Key findings</h2>
        <ul>
          <li>Digital & physical fashion are converging</li>
          <li>
            Fashion industry faces an <em>‘existential crisis’</em>
          </li>
          <li>
            The fashion industry is now responsible for 10% of all humanity's
            carbon emissions
          </li>
          <li>
            Mainstream brands (like Tommy Hilfiger) are starting to design 100%
            digitally
          </li>
          <li>
            Consumers are starting to shift towards supporting small, local and
            independent brands
          </li>
          <li>Consumers seek out brands that they align with morally</li>
        </ul>
      </ContentContainer>
    </CaseStudyWrapper>
    <NextChapter title="Define" index={2} />
  </Layout>
);

export default DiscoverPage;
