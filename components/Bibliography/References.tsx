import React from "react";
import { AcademicRef } from "../../config/MyReferences";
import styled from "styled-components";
import Linkify from "react-linkify";
import ContentContainer from "../ContentContainer";

const ReferenceWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #111;
  margin: 4rem 0;
`;

const ReferenceList = styled.ul`
  column-count: 2;
  column-gap: 4rem;
`;

const ReferenceListItem = styled.li`
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 0.8rem;
`;

interface Props {
  references: AcademicRef[];
}

export default function References(props: Props) {
  const sortedReferences = props.references.sort((a, b) => {
    return a.entryTags.inBib > b.entryTags.inBib
      ? 1
      : b.entryTags.inBib > a.entryTags.inBib
      ? -1
      : 0;
  });

  return (
    <ReferenceWrapper>
      <ContentContainer wide>
        <h2>References</h2>
        <ReferenceList>
          {sortedReferences.map((ref) => (
            <ReferenceListItem
              id={`ref-${ref.citationKey}`}
              key={ref.citationKey}
            >
              <Linkify
                componentDecorator={(decoratedHref, decoratedText, key) => (
                  <a target="blank" href={decoratedHref} key={key}>
                    {decoratedText}
                  </a>
                )}
              >
                {ref.entryTags.inBib}
              </Linkify>
            </ReferenceListItem>
          ))}
        </ReferenceList>
      </ContentContainer>
    </ReferenceWrapper>
  );
}
