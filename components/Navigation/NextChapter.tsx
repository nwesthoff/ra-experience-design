import React, { ReactElement } from "react";
import ContentContainer from "../ContentContainer";
import { PageWrapper } from "../PageWrapper";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { darken } from "polished";
import { MdArrowForward } from "react-icons/md";

const NextLinkTitle = styled.div`
  display: flex;
  align-items: center;

  color: white;
  margin: 0 0 1.2rem;
  font-size: 3rem;
  font-weight: 600;
`;

const NextLinkArrow = styled(MdArrowForward)`
  margin-left: 0.4rem;
  opacity: 0.6;
`;

const NextLinkWrapper = styled.div`
  background-color: ${theme.colors.primary};

  h4 {
    margin-bottom: 0;
    font-weight: lighter;
    text-transform: uppercase;
    color: white;
    opacity: 0.75;
  }

  svg {
    transition: all 120ms ease-out;
  }

  &:hover {
    background-color: ${darken(0.05, theme.colors.primary)};

    svg {
      transform: translate3d(20%, 0, 0);
      opacity: 1;
    }
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
            <NextLinkTitle>
              {title}
              <NextLinkArrow fontSize="inherit" />
            </NextLinkTitle>
          </ContentContainer>
        </PageWrapper>
      </NextLinkWrapper>
    </a>
  );
}
