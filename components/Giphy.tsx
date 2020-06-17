import React, { ReactElement } from "react";
import styled from "styled-components";

const GiphyStyled = styled.figure`
  width: 100%;
  pointer-events: none;
  margin-bottom: 3.2rem;
`;

interface Props {
  src: string;
  caption?: string;
}

export default function Giphy({ src, caption }: Props): ReactElement {
  return (
    <GiphyStyled>
      <div
        style={{
          width: "100%",
          height: 0,
          paddingBottom: "56%",
          position: "relative",
        }}
      >
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </div>

      <figcaption>Figure: {caption}</figcaption>
    </GiphyStyled>
  );
}
