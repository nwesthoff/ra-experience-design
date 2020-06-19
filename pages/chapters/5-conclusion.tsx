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
          As designers we have to consciously consider who will be using our
          products. Talking to extreme users has a higher likelihood of success
          than talking to the average. Similarly our idea generation should roam
          free beyond the possible, and scale back when we run into problems
          executing. We have to put our ideas in front of people to obtain
          feedback before we set it free in the world. If we do this well, the
          result is a product experience that people love.
        </p>
      </PageIntroduction>

      <ContentContainer>
        <p>
          Design and experience are everywhere, interwoven in our lives. As
          designers we have an opportunity to make experiences better, or make
          them worse. Experience designers influence the way people think about
          products and to some extent how they experience the world. That is the
          power we have as designers, and it's the power we have to wield
          responsibly.
        </p>
      </ContentContainer>
    </PageWrapper>
    <References />
  </Layout>
);

export default EmpathisePage;
