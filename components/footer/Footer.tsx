import React from 'react'
import styled from 'styled-components';
import { GlobalStyles} from '../../constants'

export const Footer = () => {

  return (
    <FooterContainer>
        <Text>&copy; {new Date().getFullYear()} | Casabee</Text>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 8vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${GlobalStyles.colors.lightGray};
`;

const Text = styled.p`
    color: ${GlobalStyles.colors.darkGray};
    font-size: 15px;
`;