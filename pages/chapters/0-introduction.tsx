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
          My background is in <i>Industrial Design Engineering</i>, which I was
          taught at the Delft University of Technology, a university known for
          its strong, process-backed design. A common way of breaking down the
          design process is Roozenburg & Eekels' <i>Basic Design Cycle</i>{" "}
          <Citation id="basic-design-cycle" />. At Hyper Island, I was finally
          introduced to <i>Design Thinking</i> and the{" "}
          <i>Double Diamond Model</i>. While I had often heard of these terms, I
          had never applied them myself. In many ways these frameworks towards
          innovation overlap, the differences however are telling.
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
            />
          </a>
          <figcaption>
            Figure: Roozenburg & Eekels' Basic Design Cycle
          </figcaption>
        </figure> */}

        <p>
          Another build on the Double Diamond emerged as well. It offers a lot
          more depth, and shows how within a diverging phase, there can be
          converging activities and vice-versa. On top, it gives a bit more
          depth to the purpose and the expected results of each step of the
          process.
        </p>
      </ContentContainer>

      <ContentContainer wide>
        <figure style={{ position: "relative" }}>
          <ScrollToReveal opacity={[0, 1]}>
            <RevealImageOverlay
              src="/img/double-diamond.png"
              style={{ maxWidth: "100%" }}
            />
          </ScrollToReveal>
          <img
            src="/img/double-diamond-cleaned.png"
            style={{ maxWidth: "100%" }}
          />
          <figcaption>
            Figure: Design Council's Double Diamond (
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
          Nunc in sagittis eros. Suspendisse potenti. Pellentesque ipsum augue,
          faucibus venenatis tortor hendrerit, aliquam ultricies odio. Nullam et
          orci fringilla, dictum massa et, hendrerit sapien. Mauris sit amet sem
          bibendum, molestie sapien nec, pharetra arcu. Nullam ut tellus sit
          amet ante varius molestie. Nulla consequat hendrerit sapien, a egestas
          diam suscipit quis. Suspendisse a nunc quis lorem ullamcorper
          sagittis. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
      </ContentContainer>
    </PageWrapper>
    <NextChapter title="Empathise" index={1} />
  </Layout>
);

export default IntroductionPage;
