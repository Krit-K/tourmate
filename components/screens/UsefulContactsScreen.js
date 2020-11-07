import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";

import Text from "../Text";
import SafeAreaView from "../SafeAreaView";
import policeIcon from "../../assets/usefulContacts/policeIcon.png";
import fireDepartmentIcon from "../../assets/usefulContacts/fireDepartment.png";
import ambulanceIcon from "../../assets/usefulContacts/ambulance.png";
import informationIcon from "../../assets/usefulContacts/information.png";

export default UsefulContactsScreen = ({ navigation }) => {
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
          Useful Contact
        </Text>
      </Banner>
      <BackgroundContainer>
        <TopContainer>
          <ContactContainer>
            <IconView>
              <PoliceIcon source={policeIcon} />
            </IconView>
            <TextView>
              <Text black small>
                Police Hotline
              </Text>
              <Text green medium>
                191
              </Text>
              <Text black small>
                Tourist Police
              </Text>
              <Text green medium>
                1155
              </Text>
              <Text black>{"\n"}Operating Hours</Text>
              <Text green>24 Hours</Text>
            </TextView>
          </ContactContainer>
        </TopContainer>
        <MiddleContainer>
          <ContactContainer>
            <IconView>
              <AmbulanceIcon source={ambulanceIcon} />
            </IconView>
            <TextView>
              <Text black small>
                Ambulance
              </Text>
              <Text green medium>
                1554
              </Text>
              <Text black>{"\n"}Operating Hours</Text>
              <Text green>24 Hours</Text>
            </TextView>
          </ContactContainer>
        </MiddleContainer>
        <MiddleContainer>
          <ContactContainer>
            <IconView>
              <FireDepartmentIcon source={fireDepartmentIcon} />
            </IconView>
            <TextView>
              <Text black small>
                Fire Brigade
              </Text>
              <Text green medium>
                199
              </Text>
              <Text black>{"\n"}Operating Hours</Text>
              <Text green>24 Hours</Text>
            </TextView>
          </ContactContainer>
        </MiddleContainer>
        <BottomContainer>
          <ContactContainer>
            <IconView>
              <TourismAuthorityIcon source={informationIcon} />
            </IconView>
            <TextView>
              <Text black small>
                Tourist Hotline
              </Text>
              <Text black>TAT Call Centre</Text>
              <Text green medium>
                1672
              </Text>
              <Text black>{"\n"}Operating Hours</Text>
              <Text green>24 Hours</Text>
            </TextView>
          </ContactContainer>
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

const ContactContainer = styled.View`
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

const PoliceIcon = styled.Image`
  width: ${vw(20)}px;
  height: ${vw(20)}px;
`;

const AmbulanceIcon = styled.Image`
  width: ${vw(20)}px;
  height: ${vw(20)}px;
`;

const FireDepartmentIcon = styled.Image`
  width: ${vw(20)}px;
  height: ${vw(20)}px;
`;

const TourismAuthorityIcon = styled.Image`
  width: ${vw(20)}px;
  height: ${vw(20)}px;
`;

const IconView = styled.View`
  flex: 4;
`;

const TextView = styled.View`
  flex: 7;
  padding-left: ${vw(2)}px;
`;
