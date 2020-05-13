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
          Experience Design Introduction... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque eleifend placerat justo,
          vitae auctor purus eleifend id. Phasellus pulvinar, erat quis
          consequat vestibulum, diam odio pretium felis, id sodales odio eros
          non leo. Duis tempor mollis mauris, at ullamcorper lorem volutpat vel.
        </p>
      </PageIntroduction>

      <ChapterBlock title="Introduction" index={0} disableImage>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Analyse" index={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Synthesise" index={2} reverse>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Simulate" index={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Evaluate" index={4} reverse>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Repeat" index={5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
        pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
        sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
        lorem volutpat vel.
      </ChapterBlock>

      <ChapterBlock title="Conclusion" index={6} disableImage>
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
