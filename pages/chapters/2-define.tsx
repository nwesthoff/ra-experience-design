import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import ContentContainer from "../../components/ContentContainer";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import Personas from "../../components/Personas";
import Citation from "../../components/Bibliography/Citation";

const DefinePage = () => (
  <Layout title="Empathise | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Define</h1>
        <p>
          Experience Design Introduction... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <h2>Sense-making</h2>
        <ul>
          <li>Interview downloads</li>
          <li>Affinity map/clustering</li>
          <li>Prioritize work</li>
          <li>Customer journey maps</li>
        </ul>
        <h3>Personas</h3>
        <p>
          Personas come in all kinds of ways, shapes and forms, but generally
          they look like a profile of a user within the user group they
          represent. Persona's combine similar user needs, habits, and attitudes
          and communicate the nuanced commonalities and differences between
          Spotify's users <Citation id="spotify1" />. Here are some examples,
          have a swipe!
        </p>
      </ContentContainer>
    </PageWrapper>

    <Personas />

    <PageWrapper>
      <ContentContainer>
        <p>
          It's important to note that our meaningful, rich social relationships
          are with real humans — not with one-dimensional, hypothetical
          stereotypes <Citation id="dscoutPersona" />. They aren't supposed to
          be a caricature. Personas exist to create empathy, to remind us of who
          we spoke with, and who we're designing for. As our research advances,
          personas move with the project. Personas should influence how we
          recruit people for ongoing research too, by creating participant
          communities for each of the personas.
        </p>
        <h3>Insight</h3>
        <p> Spotify says: </p>
        <blockquote>
          “[F]or us the real magic is in the insight — the interpretation of
          that information”
          <ul>
            <li>
              Adrian Buendia (<Citation id="spotify2">2020</Citation>)
            </li>
          </ul>
        </blockquote>
        <p>
          Insight depth is defined to measure an insights influential extent{" "}
          <a href="https://www.sciencedirect.com/science/article/abs/pii/S0142694X15000526">
            Elsevier
          </a>
          .
        </p>
        <h2>How Might We</h2>
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
    <NextChapter title="Develop" index={3} />
  </Layout>
);

export default DefinePage;
