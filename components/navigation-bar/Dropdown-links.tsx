import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalStyles } from "../../constants";
import Link from "next/link";

interface Props {
  menuOpen: boolean;
}

export const DropdownLinks: React.FC<Props> = (props) => {
  const { menuOpen } = props;

  return (
    <Container menuOpen={menuOpen}>
      <LinkList>
        <LinkItem>
          <Link href={"/"}>
            <Text>About Us</Text>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href={"/services"}>
            <Text>Services</Text>
          </Link>
        </LinkItem>
      </LinkList>
    </Container>
  );
};

export default DropdownLinks;

const Container = styled.div<{ menuOpen: boolean }>`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 9;
  display: none;
  transform: translateY(0%);
  background-color: ${GlobalStyles.colors.primary500};
  transition: transform 0.5s linear;

  @media screen and (max-width: 780px) {
    display: block;
    transform: translateY(${({ menuOpen }) => (menuOpen ? "8vh" : "-100%")});
  }
`;

const LinkList = styled.div`
  height: 100%;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LinkItem = styled.div`
  padding: 20px 0px;
  margin: 10px 0px;
  width: 20%;
  cursor: pointer;

  &:hover p {
    letter-spacing: 1px;
    color: ${GlobalStyles.colors.white};
  }
`;

const Text = styled.p`
  color: ${GlobalStyles.colors.white};
  transition: all 0.5s linear;
`;
