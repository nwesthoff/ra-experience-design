import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import Citation from "../../components/Bibliography/Citation";
import NextChapter from "../../components/Navigation/NextChapter";
import ScrollToReveal from "../../components/ScrollToReveal";
import styled from "styled-components";
import Giphy from "../../components/Giphy";

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
          for its methodical design practice. A common way of breaking down the
          design process for us was Roozenburg & Eekels'{" "}
          <em>Basic Design Cycle</em>{" "}
          <Citation id="basic-design-cycle" page="84–93" hideAuthor />. At Hyper
          Island, I was finally introduced to <em>Design Thinking</em> and the{" "}
          <em>Double Diamond Model</em>. While I had often heard of these terms,
          I had never applied them myself. In many ways, these frameworks
          towards innovation overlap, the differences, however, are telling.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <Giphy
          src="https://giphy.com/embed/dyL2kjw1msOpHjxKh8"
          caption="Faculty of Industrial Design Engineering"
        />

        <h2>Digital Agility</h2>
        <p>
          Digital design has the benefit that it's highly flexible. After a
          product is launched, it's easy to rework or even repurpose (pivot) the
          product. As Basecamp's Jason Fried said:
        </p>
        <blockquote>
          <p>
            “You can only iterate on something after it’s been released. Prior
            to release, you’re just making the thing. [...] So if you want to
            iterate, SHIP.”
          </p>
          <ul>
            <li>
              Jason Fried (
              <a href="https://twitter.com/jasonfried/status/935555293014036480">
                source
              </a>
              )
            </li>
          </ul>
        </blockquote>
        <p>
          Industrial design, originating from Mechanical Engineering, is centred
          on products with a physical component. Experimentation is
          comparatively expensive (consider the price of injection moulds,
          manufacturing plants and distribution), and as a result, physical
          products don't enjoy nearly the same agility as digital ones. The
          flexibility of digital products is a luxury I've come to appreciate a
          lot in my experience with digital products. Knowing this, it's easy to
          see why the Basic Design Cycle{" "}
          <Citation id="basic-design-cycle" page="84–93" /> is much more focused
          on setting and evaluating criteria than the Double Diamond. There's an
          explicit feedback loop that improves the product until the design is
          approved. This was only added later in the Design Council's Double
          Diamond <Citation id="designCouncil" hideAuthor />. The Basic Design
          Cycle fails to represent the diverging and converging nature of the
          design process. Furthermore, it combines the problem statement within
          the analysis phase. It's clear that the design process is ambiguous,
          and neither is correct or wrong.
        </p>
        <h2>Double Diamond Revamped</h2>
        <p>
          My favourite take on the Double Diamond,{" "}
          <em>The Double Diamond Revamped</em> by Hyper Island Alumnus Dan
          Nessler <Citation id="diamondRevamped" hideAuthor /> offers a lot more
          depth than the original by the British Design Council{" "}
          <Citation id="designCouncil" hideAuthor />. It shows how within each
          diverging phase, there can be converging sub-activities and
          vice-versa. On top, it shows the purpose and the expected results of
          each phase too, offering a lot of clarity to people new to design.
        </p>
      </ContentContainer>

      <ContentContainer wide>
        <figure
          style={{
            position: "relative",
            display: "block",
          }}
        >
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
        <h2>Vision within Reason</h2>
        <p>
          Hekkert and van Dijk, explain in their book <em>Vision in Design</em>{" "}
          how a design process is a balancing act between forward-thinking,
          visionary, inspiration and making reasonable decisions.
        </p>
        <blockquote>
          <p>
            “Give room to feelings and intuition as they do at art schools, but
            simultaneously develop a sound argument in order to justify and
            explain each and every decision they make.”
          </p>
          <ul>
            <li>
              Paul Hekkert & Matthijs van Dijk{" "}
              <Citation id="ViP" page="128-129" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <p>
          While ViP is a very different process compared to the Double Diamond
          model, the goal is to a large extent similar. It attempts to project
          us into the future, by breaking down the context we live in (or in
          ViP's case, expect to live in). The goal is to <em>inspire</em> and{" "}
          <em>educate</em> us about the problems worth solving. Identifying how
          these problems influence people's lives comes with an understanding of
          the way people live experiences in general.{" "}
        </p>
        <figure>
          <video src="/video/what-is-experience.mp4" controls />
          <figcaption>
            Figure: What is experience? (
            <a href="https://twitter.com/StrangestMp4/status/1272218918325641216?s=20">
              source
            </a>
            ) <br />
            <small style={{ color: "#aaa" }}>
              (Look, I'm not pretending this is useful information, I'm just
              doing some mood-setting here.)
            </small>
          </figcaption>
        </figure>
        <h2>Experience</h2>
        <p>
          First of all, it's important to be aware that experiences are not
          self-contained, they happen inside a larger context and are greatly
          influenced by the way individuals perceive them. As Peter Benz puts
          it:
        </p>
        <blockquote>
          <p>
            “Experiences emerge in the intertwinement of a variety of objects,
            interactions, spaces and information.”
          </p>
          <ul>
            <li>
              Peter Benz <Citation id="experienceBenz" page="32" hideAuthor />
            </li>
          </ul>
        </blockquote>
        <p>
          Benz describes how lived experiences are a result of a moving
          intersection between <em>sense</em>, <em>consciousness</em>,{" "}
          <em>body</em>, and the <em>world</em>. An approach for experience
          designers, as such, could focus on <em>thinking</em>, <em>sensing</em>{" "}
          and <em>feeling</em>. Though, it's important to remember that these
          elements can't be seen in isolation either, in actual experience they
          are deeply entangled as well. When we do design research we have to
          understand that everyday experience is continuous, seamless, and
          endless, we're only trying to understand a small slice of that.
        </p>
        <p>
          Experiences are influenced by differences far-reaching like our
          marital status, to mundane differences like the operating system our
          phone is using. How we design for these differences is driven by
          design research.
        </p>
      </ContentContainer>
    </PageWrapper>
    <NextChapter title="Discover" index={1} />
  </Layout>
);

export default IntroductionPage;
