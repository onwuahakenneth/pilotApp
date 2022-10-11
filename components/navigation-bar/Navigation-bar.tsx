import React, { useState, useContext } from "react";
import styled from "styled-components";
import { NavLinks } from "./Navigation-links";
import { CasabeeLogo } from "../app-logo";
import { GlobalStyles } from "../../constants";
import { NavigationActions, DropdownLinks } from "../navigation-bar";
import {Modal} from '../../ui/modal';
import MenuContext from '../../context/MenuContext';

export const NavigationBar = () => {
  const {open, closeMenu} = useContext(MenuContext);


  return (
    <MainContainer>
      {
        open && <Modal onClick={closeMenu}/>
      }
      
      <NavContainer>
        <CasabeeLogo />
        <NavLinks />
        <NavigationActions
        />
      </NavContainer>
      <DropdownLinks menuOpen={open} />
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
