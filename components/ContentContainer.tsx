import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${(props: { wide?: boolean }) =>
    props.wide ? "1200px" : "900px"};
  padding: 2rem 2rem;
`;

export default ContentContainer;
