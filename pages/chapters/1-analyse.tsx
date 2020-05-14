import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import References from "../../components/Bibliography/References";
import Citation from "../../components/Bibliography/Citation";
import myReferences from "../../config/MyReferences";
import { NextPage } from "next";

const AnalysePage: NextPage = () => (
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

      <p>
        Lipsum <Citation id="ref1" references={myReferences} />.
      </p>
    </PageWrapper>

    <References references={myReferences} />
  </Layout>
);

export default AnalysePage;
