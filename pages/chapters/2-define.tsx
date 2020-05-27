import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import Personas from "../../components/Personas";
import Citation from "../../components/Bibliography/Citation";

const DefinePage = () => (
  <Layout title="Empathise | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Define</h1>
        <p>
          Experience Design Introduction... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <h3>Sense-making</h3>
        <p>
          Personas combine similar user needs, habits, and attitudes and
          communicate the nuanced commonalities and differences between
          Spotify's users <Citation id="spotify1" />.
        </p>

        <p>Spotify says:</p>
        <blockquote>
          “[F]or us the real magic is in the insight — the interpretation of
          that information”
          <span className="quoteBy">
            <Citation id="spotify2" />
          </span>
        </blockquote>
        <p>
          Personas come in all kinds of ways, shapes and forms, but generally
          they look like a profile of a user within the user group they
          represent. Here are some examples, have a swipe!
        </p>
      </ContentContainer>
    </PageWrapper>

    <Personas />

    <PageWrapper>
      <ContentContainer>
        <p>
          Insight depth is defined to measure an insight's influential extent{" "}
          <Citation id="insight1" />.
        </p>
      </ContentContainer>
    </PageWrapper>

    <CaseStudyWrapper>
      <ContentContainer wide>
        <h2>Case Study</h2>
        <p>
          Practically applied knowledge...Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </ContentContainer>
    </CaseStudyWrapper>
    <NextChapter title="Ideate" index={3} />
  </Layout>
);

export default DefinePage;
