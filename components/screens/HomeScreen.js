import React, { useState } from "react";
import { StatusBar, TouchableWithoutFeedback, StyleSheet } from "react-native";
import styled from "styled-components";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import Text from "../Text";
import SafeAreaView from "../SafeAreaView";
import places from "../../exploreData";
import tourGuides from "../../tourGuideData";

export default HomeScreen = ({ navigation }) => {
  const [placeActiveSlide, setPlaceActiveSlide] = useState(0);
  const [guideActiveSlide, setGuideActiveSlide] = useState(1);
  const popularPlaces = places.filter((place) => place.rating > 4.2);
  const renderPlaces = (place, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("PlaceScreen", {
            place: place.item,
          })
        }
        key={index}
      >
        <PlaceContainer>
          <PlaceImage source={place.item.cover} />
          <LinearGradient
            colors={["transparent", "#000"]}
            locations={[0, 0.6]}
            style={styles.linearGradient}
          >
            <RatingContainer>
              <FontAwesome name="star" size={18} color="#f1c232" />
              <Rating>
                <Text>{place.item.rating}</Text>
              </Rating>
            </RatingContainer>
            <TextContainer>
              <Text small>{place.item.title}</Text>
              <Text>{place.item.teaser}</Text>
            </TextContainer>
          </LinearGradient>
        </PlaceContainer>
      </TouchableWithoutFeedback>
    );
  };

  const renderTourGuides = (tourGuide, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("TourGuideScreen", {
            tourGuide: tourGuide.item,
          })
        }
        key={index}
      >
        <RecommendedGuideContainer>
          <Profile>
            <RecommendedGuideImage source={tourGuide.item.photo} />
            <FlagImage source={tourGuide.item.nationality} />
          </Profile>
          <ProfileInfo>
            <RatingContainer>
              <FontAwesome name="star" size={18} color="#f1c232" />
              <Rating>
                <Text>{tourGuide.item.rating}</Text>
              </Rating>
            </RatingContainer>
            <NameContainer>
              <Text brown small>
                {tourGuide.item.name}
              </Text>
            </NameContainer>
          </ProfileInfo>
        </RecommendedGuideContainer>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView green />
        <Banner>
          <Header>
            <Text large brown>
              Hi,{" "}
              <Text large brown>
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
          <FindTourGuideTextContainer>
            <Ionicons name="ios-search" size={24} color="#efefef" />
            <Text medium>{"  "}Find a Tour Guide</Text>
          </FindTourGuideTextContainer>
          <Ionicons
            name="ios-arrow-dropright-circle"
            size={42}
            color="#efefef"
          />
        </Button>
        <PlacesContainer>
          <Subtitle>
            <Text small brown>
              Popular Atrraction Places
            </Text>
            <SeeAll onPress={() => navigation.navigate("Explore")}>
              <Text black>See all{"  "}</Text>
              <Ionicons name="ios-arrow-forward" size={16} color="#000" />
            </SeeAll>
          </Subtitle>
          <Carousel
            data={popularPlaces}
            renderItem={renderPlaces}
            sliderWidth={vw(100)}
            itemWidth={vw(78)}
            layout={"stack"}
            style={{ backgroundColor: "coral" }}
            onSnapToItem={(index) => setPlaceActiveSlide(index)}
          />
          <Pagination
            dotsLength={popularPlaces.length}
            activeDotIndex={placeActiveSlide}
            containerStyle={{
              backgroundColor: "#f3f3f3ff",
              paddingVertical: 0,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 2,
              backgroundColor: "#abd3c6",
            }}
            inactiveDotStyle={{
              backgroundColor: "#999",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </PlacesContainer>
        <RecommendedGuidesContainer>
          <Subtitle>
            <Text small brown>
              Recomended Tour Guides
            </Text>
            <SeeAll onPress={() => navigation.navigate("TourScreen")}>
              <Text black>See all{"  "}</Text>
              <Ionicons name="ios-arrow-forward" size={16} color="#000" />
            </SeeAll>
          </Subtitle>
          <Carousel
            data={tourGuides}
            renderItem={renderTourGuides}
            sliderWidth={vw(100)}
            itemWidth={180}
            layout={"default"}
            firstItem={1}
            onSnapToItem={(index) => setGuideActiveSlide(index)}
          />
          <Pagination
            dotsLength={tourGuides.length}
            activeDotIndex={guideActiveSlide}
            containerStyle={{
              backgroundColor: "#f3f3f3ff",
              paddingVertical: vh(0.7),
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 2,
              backgroundColor: "#abd3c6",
            }}
            inactiveDotStyle={{
              backgroundColor: "#999",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </RecommendedGuidesContainer>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3ff;
`;

const ScrollView = styled.ScrollView``;

const Banner = styled.View`
  background-color: #abd3c6;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 17%;
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

const FindTourGuideTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  margin: -30px 0px 4px 0px;
  width: ${vw(78)}px;
  background-color: #76a5af;
  align-self: center;
  padding: 1px 10px 1px 20px;
  border-radius: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Subtitle = styled.View`
  margin-left: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PlacesContainer = styled.View`
  margin: 18px 0px 18px 0px;
`;

const PlaceContainer = styled.View`
  height: ${vw(70)}px;
  border-radius: 12px;
  margin: 8px;
`;

const PlaceImage = styled.Image`
  height: 80%;
  width: 100%;
  border-radius: 12px;
`;

const SeeAll = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  margin-right: 18px;
`;

const RecommendedGuidesContainer = styled.View`
  margin-bottom: ${vh(8)}px;
`;

const RecommendedGuideContainer = styled.View`
  border-radius: 12px;
  margin: 8px;
`;

const RecommendedGuideImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

const Profile = styled.View`
  background-color: #fff;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: ${vh(1)}px ${vw(8)}px;
`;

const ProfileInfo = styled.View`
  margin-top: 3px;
  align-items: center;
  justify-content: space-evenly;
  padding: ${vw(1)}px;
  background-color: #abd3c6;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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

const RatingContainer = styled.View`
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

const NameContainer = styled.View`
  height: 16px;
  justify-content: center;
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
  linearGradient: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    height: "38%",
    width: "100%",
    borderRadius: 12,
    marginTop: -vw(14),
  },
});
