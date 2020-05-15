import React, { ReactElement } from "react";
import ContentContainer from "../ContentContainer";
import { PageWrapper } from "../PageWrapper";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { darken } from "polished";

const NextLinkWrapper = styled.div`
  background-color: ${theme.colors.primary};

  h3 {
    color: white;
    margin: 0 0 1.2rem;
    font-size: 3rem;
  }

  h4 {
    margin-bottom: 0;
    font-weight: lighter;
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${darken(0.05, theme.colors.primary)};
  }
`;

interface Props {
  title: string;
  customHref?: string;
  index: number;
}

export default function NextChapter({
  title,
  index,
  customHref,
}: Props): ReactElement {
  return (
    <a
      href={customHref || `/chapters/${index}-${title.toLowerCase()}`}
      style={{ textDecoration: "none" }}
    >
      <NextLinkWrapper>
        <PageWrapper>
          <ContentContainer wide>
            <h4>To chapter {index}</h4>
            <h3>{title}</h3>
          </ContentContainer>
        </PageWrapper>
      </NextLinkWrapper>
    </a>
  );
}
