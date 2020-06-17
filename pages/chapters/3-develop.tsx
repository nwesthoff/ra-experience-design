import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import ContentContainer from "../../components/ContentContainer";
import Citation from "../../components/Bibliography/Citation";

const DevelopPage = () => (
  <Layout title="Develop | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Develop</h1>
        <p>
          Experience Design Introduction... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </PageIntroduction>
    </PageWrapper>
    <PageWrapper>
      <ContentContainer>
        <blockquote>
          <p>
            “You want to be able to project yourself 20 years into the future,
            and then think backwards from there. Trust yourself—20 years is a
            long time; it’s ok if your ideas about it seem pretty radical.”
          </p>
          <ul>
            <li>
              Sam Altman (<Citation id="samAltman">2020</Citation>)
            </li>
          </ul>
        </blockquote>
        <h2>Ideate</h2>
        <ul>
          <li>How Might We</li>
          <li>Crazy 8&#39;s</li>
          <li>Hyper Island Pop-up Agency Crazy 8</li>
          <li>SCAMPER</li>
          <li>Analogies</li>
          <li>Bodystorm</li>
          <li>Synectics</li>
          <li>(million dollar party)</li>
        </ul>
        <h2>Evaluate</h2>
        <h3>Levels of experiencing product</h3>
        <ul>
          <li>Aesthetic Experience</li>
          <li>Experience of Meaning</li>
          <li>Emotional Experience</li>
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
    <NextChapter title="Deliver" index={4} />
  </Layout>
);

export default DevelopPage;
