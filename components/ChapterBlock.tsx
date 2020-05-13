import styled from "styled-components";
import { theme } from "../config/theme";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { Fragment } from "react";

const Spacer = styled.div`
  width: 5rem;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 2rem;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    display: none;
  }
`;

const ChapterIndex = styled.span`
  position: absolute;
  top: 1rem;
  left: -2rem;
  font-size: 8rem;
  line-height: 1em;
  color: transparent;
  color: ${theme.colors.primary};
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.tablet}px) {
    top: 0.5rem;
    left: -1rem;
    font-size: 4rem;
  }
`;

const ChapterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props: { reverse?: boolean }) =>
    props.reverse === true ? "row-reverse" : "row"};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 8rem 0;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin: 2rem 0;
  }
`;

const ChapterTextContainer = styled.div`
  position: relative;
  color: #0f0f0f;
  flex-basis: 55%;
  flex-grow: 1;

  p {
    min-width: 200px;
    max-width: 540px;
  }
`;

const ChapterImageContainer = styled.div`
  flex-basis: 30%;
  flex-grow: 1;
  min-width: 200px;
  max-width: 350px;
`;

const ChapterTitle = styled.h1`
  z-index: 1;
  position: relative;
  font-size: 4rem;
  line-height: 1em;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #ddd;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 2rem;
  }
`;

const ChapterImage = styled.img`
  width: 100%;
`;

interface Props {
  title: string;
  children?: string;
  index: number;
  reverse?: boolean;
  disableImage?: boolean;
}

const ChapterBlock = (props: Props) => {
  return (
    <ChapterContainer reverse={props.reverse}>
      <ChapterTextContainer>
        <ChapterIndex>
          <Parallax y={[5, -5]} tagOuter="div">
            {props.index}
          </Parallax>
        </ChapterIndex>

        <ChapterTitle>
          <Link href={`/chapters/${props.index}-${props.title.toLowerCase()}`}>
            <a>{props.title}</a>
          </Link>
        </ChapterTitle>

        <p>{props.children}</p>
      </ChapterTextContainer>

      {props.disableImage ? null : (
        <Fragment>
          <Spacer />
          <ChapterImageContainer>
            <div>
              <Parallax y={[20, -20]} tagOuter="div">
                <ChapterImage
                  src={`img/${props.title.toLowerCase()}@2x.png`}
                  srcSet={`img/${props.title.toLowerCase()}.svg`}
                />
              </Parallax>
            </div>
          </ChapterImageContainer>
        </Fragment>
      )}
    </ChapterContainer>
  );
};

export default ChapterBlock;
