import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import Text from "../Text";

export default InviteScreen = ({ navigation }) => {
  const referralSteps = [
    "1. Invite a friend",
    "2. Your friend uses a tour Guide Service",
    "3. You and your friend get 20% off next meetup",
  ];
  return (
    <PlaceContainer>
      <SafeAreaView />
      <StatusBar />
      <Banner />
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={32} color="#76a5af" />
        </BackButton>
        <Text title bold green style={{ paddingLeft: vh(2) }}>
          Refer a Friend
        </Text>
      </Header>
      <TopArea>
        <Text medium>Know a friend who would enjoy travelling?</Text>
        <Text medium>Refer a friend and get discounts!</Text>
        <InviteStepsScroll
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {referralSteps.map((step, index) => {
            return (
              <StepContainer key={index}>
                <Text black small>
                  {step}
                </Text>
              </StepContainer>
            );
          })}
        </InviteStepsScroll>
      </TopArea>
      <InviteButton>
        <Text green medium>
          Invite Now
        </Text>
      </InviteButton>
      <TrackInviteContainer>
        <Text black small>
          Track your Invites
        </Text>
        <Text grey style={{ paddingVertical: vh(1) }}>
          Track your invites here! See which friends have registered from your
          invitation and watch your money add up!
        </Text>
        <InviteRecords>
          <SucessfulInvites>
            <Text green>SucessfulInvites</Text>
            <Text green medium>
              0
            </Text>
          </SucessfulInvites>
          <MoneySaved>
            <Text green>Money Saved</Text>
            <Text green medium>
              0
            </Text>
          </MoneySaved>
        </InviteRecords>
      </TrackInviteContainer>
    </PlaceContainer>
  );
};

const SafeAreaView = styled.SafeAreaView`
  background-color: #abd3c6;
`;

const PlaceContainer = styled.View`
  background-color: #f3f3f3ff;
  flex: 1;
`;

const Banner = styled.View`
  background-color: #abd3c6;
  border-bottom-left-radius: 38px;
  border-bottom-right-radius: 38px;
  height: 50%;
  width: 100%;
  position: absolute;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 15%;
  z-index: 10;
  padding: 10px 20px;
`;

const Header = styled.View`
  border-radius: 8px;
  flex-direction: row;
  height: 10%;
  align-items: center;
  padding-left: 50px;
`;

const TopArea = styled.View`
  height: 40%;
`;

const InviteStepsScroll = styled.ScrollView`
  margin-left: ${vw(10)}px;
`;

const StepContainer = styled.View`
  background-color: #fff;
  border-radius: ${vw(6)}px;
  margin-right: ${vh(2)}px;
  padding: ${vh(2)}px;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 25%;
`;

const InviteButton = styled.TouchableOpacity`
  background-color: #ece4dc;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: ${vh(2)}px;
  width: 80%;
  height: ${vh(8)}px;
  border-radius: ${vw(5)}px;
`;

const TrackInviteContainer = styled.View`
  background-color: #ece4dc;
  align-self: center;
  width: 80%;
  padding: 5%;
  border-radius: ${vw(5)}px;
  margin-top: 5%;
`;

const InviteRecords = styled.View`
  flex-direction: row;
  align-self: center;
`;

const SucessfulInvites = styled.View`
  background-color: #fff;
  padding: 3%;
  align-items: center;
  margin: 2px;
  border-radius: ${vw(1)}px;
  flex: 1;
`;

const MoneySaved = styled.View`
  background-color: #fff;
  padding: 3%;
  align-items: center;
  margin: 2px;
  border-radius: ${vw(1)}px;
  flex: 1;
`;

const TextContainer = styled.View`
  flex: 1;
  flex-grow: 1;
  width: 0;
`;
