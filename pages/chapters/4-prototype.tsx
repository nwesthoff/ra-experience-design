import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import ContentContainer from "../../components/ContentContainer";

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
          (often internal) beta test.
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
        They act as a way to connect with your client, by demonstrating, you
        have a common understanding of the proposed solution - They act as a way
        to connect to your user, to have an equal reality to learn about
        <h3>Different levels of prototyping</h3>
        <h4>Low fidelity</h4>
        <ul>
          <li>low cost, rough and quick to build</li>
          <li>Easier to execute and less costly</li>
          <li>Early stages of a project</li>
          <li>Test many assumptions quickly</li>
          <li>
            Easy to get feedback on, since people *see* you're in early stages
          </li>
          <li>ex. paper prototypes, paper models, simple or rough sketches</li>
        </ul>
        <h4>Medium fidelity</h4>
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
        <h4>High fidelity</h4>
        <ul>
          <li>
            much closer to final, very detailed and much more time-consuming
          </li>
          <li>
            Provide an accurate representation of what the solution might look
            like with fine details
          </li>
          <li>They may include much of the expected functionality</li>
          <li>
            We may execute these using less-than-optimal mechanisms or
            technology
          </li>
          <li>
            Closest representation of the idea possible <i>without</i> the time
            and cost required of final production
          </li>
          <li>
            Ex. Mock-ups, coded prototypes (
            <a href="https://theblog.adobe.com/prototyping-difference-low-fidelity-high-fidelity-prototypes-use/">
              source
            </a>
            )
          </li>
        </ul>
        <h3>Tools</h3>- [Figma](https://figma.com) -
        [Bravo](https://www.bravostudio.app/) - [React](https://reactjs.org/)
        with [Next.js](https://nextjs.org/) for coded prototypes - Python or
        Arduino for non-web coded prototypes
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
    <NextChapter title="Test" index={5} />
  </Layout>
);

export default PrototypePage;
