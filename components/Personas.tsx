import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Flickity from "react-flickity-component";
import PersonaCard from "./PersonaCard";

const PersonaComponentWrapper = styled.div`
  overflow: hidden;
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(#222, #000, #222);

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
      <div style={{ width: "100%", margin: "2rem 0" }}>
        <Flickity
          elementType="div"
          options={flickityOptions} // takes flickity options {}
          reloadOnUpdate // default false
          // static
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
            imageUrl="/img/luisa.jpg"
          />
          <PersonaCard
            key="2"
            name="Mary Fashion"
            bio="Mary is 18 years old and lives in Singapore. She’s never thought about the impact of fashion on environmental issues. She’s studying Business Management and posts 5–10 Instagram stories a day."
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
            imageUrl="/img/mary.jpg"
          />
          <PersonaCard
            key="3"
            name="James Dickson"
            bio="James is a 31 year old Mechanical Engineer from Brooklyn. He likes happy hours after work, and usually takes the metro. He also likes to run in the city when he's doing physical activity."
            imageUrl="/img/james.jpg"
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
