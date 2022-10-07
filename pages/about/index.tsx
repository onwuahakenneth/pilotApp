import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { GlobalStyles } from '../../constants';
import {Card} from '../../ui/card';
import {motion} from 'framer-motion';


const AboutPage: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Casabee-Manage Your Rentals</title>
        <meta name="description" content="Casabee pilot website for users to get a quick overview of the app" />
      </Head>

      <ContentContainer >
        <HeaderText>About US</HeaderText>
        {/* contents here */}
          
      </ContentContainer>


      {/* footer section here */}
    </MainContainer>
  )
}

export default AboutPage;
  
const MainContainer = styled.div`
  `;

const Text = styled.p`
  color: ${GlobalStyles.colors.normalText};
  font-size: 18px;
  line-height: 2.5rem;
`;

const ContentContainer = styled.main`
padding-top: 9vh; 
height: 100vh;
width: 100vw;
`;

const HeaderText = styled.p`
  color: ${GlobalStyles.colors.defaultBlack};
  user-select: none;
  -moz-user-select: none;
  text-align: center;
  margin: 20px 0px;;
  font-size: 24px;
  text-decoration: underline;
`;