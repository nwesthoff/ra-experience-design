import styled from "styled-components";
import { theme } from "../../config/theme";

const CaseStudyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.backgroundDark};
  margin: 4rem 0 0;

  p {
    column-count: 2;
    column-gap: 4rem;

    @media (max-width: ${theme.breakpoints.tablet}px) {
      column-count: 1;
    }
  }
`;

export default CaseStudyWrapper;
