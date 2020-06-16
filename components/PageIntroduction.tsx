import styled from "styled-components";
import { theme } from "../config/theme";

const PageIntroduction = styled.div`
  width: 1200px;
  max-width: 100%;

  h1 {
    font-size: 6rem;
    line-height: 1em;
  }

  p {
    border-left: 1px solid #979797;
    padding-left: 3rem;
    max-width: 630px;
    color: white;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default PageIntroduction;
