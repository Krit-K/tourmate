import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { heightPercentageToDP as vh } from "react-native-responsive-screen";

import Text from "../Text";

export default GeneralScreen = ({ navigation }) => {
  return (
    <PlaceContainer>
      <SafeAreaView />
      <StatusBar barStyle="default" />
      <Banner>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={32} color="#76a5af" />
        </BackButton>
        <Text title bold green style={{ paddingLeft: 10 }}>
          General
        </Text>
      </Banner>
      <BackgroundContainer>
        <TopContainer>
          <Button>
            <Text black small>
              Message Notification
            </Text>
            <Text grey small>
              O
            </Text>
          </Button>
        </TopContainer>
        <MiddleContainer>
          <Button>
            <Text black small style={{ paddingBottom: vh(2) }}>
              Language
            </Text>
            <Text grey small>
              English{"   >"}
            </Text>
          </Button>
          <Button>
            <Text black small>
              Text Size
            </Text>
            <Text grey small>
              12{"   >"}
            </Text>
          </Button>
        </MiddleContainer>
        <BottomContainer>
          <Button>
            <Text black small>
              Blocked Accounts
            </Text>
            <Text grey small>
              {">"}
            </Text>
          </Button>
          <Button>
            <Text black small>
              Currency
            </Text>
            <Text grey small>
              Thai Baht{"   >"}
            </Text>
          </Button>
        </BottomContainer>
      </BackgroundContainer>
    </PlaceContainer>
  );
};

const SafeAreaView = styled.SafeAreaView`
  background-color: #f3f3f3;
`;

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
