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

      <ChapterBlock title="Introduction" index={0}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Discover" index={1} reverse>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Define" index={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Develop" index={3} reverse>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Deliver" index={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
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
