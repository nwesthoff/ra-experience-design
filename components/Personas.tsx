import React, { ReactElement } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import { theme } from "../config/theme";

const PersonaImage = styled.img`
  object-fit: cover;
  object-position: center center;
  height: 100%;
  width: 100%;
`;

const PersonaHeading = styled.div`
  h2,
  p {
    color: white;
    margin: 0;
  }
`;

const PersonaContentContainer = styled.div`
  padding: 1.2rem;

  h3 {
    margin: 0;
  }

  h5 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    font-size: 0.9em;
    line-height: 1.2em;
    color: inherit;
    max-width: 300px;
  }
`;

const PersonaImageContainer = styled.div`
  flex-basis: 30%;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-basis: 50%;
    max-height: 300px;
    flex-grow: 1;
  }
`;

const PersonaCard = styled.div`
  cursor: grab;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-flow: wrap;
  direction: row;
  overflow: hidden;
`;

const PersonaComponentWrapper = styled.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  direction: column;
  flex-wrap: wrap;
  overflow-x: hidden;
  background: linear-gradient(#000, #222, #000);
  padding: 4rem 0rem;

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 0;
  }
`;

export default function PersonaTinder(): ReactElement {
  return (
    <PersonaComponentWrapper>
      <PersonaHeading>
        <h2>Personas</h2>
      </PersonaHeading>
      <ContentContainer>
        <TinderCard onSwipe={() => {}} onCardLeftScreen={() => {}}>
          <PersonaCard>
            <PersonaImageContainer>
              <PersonaImage src="https://source.unsplash.com/500x500/?portrait,man" />
            </PersonaImageContainer>
            <PersonaContentContainer>
              <h3>Marcos Emilios</h3>
              <i>Designer</i>
              <h5>Bio</h5>
              <p>
                Marcos' business has been slowing lately and he could really use
                a set of skills that would help him understand the evolution of
                his work.
              </p>
              <h5>Loves</h5>
              <ul>
                <li>French Fries</li>
              </ul>
              <h5>Hates</h5>
              <ul>
                <li>Ketchup</li>
              </ul>
            </PersonaContentContainer>
          </PersonaCard>
        </TinderCard>
      </ContentContainer>
    </PersonaComponentWrapper>
  );
}
