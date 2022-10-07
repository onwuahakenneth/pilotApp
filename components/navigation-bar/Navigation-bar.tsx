import React, { useState } from "react";
import styled from "styled-components";
import { NavLinks } from "./Navigation-links";
import { CasabeeLogo } from "../app-logo";
import { GlobalStyles } from "../../constants";
import { NavigationActions, DropdownLinks } from "../navigation-bar";

export const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((currentState) => !currentState);

  return (
    <MainContainer>
      <NavContainer>
        <CasabeeLogo />
        <NavLinks />
        <NavigationActions
          menuToggeleHandler={toggleMenu}
          menuOpen={menuOpen}
        />
      </NavContainer>
      <DropdownLinks menuOpen={menuOpen} />
    </MainContainer>
  );
};

export default NavigationBar;

const NavContainer = styled.nav`
  position: fixed;
  height: 8vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  background-color: ${GlobalStyles.colors.lightGray};
  margin-bottom: 10px;
  z-index: 999;
`;

const MainContainer = styled.div``;
