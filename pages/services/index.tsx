import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { GlobalStyles } from "../../constants";
import { Card } from "../../ui/card";
import { motion } from "framer-motion";

const ServicesPage: NextPage = () => {
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
        <HeaderText>Our Services:</HeaderText>
        {/* contents here */}
        <ServicesContianer>
          <Card>
            <ItemContainer>
              <TitleContainer>
                <TitleText>Manage Leases</TitleText>
              </TitleContainer>
              <ItemContent>
                <Text>
                  Simple interface to create new lease, view existing lease
                  details such as facility, apartments, occupant contact email &
                  phone number, start and end date, fees, contract documents,
                  status, renewal history and more.
                </Text>
              </ItemContent>
            </ItemContainer>
          </Card>

          <Card>
            <ItemContainer>
              <TitleContainer>
                <TitleText>Renewal Notification</TitleText>
              </TitleContainer>
              <ItemContent>
                <Text>
                  Receive automated renewal notification for all expiring leases
                  close to the expiry date. For example 3 months to the lease
                  expiration date.
                </Text>
              </ItemContent>
            </ItemContainer>
          </Card>

          <Card>
            <ItemContainer>
              <TitleContainer>
                <TitleText>Payments and Invoice</TitleText>
              </TitleContainer>
              <ItemContent>
                <Text>
                  Create and send electronic lease invoice in any currency to
                  tenants from anywhere at anytime, receiving automated
                  notifications and reminders for unpaid or part-paid leases
                  that have passed due date.
                </Text>
              </ItemContent>
            </ItemContainer>
          </Card>

          <Card>
            <ItemContainer>
              <TitleContainer>
                <TitleText>Payment, Remittance and Reconciliation</TitleText>
              </TitleContainer>
              <ItemContent>
                <Text>
                  Record and track payments to landlord, solicitors and third
                  party agencies.
                </Text>
              </ItemContent>
            </ItemContainer>
          </Card>

          {/* <Card>
            <ItemContainer>
              <TitleContainer>
                  <TitleText>Service charge & utility charge billing</TitleText>
              </TitleContainer>
              <ItemContent>
                <Text>
                Everything you need to effectively schedule, apportion, invoice and receive 
                service charge & utility payments with ease
                </Text>
              </ItemContent>
            </ItemContainer>
          </Card>

          <Card>
            <ItemContainer>
              <TitleContainer>
                  <TitleText>Bulk notification</TitleText>
              </TitleContainer>
              <ItemContent>
                <Text>
                Quickly send bulk notifications & alerts via SMS and email to registered 
                facility users and other stakeholders
                </Text>
              </ItemContent>
            </ItemContainer>
          </Card> */}
        </ServicesContianer>
      </ContentContainer>

      {/* footer section here */}
    </MainContainer>
  );
};

export default ServicesPage;

const MainContainer = styled.div``;

const Text = styled.p`
  color: ${GlobalStyles.colors.normalText};
  font-size: 18px;
  line-height: 2.5rem;

  @media screen and (max-width: 960px){
    line-height: 1.8rem;
  }
`;

const ContentContainer = styled.main`
  padding-top: 9vh;
  height: 100%;
  width: 100%;
  margin-bottom: 9vh;
  overflow-y: hidden;
`;

const ItemContainer = styled.div`
  width: 40vw;
  min-width: 300px;
  height: 300px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media screen and (max-width: 780px){
    width: 80vw;
  }
`;

const HeaderText = styled.p`
  color: ${GlobalStyles.colors.darkGray};
  user-select: none;
  font-weight: 600;
  -moz-user-select: none;
  text-align: center;
  margin: 20px 0px;
  font-size: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${GlobalStyles.colors.darkGray};
`;

const ServicesContianer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const ItemContent = styled.div``;
