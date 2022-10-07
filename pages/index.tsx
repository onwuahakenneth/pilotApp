import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { GlobalStyles } from "../constants";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const LandingPage: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Casabee-Manage Your Rentals</title>
        <meta
          name="description"
          content="Casabee pilot website for users to get a quick overview of the app"
        />
      </Head>

      <ContentContainer>
        <Section>
          <HeaderText>...manage your property the Casabee way.</HeaderText>
          <List>
            <Item>
              <Text>Manage Leases</Text>
            </Item>
            <Item>
              <Text>Renewal Notifications</Text>
            </Item>
            <Item>
              <Text>Payments & Invoice</Text>
            </Item>
            <Item>
              <Text>Payment, Remittance & Reconciliation</Text>
            </Item>
          </List>
        </Section>
        <DesignSection>
            <Image src={'/casabee2.svg'} alt='Casabee' width={700} height={700}/ >
        </DesignSection>
      </ContentContainer>
    </MainContainer>
  );
};

export default LandingPage;

const MainContainer = styled.div`
     -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 

    &::-webkit-scrollbar {
    display: none;
    }
`;

const ContentContainer = styled.main`
  padding: 9vh 10px 0px;
  height: 91vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 
  margin-bottom: 50px;

  &::-webkit-scrollbar {
  display: none;
}
  @media screen and (max-width: 780px){
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const HeaderText = styled.p`
  color: ${GlobalStyles.colors.darkGray};
  user-select: none;
  -moz-user-select: none;
  font-size: 20px;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
`;

const DesignSection = styled.div`
  flex: 1;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;

  @media screen and (max-width: 780px){
    width: 60vw;
  }

  @media screen and (max-width: 560px){
    width: 80vw;
  }
`;

const Text = styled.p`
  color: ${GlobalStyles.colors.white};
`;


const List = styled.ul`
  list-style: none;
  margin-top: 30px;
`;

const Item = styled.li`
  padding: 20px 50px;
  background-color: ${GlobalStyles.colors.primary500};
  margin: 10px;
  border-radius: 10px;
`;
