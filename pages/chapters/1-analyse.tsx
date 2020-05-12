import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnalysePage = () => (
  <Layout title="Analyse | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Analyse</h1>
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

export default AnalysePage;
