import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import ContentContainer from "../../components/ContentContainer";
import styled from "styled-components";
import Citation from "../../components/Bibliography/Citation";

const ThreeColumnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap row;
  margin: -1.2rem 0 0 -1.2rem;
`;

const Col = styled.div`
  margin: 1.2rem 0 0 1.2rem;
  flex-basis: 30%;
  gap: 1.2rem;
  flex-grow: 1;
  min-width: 250px;

  figcaption {
    text-align: left;
  }

  img,
  video {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const PrototypePage = () => (
  <Layout title="Prototype | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Prototype</h1>
        <p>
          No product is ever designed right the first time around, arguably,
          products are never really done. The purpose of prototyping is to
          learn, to observe. To fail fast, in order to improve the product
          before it launches to the general public. In essence it's like a tiny
          (sometimes internal) beta test. They are usually user-tested at later
          stages of the design process too. David Perell wrote something that
          really resonated with me in the context of prototyping.
        </p>
      </PageIntroduction>
    </PageWrapper>
    <PageWrapper>
      <ContentContainer>
        <blockquote>
          “The Internet rewards people who learn in public”
          <span className="quoteBy">Dave Perell</span>
        </blockquote>
      </ContentContainer>
    </PageWrapper>
    <PageWrapper>
      <ContentContainer>
        <h3>Prototypes as a boundary object</h3>
        Yang <Citation id="prototypeDesignStudies">(2005)</Citation> describes
        how prototypes are part of design language, because prototypes represent
        and embody design thought. They allow us to explain a concept to a test
        user, by creating an equal reality to learn about.
        <ul>
          <li>
            They act as a way to connect with your client, by demonstrating, you
            have a common understanding of the proposed solution
          </li>
          <li>
            They act as a way to connect to your user, to have an equal reality
            to learn about
          </li>
        </ul>
        <h3>Levels of Fidelity</h3>
        When creating prototypes it's important to understand what you're trying
        to learn about. Low fidelity prototypes are easier and cheaper, and
        allow for quicker iteration. High Fidelity prototypes are much closer to
        the final product. The drawback is that they are more time-consuming.
        These are often used when finalising the design
        <Citation id="prototypeAdobe" />.
        <ThreeColumnDiv>
          <Col>
            <h4>Low fidelity</h4>
            <figure>
              <a download href="/img/low-fi-prototype.jpg">
                <img src="/img/low-fi-prototype.jpg" loading="lazy" />
              </a>
              <figcaption>
                Figure: Example of a Low Fidelity Prototype (
                <a href="https://www.thinklions.com/blog/how-to-create-a-low-fidelity-prototype-like-an-app-expert/">
                  source
                </a>
                )
              </figcaption>
            </figure>
            <ul>
              <li>low cost, rough and quick to build</li>
              <li>Easier to execute and less costly</li>
              <li>Early stages of a project</li>
              <li>Test many assumptions quickly</li>
              <li>
                Easy to get feedback on, since people *see* you're in early
                stages
              </li>
              <li>
                ex. paper prototypes, paper models, simple or rough sketches
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Medium fidelity</h4>
            <figure>
              <a download href="/img/mid-fi-prototype.jpg">
                <img src="/img/mid-fi-prototype.jpg" loading="lazy" />
              </a>
              <figcaption>
                Figure: Example of a Medium Fidelity Prototype (
                <a href="https://pixelfridge.digital/2020/03/05/how-detailed-should-wireframes-be-a-guide-to-wireframe-fidelity/">
                  source
                </a>
                )
              </figcaption>
            </figure>
            <ul>
              <li>
                slightly more detailed, still rough but closer to the solution
              </li>
              <li>Take longer to develop and costlier</li>
              <li>Prototyping phase towards refinement</li>
              <li>Make them resemble final products more closely</li>
              <li>
                Give people a better sense of what the solution might look like
              </li>
              <li>ex. wireframes</li>
            </ul>
          </Col>
          <Col>
            <h4>High fidelity</h4>
            <figure>
              <a download href="/img/high-fi-prototype.mp4">
                <video src="/img/high-fi-prototype.mp4" autoPlay muted loop />
              </a>
              <figcaption>
                Figure: Example of a High Fidelity Prototype (
                <a href="https://dribbble.com/shots/11919522-Ecotourism-Website-Home-Page">
                  source
                </a>
                )
              </figcaption>
            </figure>
            <ul>
              <li>
                much closer to final, very detailed and much more time-consuming
              </li>
              <li>
                Provide an accurate representation of what the solution might
                look like with fine details
              </li>
              <li>They may include much of the expected functionality</li>
              <li>
                We may execute these using less-than-optimal mechanisms or
                technology
              </li>
              <li>
                Closest representation of the idea possible <i>without</i> the
                time and cost required of final production
              </li>
              <li>Ex. Mock-ups, coded prototypes</li>
            </ul>
          </Col>
        </ThreeColumnDiv>
        <h3>Five planes of experience design</h3>
        Jesse James Garret{" "}
        <Citation id="planesOfExperience">(2011, pp. 19-22)</Citation> describes
        the elements of experience design as the five planes; <i>surface</i>,{" "}
        <i>skeleton</i>, <i>structure</i>, <i>scope</i> and <i>strategy</i>.
        They provide a framework for talking about user experience problems.
        Building from the bottom, the issues we have to solve become less
        abstract and more concrete.
        <figure
          style={{
            marginTop: "1.2rem",
            display: "flex",
            alignItems: "center",
            flexFlow: "column",
          }}
        >
          <img
            src="/img/planes-of-experience.png"
            style={{ maxWidth: "400px" }}
            loading="lazy"
          />
          <figcaption>Figure: Five planes of experience design</figcaption>
        </figure>
        <ul>
          <li>
            <b>Surface</b>: Visual design
          </li>
          <li>
            <b>Skeleton</b>: Interface, navigation and information design
          </li>
          <li>
            <b>Structure</b>: information architecture & UX Design
          </li>
          <li>
            <b>Scope</b>: Content & feature requirements
          </li>
          <li>
            <b>Strategy</b>: Business Objectives and user needs
          </li>
        </ul>
        Chris Callaghan (2020) taught me how this is also an incredibly useful
        way to think about prototypes. It's important to know what you're
        prototyping, to get the results you need.
        <h3>Tools</h3>
        <ul>
          <li>
            <a href="https://figma.com" target="blank">
              Figma
            </a>
          </li>
          <li>
            <a href="https://framer.com" target="blank">
              Framer Web
            </a>
          </li>
          <li>
            <a href="https://www.bravostudio.app/" target="blank">
              Bravo Studio
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" target="blank">
              React
            </a>{" "}
            with{" "}
            <a href="https://nextjs.org/" target="blank">
              Next.js
            </a>{" "}
            for coded web prototypes
          </li>
          <li>Python or Arduino for non-web coded prototypes</li>
        </ul>
      </ContentContainer>
    </PageWrapper>
    <CaseStudyWrapper>
      <ContentContainer wide>
        <h2>Case Study</h2>
        <figure>
          <video src="/img/digital-fashion-prototype.mp4" autoPlay muted loop />
          <figcaption>Figure: Our prototype to test Digital Fashion</figcaption>
        </figure>
        <p>
          Practically applied knowledge...Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </ContentContainer>
    </CaseStudyWrapper>
    <NextChapter title="Test" index={5} />
  </Layout>
);

export default PrototypePage;
