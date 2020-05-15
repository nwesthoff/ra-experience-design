import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { theme } from "../../config/theme";

const NavCollapse = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  font-size: 3rem;
  font-weight: 600;
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    line-height: 1.5em;
    padding-left: 0;
  }

  a {
    text-decoration: none;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 2.4rem;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavToggle = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  background: ${theme.colors.primary};
  color: #ffffff;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 50px;
  width: 50px;
`;
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBar>
      <NavToggle
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? "close" : "menu"}
      </NavToggle>
      {menuOpen ? (
        <nav>
          <NavCollapse>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/0-introduction">
                  <a>Introduction</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/1-analyse">
                  <a>Analyse</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/2-synthesise">
                  <a>Synthesise</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/3-simulate">
                  <a>Simulate</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/4-evaluate">
                  <a>Evaluate</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/5-repeat">
                  <a>Repeat</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/6-conclusion">
                  <a>Conclusion</a>
                </Link>
              </li>
            </ul>
          </NavCollapse>
        </nav>
      ) : null}
    </NavBar>
  );
}
