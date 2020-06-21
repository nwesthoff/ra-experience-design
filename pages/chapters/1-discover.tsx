import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import Citation from "../../components/Bibliography/Citation";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import Link from "next/link";
import ImageCarousel from "../../components/ImageCarousel";

const DiscoverPage: NextPage = () => (
  <Layout title="Discover | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Discover</h1>
        <p>
          Every good design process begins with research, to <em>learn</em>{" "}
          about and <em>discover</em> the context designed experiences are
          happening in. This phase of analysis serves two main purposes, to
          inspire us in preparation of idea generation <em>and</em> provide
          constraints during evaluation. There's a plethora of <em>tools</em>,{" "}
          <em>methodologies</em> and <em>practices</em> to guide us through this
          process. These concepts help us navigate the way we learn about the
          context we're designing for, which we'll go over in this chapter.
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
          <Citation id="mattInterview" />. Some clients have <em>no idea</em> of
          what their customers think because they think they're subject matter
          experts. Design research is about increasing proximity to our users,
          to better understand what their needs are. If you don’t understand
          your users, the ideas you generate will be worthless{" "}
          <Citation id="nngroupIdeation" />.
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
          customer wants, but at other times they oppose each other. In the end,
          it's a balancing act. Personally I feel that, as designers, we have an
          ethical responsibility to craft products that benefit people. We have
          to try to get a mutual win for the business and customers because,
          unfortunately, we can't always win. When that happens is where the
          hard decisions will have to be made (and usually they're in favour of
          the business) <Citation id="mattInterview" />.
        </p>
        <p>
          When doing research we have to be selective about who we talk to. The
          importance of this is beautifully illustrated in the book Alchemy, by
          Rory Sutherland:{" "}
        </p>
        <blockquote>
          <p>
            “Metrics, and especially averages, encourage you to focus on the
            middle of a market, but innovation happens at the extremes. You are
            more likely to come up with a good idea focusing on one outlier than
            on ten average users.”
          </p>
          <ul>
            <li>
              Rory Sutherland{" "}
              <Citation id="roryAlchemy" page="100" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <p>
          We don't get inspired by people that care a little about something, we
          find value in the extremes. That doesn't mean we only talk to people
          who care about something a lot. Generally, we should also talk to
          people who don't care about something at all!
        </p>
        <h3>Generative or Exploratory Research</h3>
        <p>
          To make sense of these interweaved messes, design research usually
          starts with generative research. This is the type of research to
          figure out what we should be doing and pay attention to. It leads to
          ideas and is used to define the problem. A generative research
          question sounds something like <em>“What’s up with...?”</em>{" "}
          <Citation id="justEnough" page="33" />.
        </p>
        <p>
          Generative research and analysis develop an understanding of who our
          users are <em>as humans</em>, and how they experience their everyday
          lives <Citation id="dscout" />. It points out useful problems to
          solve. Generative research pulls our thought away from the product and
          puts us close to the lives of the people we are trying to help. It's
          easy to focus on the product which can lead us to become quite
          short-sighted. When we focus on people, we're able to come up with
          truly helpful solutions. It flips our thinking to become problem-space
          oriented instead of solution-oriented.
        </p>
        <h3>Descriptive or Explanatory Research</h3>
        <p>
          Following our exploratory research, we should determine the unmet
          needs that are most commonly voiced. The result of generative research
          might be a hypothesis, like;{" "}
          <em>
            “People wear clothes as a statement, to not only show what they
            think is beautiful, but also to show what they care about”
          </em>
          .
        </p>
        <p>
          Next steps could include further research how people currently show
          their values through fashion. When performing descriptive research, we
          no longer focus on what problem we're solving, but rather how we might
          solve the problem. While the activities can be very similar to
          generative research, the high-level question is different. We go from{" "}
          <em>“What's a good problem to solve?”</em> to{" "}
          <em>“What is the best way to solve the problem we've identified?”</em>{" "}
          <Citation id="justEnough" page="14" />.{" "}
        </p>
        <h3>Evaluative Research</h3>
        <p>
          Continuing this process, after generating lots of{" "}
          <Link href="./3-develop">
            <a target="blank">ideas</a>
          </Link>{" "}
          and building{" "}
          <Link href="./3-deliver">
            <a target="blank">prototypes</a>
          </Link>
          , we move back into research again. We start asking ourselves,{" "}
          <em>“Are we getting close?”</em>. Once we're at this stage, we're able
          to put our ideas out in the world to test. Evaluative research should
          be done continuously and iteratively.
        </p>
        <h3>Data in Research</h3>
        <p>
          Matt <Citation id="mattInterview" hideAuthor /> said{" "}
          <em>'always on'</em> data allows him to quickly grab quantitative data
          when he needs it. My friend <a href="http://zeno.zone">Zeno</a>, Matt
          and I spoke about the differences between qualitative and quantitative
          data. His experience has been that corporates often get too attached
          to large amounts of data. Business people are much more comfortable
          speaking in data instead of soundbites. Matt tries to get stakeholder
          buy-in by backing up qualitative data with quantitative data and
          vice-versa.{" "}
          <em>“Data is telling you what's happening, but not why”</em>, he tells
          us.
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
        <figure>
          <img src="/img/interviews.png" />
          <figcaption>Figure: A grasp of our interview subjects</figcaption>
        </figure>
        <p>
          Our primary research was a mix of in-depth <em>user interviews</em>{" "}
          <Citation id="ideoUserInterview" /> and <em>expert interviews</em>{" "}
          <Citation id="ideoExpertInterview" />. During the entire project we
          spoke with 12 (potential) users from various countries and with
          varying interest in sustainable business. In addition, we spoke with
          11 industry experts on sustainability, digital fashion and fashion
          marketing. This was assisted by industry insight through secondary
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
      </ContentContainer>
    </CaseStudyWrapper>
    <ImageCarousel
      imageArr={[
        { src: "/img/iridiscence.jpg" },
        { src: "/img/image2.jpg" },
        { src: "/img/outfit-06.jpg" },
        { src: "/img/image3.jpg" },
        { src: "/img/coronavirus-store.png" },
      ]}
    />
    <CaseStudyWrapper style={{ margin: "0" }}>
      <ContentContainer>
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
