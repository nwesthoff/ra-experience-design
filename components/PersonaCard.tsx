import React, { Fragment } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";

const PersonaName = styled.div`
  font-size: 2.6rem;
  font-weight: 600;
  color: black;
  margin: 1.2rem 0 0;
`;

const FlickitySlide = styled.div`
  width: 66%;
  margin-right: 1.2rem;

  @media (max-width: ${theme.breakpoints.desktop}px) {
    width: 75%;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    width: 85%;
  }
`;

const StyledPersonaCard = styled.div`
  background: white;
  border-radius: 5px;
  display: flex;
  flex-flow: wrap;
  direction: row;
  overflow: hidden;
`;

const PersonaContentContainer = styled.div`
  padding: 1.2rem;
  -webkit-column-count: 2;
  -webkit-column-gap: 2rem;
  max-width: 500px;

  h5 {
    color: ${theme.colors.primary};
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1.2rem;
  }

  ul {
    margin-top: 0.4rem;
  }

  p,
  li {
    margin-top: 0;
    font-size: 0.9em;
    line-height: 1.2em;
    color: inherit;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    -webkit-column-count: 1;
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

const PersonaImage = styled.img`
  object-fit: cover;
  object-position: center center;
  height: 100%;
  width: 100%;
`;

interface Props {
  name?: string;
  occupation?: string;
  bio?: string;
  imageUrl?: string;
  painsGains?: {
    gains: string[];
    pains: string[];
  };
}

const PersonaCard = ({
  imageUrl,
  name,
  bio,
  occupation,
  painsGains,
}: Props) => {
  return (
    <FlickitySlide>
      <StyledPersonaCard>
        <PersonaImageContainer>
          <PersonaImage src={imageUrl} loading="lazy" />
        </PersonaImageContainer>
        <PersonaContentContainer>
          <PersonaName>{name}</PersonaName>
          <i>{occupation}</i>
          <h5>Bio</h5>
          <p>{bio}</p>
          {painsGains ? (
            <Fragment>
              <h5>Gains</h5>
              <ul>
                {painsGains?.gains.map((love) => (
                  <li key={love}>{love}</li>
                ))}
              </ul>
            </Fragment>
          ) : null}
          {painsGains ? (
            <Fragment>
              <h5>Pains</h5>
              <ul>
                {painsGains?.pains.map((hate) => (
                  <li key={hate}>{hate}</li>
                ))}
              </ul>
            </Fragment>
          ) : null}
        </PersonaContentContainer>
      </StyledPersonaCard>
    </FlickitySlide>
  );
};

export default PersonaCard;
