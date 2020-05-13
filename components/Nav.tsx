import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const NavCollapseButton = styled.button`
  color: black;
`;
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <NavCollapseButton
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        menu
      </NavCollapseButton>
      {menuOpen ? (
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/chapters/0-introduction">
            <a>Introduction</a>
          </Link>{" "}
          |{" "}
          <Link href="/chapters/1-analyse">
            <a>Analyse</a>
          </Link>{" "}
          |{" "}
          <Link href="/chapters/2-synthesise">
            <a>Synthesise</a>
          </Link>{" "}
          |{" "}
          <Link href="/chapters/3-simulate">
            <a>Simulate</a>
          </Link>{" "}
          |{" "}
          <Link href="/chapters/4-evaluate">
            <a>Evaluate</a>
          </Link>{" "}
          |{" "}
          <Link href="/chapters/5-repeat">
            <a>Repeat</a>
          </Link>
          |{" "}
          <Link href="/chapters/6-conclusion">
            <a>Conclusion</a>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
