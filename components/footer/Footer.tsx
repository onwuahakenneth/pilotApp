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

    @media screen and (max-width: 780px){
            height: 6vh;
        }
`;

const Text = styled.p`
    color: ${GlobalStyles.colors.darkGray};
    font-size: 15px;

    @media screen and (max-width: 780px){
            font-size: 13px;
        }
`;