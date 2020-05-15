import React, { ReactElement } from "react";
// import TinderCard from "react-tinder-card";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import { theme } from "../config/theme";
import Flickity from "react-flickity-component";
import PersonaCard from "./PersonaCard";

const PersonaHeading = styled.div`
  h2,
  p {
    color: white;
    margin: 0;
  }
`;

const PersonaComponentWrapper = styled.div`
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: hidden;
  background: linear-gradient(#000, #121212, #000);
  padding: 4rem 0rem;

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 0;
  }
`;

const flickityOptions = {
  wrapAround: true,
  adaptiveHeight: true,
};

export default function PersonaTinder(): ReactElement {
  return (
    <PersonaComponentWrapper>
      <PersonaHeading>
        <h2>Personas</h2>
      </PersonaHeading>
      <ContentContainer wide>
        <Flickity
          elementType="div"
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={true} // default false
          reloadOnUpdate // default false
        >
          <PersonaCard
            key="1"
            name="Doug Trell"
            bio="Emilios' business has been slowing lately and he could really use a set
          of skills that would help him understand the evolution of his work."
            loveHate={{ love: ["French Fries"], hate: ["Sweets"] }}
            imageUrl="https://source.unsplash.com/500x500/?portrait,man"
          />
          <PersonaCard
            key="2"
            name="Emilie Montagne"
            bio="Emilie's business has been slowing lately and she could really use a set
            of skills that would help her understand the evolution of his work."
            loveHate={{ love: ["French Fries"], hate: ["Sweets"] }}
            imageUrl="https://source.unsplash.com/500x500/?portrait,woman"
          />
          <PersonaCard
            key="3"
            name="Marcos Emilios"
            bio="Marcos' business has been slowing lately and he could really use a set
          of skills that would help him understand the evolution of his work."
            imageUrl="https://source.unsplash.com/500x500/?portrait,boy"
            loveHate={{ love: ["Apples"], hate: ["Soda"] }}
          />
        </Flickity>
      </ContentContainer>
    </PersonaComponentWrapper>
  );
}
