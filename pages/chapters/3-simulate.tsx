import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import ContentContainer from "../../components/ContentContainer";

const SimulatePage = () => (
  <Layout title="Simulate | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Simulate</h1>
        <p>
          Experience Design Introduction... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </PageIntroduction>
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
    <NextChapter title="Evaluate" index={4} />
  </Layout>
);

export default SimulatePage;
