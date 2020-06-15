import Layout from "../../components/Layout";
import PageIntroduction from "../../components/PageIntroduction";
import { PageWrapper } from "../../components/PageWrapper";
import References from "../../components/Bibliography/References";
import { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";

const EmpathisePage: NextPage = () => (
  <Layout title="Conclusion | RA Experience Design">
    <PageWrapper>
      <PageIntroduction>
        <h1>Conclusion</h1>
        <p>
          To conclude <i>Experience Design</i>... Adipiscing elit. Pellentesque
          eleifend placerat justo, vitae auctor purus eleifend id. Phasellus
          pulvinar, erat quis consequat vestibulum, diam odio pretium felis, id
          sodales odio eros non leo. Duis tempor mollis mauris, at ullamcorper
          lorem volutpat vel.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <p>
          Nullam id mauris maximus mi euismod consectetur et molestie odio.
          Proin ullamcorper, orci a imperdiet sagittis, nibh nisi fringilla
          augue, nec aliquet eros est vel ante. Quisque neque urna, eleifend sed
          lacinia sed, consectetur sit amet libero. Quisque et accumsan dui. Nam
          accumsan, urna sit amet maximus lacinia, nibh neque efficitur urna, ut
          aliquet tellus ligula vitae nulla. Vestibulum tempus laoreet est quis
          maximus. Integer iaculis mollis nisl ac ullamcorper. Sed est dui,
          congue at nisi quis, fringilla varius felis. Donec viverra quam varius
          quam interdum, vel viverra ante egestas. Fusce finibus tortor et metus
          sodales tempor. Sed eget massa aliquet, blandit est vitae, elementum
          neque.
        </p>
      </ContentContainer>
    </PageWrapper>
    <References />
  </Layout>
);

export default EmpathisePage;
