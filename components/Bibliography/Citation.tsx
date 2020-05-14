import React, { ReactElement } from "react";
import { AcademicRef } from "../../config/MyReferences";

interface Props {
  id: string;
  references: AcademicRef[];
}

export default function Citation(props: Props): ReactElement {
  const currentRef = props.references.find((ref) => {
    return ref.citationKey === props.id;
  });

  return currentRef ? (
    <a href={`/chapters/6-conclusion#ref-${currentRef.citationKey}`}>
      {currentRef.entryTags.inText}
    </a>
  ) : (
    <span style={{ color: "red" }}>[FIX SOURCE]</span>
  );
}
