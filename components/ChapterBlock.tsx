import styled from "styled-components";
import { theme } from "../config/theme";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { Fragment } from "react";

const Spacer = styled.div`
  width: 5rem;

  @media (max-width: ${theme.breakpoints.desktop}px) {
    width: 2rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
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
  justify-content: center;
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
  max-width: ${(props: { disableImage?: boolean }) =>
    props.disableImage ? "630px" : "380px"};
  color: #0f0f0f;
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
  min-width: 125px;
  max-width: 250px;
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
      <ChapterTextContainer disableImage={props.disableImage}>
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
          <div>
            <Parallax y={[15, -15]} tagOuter="figure">
              <ChapterImage src={`img/${props.title.toLowerCase()}.png`} />
            </Parallax>
          </div>
        </Fragment>
      )}
    </ChapterContainer>
  );
};

export default ChapterBlock;
