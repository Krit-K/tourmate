import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";

import Text from "../components/Text";
import SafeAreaView from "../components/SafeAreaView";
import logo from "../assets/logo.png";

export default AboutUsScreen = ({ navigation }) => {
  return (
    <PlaceContainer>
      <SafeAreaView />
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Banner>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={32} color="#76a5af" />
        </BackButton>
        <Text title bold green style={{ paddingLeft: 10 }}>
          About Us
        </Text>
      </Banner>
      <BackgroundContainer>
        <TopContainer>
          <Logo source={logo} />
        </TopContainer>
        <MiddleContainer>
          <Button>
            <Text black small style={{ paddingBottom: vh(2) }}>
              Terms of Service
            </Text>
            <Text grey small>
              {">"}
            </Text>
          </Button>
          <Button>
            <Text black small>
              Privacy Policy
            </Text>
            <Text grey small>
              {">"}
            </Text>
          </Button>
        </MiddleContainer>
        <BottomContainer>
          <Button>
            <Text black small>
              Contact Us
            </Text>
            <Text grey small>
              {">"}
            </Text>
          </Button>
        </BottomContainer>
      </BackgroundContainer>
    </PlaceContainer>
  );
};

const PlaceContainer = styled.View`
  background-color: #f3f3f3;
  flex: 1;
`;

const Banner = styled.View`
  flex-direction: row;
  align-items: center;
  height: 10%;
  padding-left: 50px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 15%;
  z-index: 10;
  padding: 10px 20px;
`;

const BackgroundContainer = styled.View`
  background-color: #ece4dc;
  border-top-left-radius: 44px;
  border-top-right-radius: 44px;
  padding: 30px;
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: ${vh(1.5)}px 0px;
`;

const TopContainer = styled.View`
  background-color: #fff;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  padding: 12px;
  align-items: center;
`;

const Logo = styled.Image`
  width: ${vw(35)}px;
  height: ${vw(35)}px;
`;

const MiddleContainer = styled.View`
  margin-top: 3px;
  background-color: #fff;
  padding: 12px;
`;

const BottomContainer = styled.View`
  margin-top: 3px;
  padding: 12px;
  background-color: #fff;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
`;
