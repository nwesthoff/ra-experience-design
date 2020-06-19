import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Flickity from "react-flickity-component";

const CarouselFigcaption = styled.figcaption`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 1.2rem;

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 0.4rem;
    font-size: 0.8rem;
  }
`;

const CarouselFigure = styled.figure`
  border-radius: 8px;
  overflow: hidden;
  width: 50%;
  position: relative;
  margin: 0 2rem;
  height: 500px;
  display: block;

  @media (max-width: ${theme.breakpoints.phone}px) {
    width: 80%;
    margin: 0 0.4rem;
    height: 250px;
  }
`;

const ImageCarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  color: white;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: #222;

  a {
    color: white;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 0;
  }
`;

const flickityOptions = {
  wrapAround: true,
  prevNextButtons: false,
};

interface CarouselImage {
  src: string;
  desc?: ReactNode;
  alt?: string;
}

interface Props {
  imageArr: CarouselImage[];
}

const ImageCarousel = ({ imageArr }: Props) => {
  if (imageArr?.length > 0) {
    return (
      <ImageCarouselWrapper>
        <div style={{ width: "100%", margin: "2rem 0" }}>
          <Flickity
            elementType="div"
            options={flickityOptions} // takes flickity options {}
            reloadOnUpdate // default false
            static
          >
            {imageArr.map((image) => {
              return (
                <CarouselFigure key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {image.desc && (
                    <CarouselFigcaption>{image.desc}</CarouselFigcaption>
                  )}
                </CarouselFigure>
              );
            })}
          </Flickity>
        </div>
      </ImageCarouselWrapper>
    );
  } else {
    return null;
  }
};

export default ImageCarousel;
