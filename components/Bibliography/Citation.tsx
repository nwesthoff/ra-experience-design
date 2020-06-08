import React, { ReactElement, useContext, ReactNode } from "react";
import { ReferenceContext } from "./ReferenceProvider";

interface Props {
  id: string;
  children?: ReactNode;
}

export default function Citation(props: Props): ReactElement {
  const references = useContext(ReferenceContext);

  const currentRef = references?.find((ref) => {
    return ref.citationKey === props.id;
  });

  return currentRef ? (
    <a
      href={`/chapters/6-conclusion#ref-${currentRef.citationKey}`}
      style={{ color: "inherit", marginLeft: ".2rem" }}
    >
      {props.children || currentRef.entryTags.inText}
    </a>
  ) : (
    <span style={{ color: "red" }}>[FIX SOURCE]</span>
  );
}
