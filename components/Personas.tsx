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
            name="Luisa Neuer"
            bio="Luisa is 23 years old, and has worked for a development aid project in Tanzania. She's a vegetarian and cares a lot about the world. She doesn't buy fast fashion clothes, due to environmental impact and she's always asked about what she's wearing."
            painsGains={{
              gains: [
                "Dedicated to spread word about her views",
                "Ideally her clothes should manifest her beliefs",
              ],
              pains: [
                "Concerned about her image of eco-conscious person",
                "Everything she does is questioned by her followers through the lense of sustainability",
              ],
            }}
            imageUrl="https://source.unsplash.com/250x250/?portrait,girl"
          />
          <PersonaCard
            key="2"
            name="Mary Fashion"
            bio="Mary is 42 years old and lives in New York. She's never thought about the impact of fashion on environmental issues. She has a master in Business Management and works for the government."
            painsGains={{
              gains: [
                "Wants to feel beautiful and trendy",
                "Wants to feel comfortable",
                "Wants to give her family a good life",
              ],
              pains: [
                "Frustrated of ethical issues of people",
                "Needs validation of other people",
                "Stressed from work and family",
              ],
            }}
            imageUrl="https://source.unsplash.com/250x250/?portrait,woman"
          />
          <PersonaCard
            key="3"
            name="James Dickson"
            bio="James is a 35 year old Mechanical Engineer from Brooklyn. He likes happy hours after work, and usually takes the metro. He also likes to run in the city when he's doing physical activity."
            imageUrl="https://source.unsplash.com/250x250/?portrait,man"
            painsGains={{
              gains: ["Feels safe buying online", "Would like to travel more"],
              pains: [
                "Concerned about buying the wrong thing in a digital environment",
                "Frustrted by wasting time when returning products",
                "Concerned about the future of sustainable engineering",
              ],
            }}
          />
        </Flickity>
      </div>
    </PersonaComponentWrapper>
  );
};

export default PersonaCarousel;
