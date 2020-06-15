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
          us through this process. These concepts help us <em>explore</em> and
          <em>make sense</em> of the context which we'll go over in this
          chapter.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <h3>Experiences</h3>
        <p>
          First of all, it&#39;s important to be aware that experiences are not
          self-contained, they happen inside a larger context and are greatly
          influenced by the way individuals perceive them. As Peter Benz puts
          it:
        </p>
        <blockquote>
          “Experiences emerge in the intertwinement of a variety of objects,
          interactions, spaces and information.”
          <ul>
            <li>
              Peter Benz <Citation id="">(2015, pp. 32)</Citation>
            </li>
          </ul>
        </blockquote>
        <p>
          Experiences are influenced by differences far-reaching like our
          marital status, to mundane differences like the operating system our
          phone is using. Benz describes how lived experiences are a result of a
          moving intersection between <em>sense</em>, <em>consciousness</em>,
          <em>body</em>, and the <em>world</em>. An approach for experience
          designers, as such, could focus on <em>thinking</em>, <em>sensing</em>{" "}
          and
          <em>feeling</em>. It's important to remember that these elements can't
          be seen in isolation however, in actual experience they are deeply
          entangled as well.
        </p>

        <h3>Exploration</h3>

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
