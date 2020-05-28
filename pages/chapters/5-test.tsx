import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import { NextPage } from "next";
import OverlayHeatmap from "../../components/OverlayHeatmap";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { darken } from "polished";

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  margin: 1.2rem;
  color: white;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: ${theme.colors.primary};

  &:hover {
    background: ${darken(0.05, theme.colors.primary)};
  }
`;

const TestPage: NextPage = () => {
  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <OverlayHeatmap showOverlay={showHeatmap}>
      <Layout title="Test | RA Experience Design">
        <PageWrapper>
          <PageIntroduction>
            <h1>Test</h1>
            <p>
              Experience Design Introduction... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque eleifend placerat justo,
              vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
              consequat vestibulum, diam odio pretium felis, id sodales odio
              eros non leo. Duis tempor mollis mauris, at ullamcorper lorem
              volutpat vel.
            </p>
          </PageIntroduction>
        </PageWrapper>
        <PageWrapper>
          <ContentContainer>
            <h2>Usability testing</h2>
            toggle heatmap:{" "}
            <Button
              onClick={() => {
                setShowHeatmap(!showHeatmap);
              }}
            >
              {showHeatmap ? "hide" : "show"}
            </Button>
          </ContentContainer>
        </PageWrapper>
        <CaseStudyWrapper>
          <ContentContainer wide>
            <h2>Case Study</h2>
            <p>
              Practically applied knowledge...Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque eleifend placerat justo,
              vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
              consequat vestibulum, diam odio pretium felis, id sodales odio
              eros non leo. Duis tempor mollis mauris, at ullamcorper lorem
              volutpat vel.
            </p>
          </ContentContainer>
        </CaseStudyWrapper>
        <NextChapter title="Conclusion" index={6} />
      </Layout>
    </OverlayHeatmap>
  );
};

export default TestPage;
