import React, {
  ReactElement,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ReferenceContext } from "./ReferenceProvider";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { transparentize } from "polished";
import ReactTooltip from "react-tooltip";

const StyledReactTooltip = styled(ReactTooltip)`
  max-width: 500px;
  line-height: 1.6em;
`;

const TooltipWrapper = styled.a`
  color: ${transparentize(0.5, theme.colors.secondary)};
  font-size: 0.7em;
  transition: all 150ms ease-out;

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.secondary};
  }
`;

const CitationStyled = styled.span`
  margin-left: 0.2rem;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  display: inline-block;
  text-decoration: none;
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
  const [isComponentMounted, setIsComponentMounted] = useState(false);

  useEffect(() => setIsComponentMounted(true), []);

  const currentRef = references?.find((ref) => {
    return ref.citationKey === id;
  });

  return currentRef ? (
    <CitationStyled>
      <TooltipWrapper
        data-tip={currentRef.entryTags.inBib}
        href={`/chapters/5-conclusion#ref-${currentRef.citationKey}`}
      >
        {isComponentMounted ? (
          <StyledReactTooltip
            wrapper="span"
            data-multiline="true"
            backgroundColor="#161616"
          />
        ) : null}
        {children ||
          `(${hideAuthor !== true ? currentRef.entryTags.author + ", " : ""}${
            currentRef.entryTags.year
          }${page ? `, pp. ${page}` : ""})`}
      </TooltipWrapper>
    </CitationStyled>
  ) : (
    <span style={{ color: "red" }}>[FIX SOURCE]</span>
  );
}
