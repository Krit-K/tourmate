import React from "react";
import { StatusBar, TouchableWithoutFeedback, StyleSheet } from "react-native";
import styled from "styled-components";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import Text from "../Text";
import places from "../../exploreData";
import tourGuides from "../../tourGuideData";

export default HomeScreen = ({ navigation }) => {
  const popularPlaces = places.filter((place) => place.rating > 4.7);
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Banner>
        <Header>
          <Text large black>
            Hi,{" "}
            <Text large black>
              Jennie Kim!
            </Text>
          </Text>
          <CalendarContainer
            onPress={() => navigation.navigate("CalendarScreen")}
          >
            <Calendar source={require("../../assets/calendar.png")} />
          </CalendarContainer>
        </Header>
      </Banner>
      <Button
        onPress={() => navigation.navigate("TourScreen")}
        style={styles.shadowLevel7}
      >
        <Text black medium>
          Find a Tour Guide
        </Text>
        <Ionicons name="ios-arrow-dropright-circle" size={42} color="#b0c9e4" />
      </Button>

      <RecommendedGuidesContainer>
        <Subtitle>
          <Text small black>
            {" "}
            Recomended Tour Guides
          </Text>
          <SeeAll onPress={() => navigation.navigate("TourScreen")}>
            <Text black>See all{"  "}</Text>
            <Ionicons name="ios-arrow-forward" size={16} color="#000" />
          </SeeAll>
        </Subtitle>
        <RecommendedGuides
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={300}
          snapToAlignment={"center"}
        >
          {tourGuides.map((tourGuide, index) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("TourGuideScreen", {
                    tourGuide: tourGuide,
                  })
                }
                key={index}
              >
                <RecommendedGuideContainer style={styles.shadowLevel1}>
                  <Profile>
                    <RecommendedGuideImage source={tourGuide.photo} />
                    <FlagImage source={tourGuide.nationality} />
                    <RatingContainer>
                      <FontAwesome name="star" size={18} color="#f1c232" />
                      <Rating>
                        <Text>{tourGuide.rating}</Text>
                      </Rating>
                    </RatingContainer>
                  </Profile>
                  <ProfileInfo>
                    <Text black large>
                      {tourGuide.name}
                    </Text>
                    <Text black>
                      <Feather name="clock" size={18} color="#000" />{" "}
                      <Text medium orange>
                        {tourGuide.category.price}
                      </Text>{" "}
                      THB per hr
                    </Text>
                    <SpeakingLanguageContainer>
                      <MaterialIcons
                        name="record-voice-over"
                        size={18}
                        color="#000"
                      />
                      <Text black>
                        {" "}
                        {tourGuide.languages.toString().replace(/,/g, ", ")}
                      </Text>
                    </SpeakingLanguageContainer>
                  </ProfileInfo>
                </RecommendedGuideContainer>
              </TouchableWithoutFeedback>
            );
          })}
        </RecommendedGuides>
      </RecommendedGuidesContainer>

      <PlacesContainer>
        <Subtitle>
          <Text small black>
            {" "}
            Popular Atrraction Places
          </Text>
          <SeeAll onPress={() => navigation.navigate("Explore")}>
            <Text black>See all{"  "}</Text>
            <Ionicons name="ios-arrow-forward" size={16} color="#000" />
          </SeeAll>
        </Subtitle>
        <Places
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={290}
          snapToAlignment={"center"}
        >
          {popularPlaces.map((place, index) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("PlaceScreen", {
                    place: place,
                  })
                }
                key={index}
              >
                <PlaceContainer style={styles.shadowLevel1}>
                  <PlaceImage source={place.cover}></PlaceImage>
                  <LinearGradient
                    colors={["transparent", "#000"]}
                    locations={[0, 0.6]}
                    style={styles.linearGradient}
                  >
                    <RatingContainer>
                      <FontAwesome name="star" size={18} color="#f1c232" />
                      <Rating>
                        <Text>{place.rating}</Text>
                      </Rating>
                    </RatingContainer>
                    <TextContainer>
                      <Text small>{place.title}</Text>
                    </TextContainer>
                  </LinearGradient>
                </PlaceContainer>
              </TouchableWithoutFeedback>
            );
          })}
        </Places>
      </PlacesContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3ff;
`;

const Banner = styled.View`
  background-color: #f1b986ff;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-bottom: 60px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 32px 0px 32px;
`;

const CalendarContainer = styled.TouchableOpacity``;

const Calendar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Button = styled.TouchableOpacity`
  margin: -30px 42px 20px 42px;
  background-color: #ede3daff;
  padding: 1px 10px 1px 20px;
  border-radius: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Subtitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SeeAll = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #d5f3cdff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  margin-right: 18px;
`;

const RecommendedGuidesContainer = styled.View`
  margin: 0px 0px 0px 18px;
`;

const RecommendedGuides = styled.ScrollView``;

const RecommendedGuideContainer = styled.View`
  flex-direction: row;
  background-color: #ede3daff;
  padding: 8px;
  height: 140px;
  width: 300px;
  border-radius: 12px;
  margin: 8px;
`;

const RecommendedGuideImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

const Profile = styled.View`
  align-items: center;
`;

const ProfileInfo = styled.View`
  flex: 1;
  padding: 8px;
  margin-left: 24px;
`;

const FlagImage = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 100px;
  align-self: flex-end;
  margin-top: -24px;
`;

const TextContainer = styled.View`
  margin-left: 12px;
  flex: 1;
`;

const SpeakingLanguageContainer = styled.View`
  flex-direction: row;
`;

const RatingContainer = styled.View`
  padding-top: 4px;
  flex-direction: row;
  align-items: center;
`;
const Rating = styled.View`
  background-color: #f1c232;
  align-self: flex-start;
  margin-left: 2px;
  border-radius: 4px;
  padding: 0px 4px;
`;

const PlacesContainer = styled.View`
  margin: 18px 0px 18px 18px;
`;

const Places = styled.ScrollView``;

const PlaceContainer = styled.View`
  align-items: center;
  height: 140px;
  width: 300px;
  border-radius: 12px;
  margin: 8px;
`;

const PlaceImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

const styles = StyleSheet.create({
  shadowLevel7: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  shadowLevel1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  linearGradient: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    width: "100%",
    borderRadius: 8,
    marginTop: -30,
  },
});
