import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Span,
  Anchor,
} from "./style.js";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>
            <Span> Colors </Span>Lip
          </LogoText>
        </Logo>
        {/* ------------------------------- */}
        <UlList>
          <ListItem>
            {/* Zai Li f css*/}
            <Link className="anchor" to="/">
              {/* Link = a */}
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Anchor href="#"> About </Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#"> Services </Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#"> Contact </Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#"> Account </Anchor>
          </ListItem>
          <ListItem>
            <Link className="anchor" to="/contact">
              Contact
            </Link>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
