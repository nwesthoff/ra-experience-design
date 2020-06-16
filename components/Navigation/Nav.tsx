import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { MdHome, MdMenu } from "react-icons/md";
import { darken } from "polished";

const HomeButton = styled.a`
  cursor: pointer;
  margin: 0;
  text-decoration: none;
  color: ${theme.colors.primary};
  text-align: center;
  line-height: 1;
  padding: 0.8rem;
  background: white;

  &:hover {
    background: #ddd;
  }
`;

const SmallNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: stretch;
`;

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
  margin-bottom: 4rem;
`;

const NavToggle = styled.button`
  border: none;
  margin: 0;
  text-decoration: none;
  background: ${theme.colors.primary};
  color: #ffffff;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0.8rem;

  &:hover {
    background: ${darken(0.05, theme.colors.primary)};
  }
`;
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBar>
      <SmallNav>
        <Link href="/">
          <HomeButton>
            <MdHome size={32} />
          </HomeButton>
        </Link>
        <NavToggle
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MdMenu size={32} />
        </NavToggle>
      </SmallNav>
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
                <Link href="/chapters/1-discover">
                  <a>Discover</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/2-define">
                  <a>Define</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/3-develop">
                  <a>Develop</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/4-deliver">
                  <a>Deliver</a>
                </Link>
              </li>
              <li>
                <Link href="/chapters/5-conclusion">
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
