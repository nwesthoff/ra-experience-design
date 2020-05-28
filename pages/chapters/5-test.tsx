import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import { NextPage } from "next";
import OverlayHeatmap from "../../components/OverlayHeatmap";
import { useState } from "react";

const TestPage: NextPage = () => {
  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <Layout title="Test | RA Experience Design">
      <OverlayHeatmap showOverlay={showHeatmap} />
      <PageWrapper>
        <PageIntroduction>
          <h1>Test</h1>
          <p>
            Experience Design Introduction... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque eleifend placerat justo,
            vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
            consequat vestibulum, diam odio pretium felis, id sodales odio eros
            non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat
            vel.
          </p>
        </PageIntroduction>
      </PageWrapper>
      <PageWrapper>
        <ContentContainer>
          <h2>Usability testing</h2>
          toggle heatmap:{" "}
          <button
            onClick={() => {
              setShowHeatmap(!showHeatmap);
            }}
          >
            {showHeatmap ? "hide" : "show"}
          </button>
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
            non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat
            vel.
          </p>
        </ContentContainer>
      </CaseStudyWrapper>
      <NextChapter title="Conclusion" index={6} />
    </Layout>
  );
};

export default TestPage;
