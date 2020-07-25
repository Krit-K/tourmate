import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";

import Text from "../Text";
import tourGuides from "../../tourGuideData";

export default PlaceScreen = ({ route, navigation }) => {
  const { place } = route.params;
  const availableGuides = tourGuides.filter((guide) =>
    guide.places.includes(place.title)
  );

  const [selectedGuide, setSelectedGuide] = useState(availableGuides[0]);

  const changeSelection = (guide) => {
    setSelectedGuide(guide);
  };

  return (
    <PlaceContainer>
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={32} color="#ffffff" />
      </BackButton>
      <ScrollContainer>
        <StatusBar barStyle="light-content" />
        <PlacePhotoContainer>
          <PlacePhoto source={place.cover} />
        </PlacePhotoContainer>
        <NameTab>
          <Text medium black>
            {place.title}
            {"   "}
          </Text>
          <FontAwesome5 name="bookmark" size={20} />
        </NameTab>
        <Description>
          <Text black>{place.description}</Text>
        </Description>
        <AvailableTourGuidesContainer>
          <Text black large>
            Available Tour Guides
          </Text>
          <TourGuidesSelection
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {availableGuides.map((guide, index) => {
              return (
                <TourGuideContainer
                  key={index}
                  onPress={() => changeSelection(guide)}
                >
                  <GuideImage
                    source={guide.photo}
                    selected={selectedGuide === guide ? true : false}
                  />
                </TourGuideContainer>
              );
            })}
          </TourGuidesSelection>
          <GuideInfo>
            <InfoHeader>
              <Text large black>
                {selectedGuide.name}
              </Text>
              <RatingContainer>
                <FontAwesome name="star" size={18} color="#f1c232" />
                <Rating>
                  <Text>{selectedGuide.rating}</Text>
                </Rating>
              </RatingContainer>
              <ViewProfile
                onPress={() =>
                  navigation.navigate("TourGuideScreen", {
                    tourGuide: selectedGuide,
                  })
                }
              >
                <Text> View Profile</Text>
              </ViewProfile>
            </InfoHeader>
            <Divider />
            <Text black>{selectedGuide.description}</Text>
            <BookNowContainer>
              <BookNow>
                <Text black>Book Now</Text>
              </BookNow>
            </BookNowContainer>
          </GuideInfo>
          <Review>
            <Text black large>
              {" "}
              Reviews
            </Text>
            <Divider />
            <Text black> No Reviews </Text>
          </Review>
        </AvailableTourGuidesContainer>
      </ScrollContainer>
    </PlaceContainer>
  );
};

const PlaceContainer = styled.View`
  background-color: #f3f3f3ff;
  flex: 1;
`;

const ScrollContainer = styled.ScrollView``;

const PlacePhotoContainer = styled.View`
  position: relative;
`;
const PlacePhoto = styled.Image`
  height: 250px;
  width: 100%;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 36px;
  z-index: 10;
`;

const NameTab = styled.View`
  flex-direction: row;
  background-color: #ede3daff;
  align-self: flex-start;
  height: 30px;
  margin: -50px 0px 0px 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 0px 12px;
  align-items: center;
  justify-content: space-between;
`;

const Description = styled.View`
  background-color: #ede3daff;
  border-radius: 20px;
  padding: 12px 24px;
`;

const AvailableTourGuidesContainer = styled.View`
  margin-top: 25px;
  background-color: #ede3daff;
  border-radius: 12px;
  padding: 20px;
`;

const TourGuidesSelection = styled.ScrollView`
  background-color: #ede3daff;
`;

const TourGuideContainer = styled.TouchableOpacity`
  padding: 8px;
  flex-direction: row;
  justify-content: space-evenly;
`;

const GuideImage = styled.Image`
  height: ${(props) => (props.selected ? "106px" : "100px")};
  width: ${(props) => (props.selected ? "106px" : "100px")};
  border-radius: 100px;
  border-color: #fff;
  border-width: ${(props) => (props.selected ? "6px" : "0px")};
`;

const GuideInfo = styled.View`
  background-color: #fff;
  padding: 24px;
  border-radius: 20px;
  margin: 10px 0px;
`;

const InfoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
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

const ViewProfile = styled.TouchableOpacity`
  background-color: #f1b986ff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
`;

const BookNowContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;
const BookNow = styled.TouchableOpacity`
  background-color: #d5f3cdff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 6px 6px;
  width: 35%;
`;

const Divider = styled.View`
  border-bottom-color: #ede3daff;
  border-bottom-width: 2px;
  margin: 8px 0;
`;

const Review = styled.View`
  background-color: #fff;
  padding: 24px;
  border-radius: 20px;
  margin: 10px 0px;
`;
