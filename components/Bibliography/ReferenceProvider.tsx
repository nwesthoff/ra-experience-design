import React, { ReactElement, ReactNode } from "react";
import { AcademicRef } from "../../config/MyReferences";

export const ReferenceContext = React.createContext<AcademicRef[] | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
  references: AcademicRef[];
}

export default function ReferenceProvider({
  children,
  references,
}: Props): ReactElement {
  return (
    <ReferenceContext.Provider value={references}>
      {children}
    </ReferenceContext.Provider>
  );
}
