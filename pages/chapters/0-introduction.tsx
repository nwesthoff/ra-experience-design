import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import Citation from "../../components/Bibliography/Citation";
import NextChapter from "../../components/Navigation/NextChapter";
import ScrollToReveal from "../../components/ScrollToReveal";
import styled from "styled-components";

const RevealImageOverlay = styled.img`
  position: absolute;
  top: 0;
`;

const IntroductionPage: NextPage = () => (
  <Layout title="Introduction | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Introduction</h1>
        <p>
          My background is in <em>Industrial Design Engineering</em>, which I
          was taught at the Delft University of Technology, a university known
          for its strong, process-backed design. A common way of breaking down
          the design process is Roozenburg & Eekels' <em>Basic Design Cycle</em>{" "}
          <Citation id="basic-design-cycle">(1995, pp.84–93)</Citation>. At
          Hyper Island, I was finally introduced to
          <em>Design Thinking</em> and the <em>Double Diamond Model</em>. While
          I had often heard of these terms, I had never applied them myself. In
          many ways these frameworks towards innovation overlap, the differences
          however are telling. . At Hyper Island, I was finally introduced to{" "}
          <i>Design Thinking</i> and the <i>Double Diamond Model</i>. While I
          had often heard of these terms, I had never applied them myself. In
          many ways these frameworks towards innovation overlap, the differences
          however are telling.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <figure>
          <div
            style={{
              width: "100%",
              height: 0,
              paddingBottom: "56%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/dyL2kjw1msOpHjxKh8"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
          </div>

          <figcaption>
            Figure: Faculty of Industrial Design Engineering
          </figcaption>
        </figure>
      </ContentContainer>

      <ContentContainer>
        <p>
          Digital design has the benefit that it's highly flexible. After a
          product is launched, it's easy to rework or even repurpose (pivot) the
          product. Industrial design, originating from Mechanical Engineering,
          is focused on physical products and these don't enjoy the same
          flexibility as digital products. That flexibility is a luxury I've
          come to appreciate a lot in my experience with digital products.
          Knowing this, it's easy to see why the Basic Design Cycle is much more
          focused on setting and evaluating criteria than the Double Diamond.
          There's an explicit feedback loop that improves the product until the
          design is approved. This was only added later in the Design Council's
          Double Diamond. The Basic Design Cycle fails to represent the
          diverging and converging nature of the design process, and jumps to a
          problem statement within the analysis phase. It's clear that the
          design process is ambiguous, and neither is correct or wrong.
        </p>

        {/* <figure>
          <a download href="/img/basic-design-cycle.jpg">
            <img
              src="/img/basic-design-cycle.jpg"
              style={{ maxWidth: "100%" }}
              loading="lazy"
            />
          </a>
          <figcaption>
            Figure: Roozenburg & Eekels' Basic Design Cycle
          </figcaption>
        </figure> */}

        <p>
          My favourite take on the Double Diamond,
          <em>The Double Diamond Revamped</em> by Hyper Island Alumnus Dan
          Nessler (2016) offers a lot more depth than the original by the
          British Design Council (2019). It shows how within each diverging
          phase, there can be converging sub-activities and vice-versa. On top,
          it shows the purpose and the expected results of each phase too,
          offering a lot of clarity to people new to design.
        </p>
      </ContentContainer>

      <ContentContainer wide>
        <figure style={{ position: "relative" }}>
          <ScrollToReveal opacity={[0, 1]}>
            <RevealImageOverlay
              src="/img/double-diamond.png"
              style={{ maxWidth: "100%" }}
              loading="lazy"
            />
          </ScrollToReveal>
          <img
            src="/img/double-diamond-cleaned.png"
            style={{ maxWidth: "100%" }}
            loading="lazy"
          />
          <figcaption>
            Figure: Dan Nessler's Double Diamond Revamped (
            <a
              download
              href="/img/double-diamond-large.png"
              title="Click to download"
            >
              download
            </a>
            )
          </figcaption>
        </figure>
      </ContentContainer>

      <ContentContainer>
        <p>
          Hekkert and van Dijk, explain in their book <em>Vision in Design</em>{" "}
          how the(ir) design process is a balancing act between
          forward-thinking, visionary, inspiration and making reasonable
          decisions.
        </p>
        <blockquote>
          “Give room to feelings and intuition as they do at art schools, but
          simultaneously develop a sound argument in order to justify and
          explain each and every decision they make.”
          <ul>
            <li>
              <Citation id="ViP" />
            </li>
          </ul>
        </blockquote>
        <p>
          To a large extent this is what happens during the discovery phase in
          the double diamond, which we&#39;ll get into in the next chapter.
        </p>
      </ContentContainer>
    </PageWrapper>
    <NextChapter title="Discover" index={1} />
  </Layout>
);

export default IntroductionPage;
