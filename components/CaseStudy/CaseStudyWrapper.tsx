import styled from "styled-components";
import { theme } from "../../config/theme";

const CaseStudyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.backgroundDark};
  margin: 4rem 0 0;
  padding-bottom: 2rem;

  h2 {
    margin-top: 2rem;
  }
`;

export default CaseStudyWrapper;
