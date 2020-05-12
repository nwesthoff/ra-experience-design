import Layout from "../../components/Layout";
import styled from "styled-components";
import { theme } from "../../config/theme";

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

const SynthesisePage = () => (
  <Layout title="Analyse | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Synthesise</h1>
        <p>
          Experience Design Introduction... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </PageIntroduction>
    </PageWrapper>
  </Layout>
);

export default SynthesisePage;
