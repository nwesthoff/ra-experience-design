import Layout from "../components/Layout";
import styled from "styled-components";
import ChapterBlock from "../components/ChapterBlock";
import { theme } from "../config/theme";

const PageIntroduction = styled.div`
  width: 1200px;
  max-width: 100%;

  h1 {
    font-size: 6rem;
    line-height: 1em;
  }

  p {
    border-left: 1px solid #979797;
    padding-left: 3rem;
    max-width: 630px;
    color: #545454;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const PageWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexPage = () => (
  <Layout title="Introduction | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>
          Experience <br /> Design
        </h1>
        <p>
          Experience Design Introduction... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </PageIntroduction>

      <ChapterBlock
        title="Analyse"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend placerat justo, vitae auctor purus eleifend id. Phasellus pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel. "
        index={1}
      />

      <ChapterBlock
        title="Synthesise"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend placerat justo, vitae auctor purus eleifend id. Phasellus pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel. "
        index={2}
        reverse
      />

      <ChapterBlock
        title="Simulate"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend placerat justo, vitae auctor purus eleifend id. Phasellus pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel. "
        index={3}
      />

      <ChapterBlock
        title="Evaluate"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend placerat justo, vitae auctor purus eleifend id. Phasellus pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel. "
        index={4}
        reverse
      />

      <ChapterBlock
        title="Repeat"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend placerat justo, vitae auctor purus eleifend id. Phasellus pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel. "
        index={5}
      />
    </PageWrapper>
  </Layout>
);

export default IndexPage;
