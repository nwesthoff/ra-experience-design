import React, { useContext } from "react";
import styled from "styled-components";
import ContentContainer from "../ContentContainer";
import { ReferenceContext } from "./ReferenceProvider";
import ReactLinkify from "react-linkify";
import { theme } from "../../config/theme";

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
  padding-left: 1rem;

  @media (max-width: ${theme.breakpoints.desktop}px) {
    column-gap: 3rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    column-count: 1;
  }
`;

const ReferenceListItem = styled.li`
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 0.8rem;
`;

const ReferenceLink = styled.a`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  max-width: 280px;
  vertical-align: baseline;
  top: 3px;
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 200px;
  }
`;

export default function References() {
  const references = useContext(ReferenceContext);

  const sortedReferences = references?.sort((a, b) => {
    return a.entryTags.inBib > b.entryTags.inBib
      ? 1
      : b.entryTags.inBib > a.entryTags.inBib
      ? -1
      : 0;
  });

  const academicReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "ACADEMIC"
  );
  const tradeReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "TRADEMAG"
  );
  const popularReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "POPULAR"
  );

  return (
    <ReferenceWrapper>
      <ContentContainer wide>
        <h2>References</h2>
        {academicReferences && academicReferences?.length > 0 ? (
          <div>
            <h4>Academic</h4>
            <ReferenceList>
              {academicReferences.map((ref) => (
                <ReferenceListItem
                  id={`ref-${ref.citationKey}`}
                  key={ref.citationKey}
                >
                  <ReactLinkify
                    componentDecorator={(decoratedHref, decoratedText, key) => (
                      <ReferenceLink
                        target="blank"
                        href={decoratedHref}
                        key={key}
                      >
                        {decoratedText}
                      </ReferenceLink>
                    )}
                  >
                    {ref.entryTags.inBib}
                  </ReactLinkify>
                </ReferenceListItem>
              ))}
            </ReferenceList>
          </div>
        ) : null}

        {tradeReferences && tradeReferences?.length > 0 ? (
          <div>
            <h4>Trade magazines</h4>
            <ReferenceList>
              {tradeReferences.map((ref) => (
                <ReferenceListItem
                  id={`ref-${ref.citationKey}`}
                  key={ref.citationKey}
                >
                  <ReactLinkify
                    componentDecorator={(decoratedHref, decoratedText, key) => (
                      <ReferenceLink
                        target="blank"
                        href={decoratedHref}
                        key={key}
                      >
                        {decoratedText}
                      </ReferenceLink>
                    )}
                  >
                    {ref.entryTags.inBib}
                  </ReactLinkify>
                </ReferenceListItem>
              ))}
            </ReferenceList>
          </div>
        ) : null}

        {popularReferences && popularReferences?.length > 0 ? (
          <div>
            <h4>Popular</h4>
            <ReferenceList>
              {popularReferences.map((ref) => (
                <ReferenceListItem
                  id={`ref-${ref.citationKey}`}
                  key={ref.citationKey}
                >
                  <ReactLinkify
                    componentDecorator={(decoratedHref, decoratedText, key) => (
                      <ReferenceLink
                        target="blank"
                        href={decoratedHref}
                        key={key}
                      >
                        {decoratedText}
                      </ReferenceLink>
                    )}
                  >
                    {ref.entryTags.inBib}
                  </ReactLinkify>
                </ReferenceListItem>
              ))}
            </ReferenceList>
          </div>
        ) : null}
      </ContentContainer>
    </ReferenceWrapper>
  );
}
