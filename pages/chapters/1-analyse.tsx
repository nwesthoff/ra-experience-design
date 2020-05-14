import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import References from "../../components/Bibliography/References";
import Citation from "../../components/Bibliography/Citation";
import myReferences from "../../config/MyReferences";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import styled from "styled-components";

const CaseStudyText = styled.p`
  column-count: 2;
  column-gap: 4rem;
`;

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

      <ContentContainer>
        <p>
          Lipsum <Citation id="ref1" references={myReferences} />. Nulla sed
          vehicula tortor. Quisque eros arcu, sagittis eu augue non, malesuada
          sagittis odio. Duis eleifend vitae lacus in convallis. Donec at nulla
          eu nisi ultricies vulputate non venenatis libero. Etiam eget nibh eu
          urna porta porta. Proin rhoncus augue sed massa accumsan pretium. Duis
          vehicula, nibh sit amet hendrerit ornare, lectus sapien malesuada
          tortor, nec porttitor sapien nibh eu metus. Proin non ornare nisi,
          maximus scelerisque dui. Nam ac aliquet lorem. Donec mattis massa quis
          felis venenatis fermentum. Vivamus ac vehicula mauris. Proin
          consectetur sapien a ligula lacinia, at tempus sem mollis. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nunc sit amet blandit purus, rutrum luctus erat. Aenean
          lacinia, tellus a iaculis viverra, urna mauris accumsan erat, non
          dignissim nunc diam et mauris. Cras vitae dui varius, maximus massa
          vitae, tempus nulla.
        </p>
      </ContentContainer>
    </PageWrapper>

    <CaseStudyWrapper>
      <ContentContainer>
        <h2>Case Study</h2>
        <CaseStudyText>
          Practically applied knowledge...Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </CaseStudyText>
      </ContentContainer>
    </CaseStudyWrapper>
    <References references={myReferences} />
  </Layout>
);

export default AnalysePage;
