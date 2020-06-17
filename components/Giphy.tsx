import React, { ReactElement } from "react";

interface Props {
  src: string;
  caption?: string;
}

export default function Giphy({ src, caption }: Props): ReactElement {
  return (
    <figure>
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
    </figure>
  );
}
