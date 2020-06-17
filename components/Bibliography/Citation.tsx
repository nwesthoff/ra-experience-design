import React, { ReactElement, useContext, ReactNode } from "react";
import { ReferenceContext } from "./ReferenceProvider";
import styled from "styled-components";

const CitationStyled = styled.a`
  color: inherit;
  margin-left: 0.2rem;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  display: inline-block;
`;

interface Props {
  id: string;
  children?: ReactNode;
  page?: string;
  hideAuthor?: boolean;
}

export default function Citation({
  id,
  page,
  children,
  hideAuthor,
}: Props): ReactElement {
  const references = useContext(ReferenceContext);

  const currentRef = references?.find((ref) => {
    return ref.citationKey === id;
  });

  return currentRef ? (
    <CitationStyled
      href={`/chapters/5-conclusion#ref-${currentRef.citationKey}`}
    >
      {children ||
        `(${hideAuthor !== true ? currentRef.entryTags.author + ", " : ""}${
          currentRef.entryTags.year
        }${page ? `, pp. ${page}` : ""})`}
    </CitationStyled>
  ) : (
    <span style={{ color: "red" }}>[FIX SOURCE]</span>
  );
}
