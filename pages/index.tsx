import Layout from "../components/Layout";
import ChapterBlock from "../components/ChapterBlock";
import PageIntroduction from "../components/PageIntroduction";
import { PageWrapper } from "../components/PageWrapper";

const IndexPage = () => (
  <Layout title="Introduction | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>
          Experience <br /> Design
        </h1>
        <p>
          This is an interactive and experiential special on{" "}
          <i>Experience Design</i>. It gives an overview of a design process and
          the tools that could be used during each step of a design process.
          Each step of the process will be backed by a case study, that
          demonstrate the key findings these tools bring. <br />
        </p>
        <p style={{ fontSize: ".8em", border: "none", opacity: 0.8 }}>
          WRITTEN & PRODUCED BY: NILS WESTHOFF <br />
          17 JUNE 2020
        </p>
      </PageIntroduction>

      <ChapterBlock title="Introduction" index={0} />

      <ChapterBlock title="Discover" index={1} reverse>
        Every good design process begins with research, to learn about and
        discover the context designed experiences are happening in. This phase
        of analysis serves two main purposes, to inspire us in preparation of
        idea generation, and provide constraints during evaluation.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>
    </PageWrapper>
  </Layout>
);

export default IndexPage;
