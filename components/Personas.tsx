import React from "react";
import styled from "styled-components";
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
  overflow: hidden;
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(#000, #121212, #000);
  padding: 4rem 0rem;

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 0;
  }
`;

const flickityOptions = {
  wrapAround: true,
  prevNextButtons: false,
};

const PersonaCarousel = () => {
  return (
    <PersonaComponentWrapper>
      <PersonaHeading>
        <h2>Personas</h2>
      </PersonaHeading>
      <div style={{ width: "100%", margin: "2rem 0" }}>
        <Flickity
          elementType="div"
          options={flickityOptions} // takes flickity options {}
          reloadOnUpdate // default false
          static
        >
          <PersonaCard
            key="1"
            name="Doug Trell"
            bio="Emilios' business has been slowing lately and he could really use a set
          of skills that would help him understand the evolution of his work."
            loveHate={{ love: ["French Fries"], hate: ["Sweets"] }}
            imageUrl="https://source.unsplash.com/250x250/?portrait,man"
          />
          <PersonaCard
            key="2"
            name="Emilie Montagne"
            bio="Emilie's business has been slowing lately and she could really use a set
            of skills that would help her understand the evolution of his work."
            loveHate={{ love: ["French Fries"], hate: ["Sweets"] }}
            imageUrl="https://source.unsplash.com/250x250/?portrait,woman"
          />
          <PersonaCard
            key="3"
            name="Marcos Emilios"
            bio="Marcos' business has been slowing lately and he could really use a set
          of skills that would help him understand the evolution of his work."
            imageUrl="https://source.unsplash.com/250x250/?portrait,boy"
            loveHate={{ love: ["Apples"], hate: ["Soda"] }}
          />
        </Flickity>
      </div>
    </PersonaComponentWrapper>
  );
};

export default PersonaCarousel;
