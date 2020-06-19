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
              & Stappers <Citation id="stappersPrototypes" hideAuthor />{" "}
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
                  <a download href="/video/high-fi-prototype.mp4">
                    <video
                      src="/video/high-fi-prototype.mp4"
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
              applied this to create a framework for effective prototyping. It's
              relevant to know what we're trying to learn about with our
              prototype, to get the results we need. His framework describes how
              the fidelity of prototyping can be tuned on each of the five
              planes. The result is a matrix that describes how big the impact
              of these types of fidelity have on each of the functional layers.
            </p>
            <figure>
              <table>
                <thead>
                  <tr>
                    <th>Type of fidelity/functional layer</th>
                    <th>Strategy</th>
                    <th>Scope</th>
                    <th>Structure</th>
                    <th>Skeleton</th>
                    <th>Surface</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <em>Visual fidelity</em>
                    </td>
                    <td>low</td>
                    <td>low</td>
                    <td>low</td>
                    <td>low</td>
                    <td>high</td>
                  </tr>
                  <tr>
                    <td>
                      <em>Functional fidelity</em>
                    </td>
                    <td>low</td>
                    <td>low</td>
                    <td>low</td>
                    <td>high</td>
                    <td>high</td>
                  </tr>
                  <tr>
                    <td>
                      <em>Content fidelity</em>
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
              When evaluating prototypes, it's important to ask both novices and
              experts. While experts show a wider range of issues, the problems
              are generally perceived as less severe. they generally know how to
              work around issues. Novices experience issues as more severe, but
              find fewer in total
              <Citation id="sauerSeibel" />.
            </p>
            <h3>Usability severity</h3>
            <p>
              Knowing which problems to focus on can be a big problem. There's
              been some research to categorise the severity of the issues users
              describe. Jakob Nielsen provides a set of metrics to define
              usability severity
              <Citation id="nielsenUsability" hideAuthor />.
            </p>
            <ol start={0}>
              <li>No usability problem</li>
              <li>Cosmetic problem</li>
              <li>Minor usability problem</li>
              <li>Major usability problem</li>
              <li>Usability catastrophe</li>
            </ol>
            <p>
              To gain quantitative data on release products, Matt
              <Citation id="mattInterview" /> likes using tools like
              <a href="https://hotjar.com">Hotjar</a>. They create heatmaps and
              record users' actions that help identify usability issues.
            </p>
            <p>
              Click the button to toggle on a heatmap of your activity on this
              page:
              <Button
                onClick={() => {
                  setShowHeatmap(!showHeatmap);
                }}
              >
                {showHeatmap ? "hide" : "show"}
              </Button>
            </p>
            <p>
              <small>
                Note: This data is entirely local and never leaves your computer
                (I won't be able to see it)
              </small>
            </p>

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
              <em>digital challengers</em> like Warby Parker and Ace & Tate. The
              way even their stores offer a better experience than their
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
          <ContentContainer>
            <h2>In Practice</h2>
            <p>
              As a result of our insight, a little feedback by PVH and going
              through ideation, we developed our first idea and prototype. These
              prototypes iteratively improved on the idea of digital fashion.
              Contradictory to what we had learned about effective prototyping
              from Chris <Citation id="callaghanPretotyping" />, I wanted to try
              creating high (visual) fidelity prototypes. Each of them were made
              with <a href="https://figma.com">Figma</a> and{" "}
              <a href="https://framer.com">Framer Web</a>.{" "}
            </p>
            <p>
              <small>
                Note: This report and our{" "}
                <a href="https://pvh-digital-package.nilswesthoff.com">
                  digital and online handover package
                </a>{" "}
                was built in <a href="https://reactjs.org/">React</a> with{" "}
                <a href="https://nextjs.org/">Next.js</a>, which I've used for
                coded prototypes before as well.
              </small>
            </p>
            <h3>1. Wearby — Digital Subscription Wardrobe</h3>
            <p>
              A digital wardrobe with digital trendy clothes and a subscription
              to use exclusive pieces.
            </p>
            <figure>
              <video
                src="/video/proto1-mockup.mp4"
                autoPlay
                muted
                loop
                controls
              />
              <figcaption>
                Video: Our prototype to test Digital Fashion
              </figcaption>
            </figure>
            <p>
              The endless possibilities of digital fashion were recognized by by
              our research participants on{" "}
              <a href="https://hellopingpong.com">Ping Pong</a>. Though they
              wouldn't immediately see themselves spend a monthly subscription
              to use the service.
            </p>
            <h3>2. Digital Fashion Hunt</h3>
            <p>
              Our next prototype was about creating <em>an experience</em>{" "}
              around digital fashion. An AR treasure hunt to find digital
              clothes around the world. They can be found at specific places
              around the world and can be traded globally. Connecting people,
              brands and places together.
            </p>
            <figure>
              <video
                src="/video/proto2-mockup.mp4"
                autoPlay
                muted
                loop
                controls
              />
              <figcaption>
                Video: Our figcaptionrototype to test a digital fashion hunt
              </figcaption>
            </figure>
            <p>
              Upon testing this prototype, we realised people see fashion as
              content. Many want to share a story when they share photos of
              their clothes.
            </p>
            <h3>3. Manifest — Digital Fashion for Social Good</h3>
            <p>
              Our third and final prototype and the solution we presented to PVH
              is our concept Manifest. Manifest is a digital fashion platform
              for real-life social impact. Connecting causes and an endless
              wardrobe, so what you wear becomes a statement.
            </p>
            <figure>
              <video
                src="/video/proto3-mockup.mp4"
                autoPlay
                muted
                loop
                controls
              />
              <figcaption>
                Video: Our final prototype, a platform that drives social impact
                through digital fashion
              </figcaption>
            </figure>
            <p>
              We would like to see a variety of products on Manifest, with a
              variety of use cases, created by different entities:
            </p>
            <ul>
              <li>
                We imagine big brands could sample their ideas digitally, to
                test user adoption before they start fabrication.
              </li>
              <li>
                We envision independent digital fashion artists like{" "}
                <a href="https://replicant.fashion/passgoaltriple/">
                  PassGoalTriple
                </a>{" "}
                reaching a larger audience with their experimental creations.
              </li>
              <li>
                We imagine that established brands would like to put out certain
                products for free, connected to an AR experience that drive
                social impact through their name.
              </li>
              <li>
                We want people not only to donate to causes they care about, but
                be proud to show their support, by giving them a digital
                artefact to represent that.{" "}
              </li>
            </ul>
            <p>
              We’re also promoting the idea of swapping digital clothes with the
              community, which we hope will entice people to do so in real life
              too.
            </p>
            <h2>Critical Review</h2>
            <p>
              I described a few prerequisites for Manifest to technically
              succeed in the{" "}
              <a href="https://pvh-digital-package.nilswesthoff.com">
                handover package
              </a>{" "}
              we sent to PVH. First off, it's good to know that commercial 3D
              rendering engines (Unreal & Unity) support AR and even dedicated
              AR tools like Instagram's{" "}
              <a href="https://sparkar.facebook.com/ar-studio/">SparkAR</a>{" "}
              exist. These tools lower the barrier to market, and make
              developing basic filters trivial.
            </p>
            <p>
              Digital clothes however brings a few new issues, currently
              requiring manual labour. These issues are caused by three factors:
            </p>
            <ol>
              <li>Variety of body types and sizes</li>
              <li>
                Correctly blending filters with the subject and background
              </li>
              <li>Flexible textures responding to body movement</li>
            </ol>
            <p>
              In short, these issues can be solved by developing{" "}
              <em>parametric fashion design</em>, applying{" "}
              <em>subject separation AI</em> and developing{" "}
              <em>real-time cloth simulation tools</em>. These issues aren't
              easy to solve, but our recommendations provide PVH with a basic
              roadmap towards our digital fashion future.
            </p>
          </ContentContainer>
        </CaseStudyWrapper>
        <NextChapter title="Conclusion" index={5} />
      </Layout>
    </OverlayHeatmap>
  );
};

export default DeliverPage;
