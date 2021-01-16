import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP as vh } from "react-native-responsive-screen";

import Text from "../components/Text";
import SafeAreaView from "../components/SafeAreaView";
import users from "../data/userData";

const visitedPlace = users;

export default VisitedPlaceScreen = ({ navigation }) => {
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
          Visited Place
        </Text>
      </Banner>
      <BackgroundContainer>
        <Container>
          <VisitedPlaceCard>
            <PlaceImage />
            <InformationContainer>
              <ViewProfile>
                <Text>View Profile</Text>
              </ViewProfile>
              <BookNow>
                <Text>Book Now</Text>
              </BookNow>
            </InformationContainer>
            <AddComment>
              <Text black>Add Comment</Text>
            </AddComment>
          </VisitedPlaceCard>
        </Container>
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

const Container = styled.View`
  background-color: #fff;
  border-radius: 22px;
  padding: 12px;
`;

const VisitedPlaceCard = styled.View``;
const InformationContainer = styled.View`
  align-items: center;
  background-color: #ece4dc;
  padding: ${vh(1.5)}px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  margin-bottom: 4px;
`;

const PlaceImage = styled.Image``;

const ViewProfile = styled.TouchableOpacity`
  background-color: #f1b986;
  padding: ${vh(0.7)}px;
  border-radius: 8px;
`;

const BookNow = styled.TouchableOpacity`
  background-color: #abd3c6;
  padding: ${vh(0.7)}px;
  border-radius: 8px;
`;

const AddComment = styled.TouchableOpacity`
  align-items: center;
  background-color: #ece4dc;
  padding: ${vh(1.5)}px;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: ${vh(1.5)}px 0px;
`;
