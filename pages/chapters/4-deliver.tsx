import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import NextChapter from "../../components/Navigation/NextChapter";
import CaseStudyWrapper from "../../components/CaseStudy/CaseStudyWrapper";
import ContentContainer from "../../components/ContentContainer";
import styled from "styled-components";
import Citation from "../../components/Bibliography/Citation";
import OverlayHeatmap from "../../components/OverlayHeatmap";
import { useState } from "react";
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

const DeliverPage = () => {
  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <OverlayHeatmap showOverlay={showHeatmap}>
      <Layout title="Deliver | RA Experience Design">
        <PageWrapper>
          <PageIntroduction>
            <h1>Deliver</h1>
            <p>
              No product is ever designed right the first time around. Arguably,
              products are never really done. The purpose of prototyping is to
              learn, to observe. To fail fast, in order to improve the product
              before it launches to the general public. In essence it's like a
              tiny (sometimes internal) beta test. They are a user-tested
              proof-of concept. David Perell wrote something that really
              resonated with me in the context of prototyping.
            </p>
          </PageIntroduction>
        </PageWrapper>
        <PageWrapper>
          <ContentContainer>
            <blockquote>
              <p>“The Internet rewards people who learn in public”</p>
              <ul>
                <li>
                  David Perell (
                  <a href="https://twitter.com/david_perell/status/1259361298082459648">
                    source
                  </a>
                  )
                </li>
              </ul>
            </blockquote>
            <h2>Prototypes as a boundary object</h2>
            <p>
              Yang <Citation id="prototypeDesignStudies" hideAuthor /> describes
              how prototypes are part of design language, because prototypes
              represent and embody design thought. In a similar groove, Sanders
              &amp; Stappers <Citation id="stappersPrototypes" hideAuthor />{" "}
              describe the roles of prototypes in{" "}
              <em>research through design</em>.
            </p>
            <ul>
              <li>Prototypes allow testing of a hypothesis.</li>
              <li>
                Prototypes bring practice and theory together and force those
                involved to deal with confronting perspectives, theories and
                lenses.
              </li>
              <li>
                Prototypes evoke focused discussion in a team, because the
                phenomenon is ‘on the table’. By demonstrating, we create a
                common understanding of the proposed solution.
              </li>
              <li>
                Prototypes act as a way to connect to our users, they allow us
                to explain a concept effectively, by creating an equal reality
                to learn about.
              </li>
            </ul>
            <h2>Different levels of prototyping:</h2>
            <p>
              {" "}
              When creating prototypes it's important to understand what you're
              trying to learn about. Low fidelity prototypes are easier and
              cheaper, and allow for quicker iteration. High Fidelity prototypes
              are much closer to the final product. The drawback is that they
              are more time-consuming. These are often used when finalising the
              design.
            </p>
            <ThreeColumnDiv>
              <Col>
                <h4>Low fidelity</h4>
                <figure>
                  <a download href="/img/low-fi-prototype.jpg">
                    <img src="/img/low-fi-prototype.jpg" />
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
                  <li>Low cost, rough and quick to build</li>
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
                    <img src="/img/mid-fi-prototype.jpg" />
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
                    Slightly more detailed, still rough but closer to the
                    solution
                  </li>
                  <li>Take longer to develop and costlier</li>
                  <li>Prototyping phase towards refinement</li>
                  <li>Make them resemble final products more closely</li>
                  <li>
                    Give people a better sense of what the solution might look
                    like
                  </li>
                  <li>ex. wireframes</li>
                </ul>
              </Col>
              <Col>
                <h4>High fidelity</h4>
                <figure>
                  <a download href="/img/high-fi-prototype.mp4">
                    <video
                      src="/img/high-fi-prototype.mp4"
                      autoPlay
                      muted
                      loop
                    />
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
                    Much closer to final, very detailed and much more
                    time-consuming
                  </li>
                  <li>
                    Provide an accurate representation of what the solution
                    might look like with fine details
                  </li>
                  <li>They may include much of the expected functionality</li>
                  <li>
                    We may execute these using less-than-optimal mechanisms or
                    technology
                  </li>
                  <li>
                    Closest representation of the idea possible <i>without</i>{" "}
                    the time and cost required of final production
                  </li>
                  <li>Ex. Mock-ups, coded prototypes</li>
                </ul>
              </Col>
            </ThreeColumnDiv>
            <h2>The five planes of experience design</h2>
            <p>
              Jesse James Garret{" "}
              <Citation id="planesOfExperience" hideAuthor page="19–22" />{" "}
              describes the elements of experience design as the five planes;{" "}
              <strong>surface</strong>, <strong>skeleton</strong>,{" "}
              <strong>structure</strong>, <strong>scope</strong> and{" "}
              <strong>strategy</strong>. They provide a framework for talking
              about user experience problems. Building from the bottom, the
              issues we have to solve become less abstract and more concrete.
            </p>
            <figure>
              <img
                src="/img/planes-of-experience.png"
                style={{ maxWidth: "400px" }}
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
            <p>
              Chris Callaghan <Citation id="callaghanPretotyping" hideAuthor />{" "}
              applied this as a framework to well-thought prototyping. It's
              important to know what you're prototyping, to get the results you
              need.{" "}
            </p>
            <figure>
              <table>
                <thead>
                  <tr>
                    <th>Fidelity/functional layer</th>
                    <th>Surface</th>
                    <th>Skeleton</th>
                    <th>Structure</th>
                    <th>Scope</th>
                    <th>Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <em>low-fidelity</em>
                    </td>
                    <td>low</td>
                    <td>low</td>
                    <td>low</td>
                    <td>low</td>
                    <td>high</td>
                  </tr>
                  <tr>
                    <td>
                      <em>medium-fidelity</em>
                    </td>
                    <td>low</td>
                    <td>low</td>
                    <td>low</td>
                    <td>high</td>
                    <td>high</td>
                  </tr>
                  <tr>
                    <td>
                      <em>high-fidelity</em>
                    </td>
                    <td>low</td>
                    <td>low</td>
                    <td>high</td>
                    <td>high</td>
                    <td>high</td>
                  </tr>
                </tbody>
              </table>
            </figure>
            <h2>Evaluate</h2>
            <p>
              It's important to ask both novices and experts. Experts show wider
              range of issues, but find them lesser problems. Novices experience
              issues as more severe, but find fewer{" "}
              <Citation id="sauerSeibel" />.
            </p>
            <blockquote>
              <p>
                “Metrics, and especially averages, encourage you to focus on the
                middle of a market, but innovation happens at the extremes. You
                are more likely to come up with a good idea focusing on one
                outlier than on ten average users.”
              </p>
              <ul>
                <li>Rory Sutherland, Alchemy pp. 100</li>
              </ul>
            </blockquote>
            <h2>Content strategy</h2>
            <p>
              Experience goes far beyond the actual product we're designing.
              Matt <Citation id="mattInterview" /> spoke describes how content
              strategy should be considered part of the experience equally.
              Consider the importance of something like the box a product comes
              in. When buying a product, all-else being equal, customers{" "}
              <em>will</em> opt for the business that sends products in a
              recycled box with a golden bow. Matt tells us how he's
              particularly intrigued by physical touchpoints of{" "}
              <em>digital challengers</em> like Warby Parker and Ace &amp; Tate.
              The way even their stores offer a better experience than their
              'legacy' counterparts by neatly integrating their digital systems
              into the buying experience. These brands offer services like
              order-from-home emails after an eye measurement, which provides an
              overall better experience for the customer.{" "}
            </p>
            <h3>Beyond Experience</h3>
            <p>
              Content strategy focuses on content that creates an experience,
              rather than how to market that experience. However there is a lot
              that we can learn from the marketing industry{" "}
              <Citation id="contentStrategyUX" />. Content strategy is aiding
              the <em>digital sophistication</em> of businesses, to improve the
              customer experience. Beyond that, it is also an opportunity for{" "}
              <em>'always on'</em> data collection. In summary, content strategy
              is about:
            </p>
            <ul>
              <li>Automated content to offer a better experience</li>
              <li>
                Ongoing optimizations and upgrades, through always on data
                collection
              </li>
              <li>
                Aiding <em>digital sophistication</em> of brands
              </li>
            </ul>
          </ContentContainer>
        </PageWrapper>
        <CaseStudyWrapper>
          <ContentContainer wide>
            <h2>In Practice</h2>
            <h3>Prototyping</h3>
            <figure>
              <video
                src="/img/digital-fashion-prototype.mp4"
                autoPlay
                muted
                loop
              />
              <figcaption>
                Figure: Our prototype to test Digital Fashion
              </figcaption>
            </figure>
            <h3>Tools</h3>
            <ul>
              <li>
                <a href="https://figma.com">Figma</a>
              </li>
              <li>
                <a href="https://www.bravostudio.app/">Bravo</a>
              </li>
              <li>
                <a href="https://reactjs.org/">React</a> with{" "}
                <a href="https://nextjs.org/">Next.js</a> for coded prototypes
              </li>
              <li>Python or Arduino for non-web coded prototypes</li>
            </ul>
            <h3>Usability Testing</h3>
            <p>
              Toggle heatmap: {/*FIXME:*/}
              <Button
                onClick={() => {
                  setShowHeatmap(!showHeatmap);
                }}
              >
                {showHeatmap ? "hide" : "show"}
              </Button>
            </p>
            <h3>Usability severity</h3>
            <p>
              <a href="https://medium.com/@CallaghanDesign/higher-or-lower-32be0a299d32">
                Chris Callaghan
              </a>
            </p>
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
        <NextChapter title="Conclusion" index={5} />
      </Layout>
    </OverlayHeatmap>
  );
};

export default DeliverPage;
