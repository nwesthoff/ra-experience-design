import Layout from "../components/Layout";
import ChapterBlock from "../components/ChapterBlock";
import PageIntroduction from "../components/PageIntroduction";
import { PageWrapper } from "../components/PageWrapper";
import { theme } from "../config/theme";
import styled from "styled-components";
const NameLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage = () => (
  <Layout title="Introduction | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>
          Experience <br /> Design
        </h1>
        <p>
          This is an interactive and experiential research activity about{" "}
          <em>Experience Design</em>. It gives an overview of a design process
          and the tools that could be used during each step of a design process.
          Each step of the process will be backed by a practical approach, which
          demonstrates the key findings these tools might bring.
        </p>
        <p style={{ fontSize: ".8em", border: "none" }}>
          BY{" "}
          <NameLink href="https://nilswesthoff.com" target="blank">
            NILS WESTHOFF
          </NameLink>{" "}
          <br />
          <span style={{ opacity: 0.5 }}>JUNE 2020 | WORD COUNT: 4947</span>
        </p>
      </PageIntroduction>

      <ChapterBlock title="Introduction" index={0}>
        Experiences are not self-contained, they happen inside a larger context
        and are greatly influenced by the way individuals perceive them. They
        are influenced by personal differences as far-reaching as our marital
        status, to mundane differences like the operating system our phone runs.
        How we design for these differences is driven by people.
      </ChapterBlock>

      <ChapterBlock title="Discover" index={1} reverse>
        Every good design process begins with research. To learn about and
        discover the context designed experiences are happening in. This phase
        of analysis serves two main purposes: to inspire us in preparation of
        idea generation and provide constraints during evaluation.
      </ChapterBlock>

      <ChapterBlock title="Define" index={2}>
        Designers often describe their work as organizing complexity, to find
        clarity in chaos. During synthesis, we often manipulate data, words and
        pictures, to create cohesion and a sense of continuity in our work.
      </ChapterBlock>

      <ChapterBlock title="Develop" index={3} reverse>
        After successfully defining what the right problem is to solve, it is
        time to embark on an ideation journey. Ideation is the process of{" "}
        generating a broad set of ideas to solve a previously defined problem,
        with no attempt to judge or evaluate them mid-session.
      </ChapterBlock>

      <ChapterBlock title="Deliver" index={4}>
        No product is ever designed right the first time around. Arguably,
        products are never really done. The purpose of prototyping is to learn,
        to observe. To fail fast, in order to improve the product before it
        launches to the general public.
      </ChapterBlock>

      <ChapterBlock title="Conclusion" index={5} reverse>
        Design and experience are everywhere, interwoven in our lives. As
        designers we have an opportunity to make experiences better, or make
        them worse. Experience designers influence the way people think about
        products and to some extent how they experience the world. That is the
        power we have as designers, and it's the power we have to wield
        responsibly.
      </ChapterBlock>
    </PageWrapper>
  </Layout>
);

export default IndexPage;
