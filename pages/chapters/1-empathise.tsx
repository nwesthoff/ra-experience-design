import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import Citation from "../../components/Bibliography/Citation";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import NextChapter from "../../components/Navigation/NextChapter";

const EmpathisePage: NextPage = () => (
  <Layout title="Empathise | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Empathise</h1>
        <p>
          Every good design process begins with research, to <i>learn</i> about
          the context we're designing for. The analysis phase has two main
          functions, to inspire us in preparation of synthesis, <i>and</i>{" "}
          provide constraints during evaluation. There's a whole plethora of{" "}
          <i>tools</i>,<i>methodologies</i> and <i>practises</i> to guide us
          through this process. These tools help us explore and make sense of
          the context which we'll go over in this chapter.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <blockquote>
          “Give room to feelings and intuition as they do at art schools, but
          simultaneously develop a sound argument in order to justify and
          explain each and every decision they make.”
          <span className="quoteBy">
            <Citation id="ViP" />
          </span>
        </blockquote>
      </ContentContainer>

      <ContentContainer>
        <h3>Exploration</h3>
        <p>
          Lipsu Nulla sed vehicula tortor. Quisque eros arcu, sagittis eu augue
          non, malesuada sagittis odio. Duis eleifend vitae lacus in convallis.
          Donec at nulla eu nisi ultricies vulputate non venenatis libero. Etiam
          eget nibh eu urna porta porta. Proin rhoncus augue sed massa accumsan
          pretium. Duis vehicula, nibh sit amet hendrerit ornare, lectus sapien
          malesuada tortor, nec porttitor sapien nibh eu metus. Proin non ornare
          nisi, maximus scelerisque dui. Nam ac aliquet lorem. Donec mattis
          massa quis felis venenatis fermentum. Vivamus ac vehicula mauris.
          Proin consectetur sapien a ligula lacinia, at tempus sem mollis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nunc sit amet blandit purus, rutrum luctus
          erat. Aenean lacinia, tellus a iaculis viverra, urna mauris accumsan
          erat, non dignissim nunc diam et mauris. Cras vitae dui varius,
          maximus massa vitae, tempus nulla.
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
    <NextChapter title="Define" index={2} />
  </Layout>
);

export default EmpathisePage;
