import React from "react";
import {
  StatusBar,
  TouchableWithoutFeedback,
  YellowBox,
  Animated,
} from "react-native";
import styled from "styled-components";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";
import { Ionicons, Entypo } from "@expo/vector-icons";

import videoPlayer from "../../assets/videoPlayer.png";
import places from "../../exploreData";
import Text from "../Text";

export default TourGuideScreen = ({ route, navigation }) => {
  const { tourGuide } = route.params;

  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 40],
  });

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [110, 40],
    extrapolate: "clamp",
  });

  YellowBox.ignoreWarnings([
    "VirtualizedLists should never be nested",
    "Animated.event now requires a second argument for options",
    "`useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`", // TODO: Remove when fixed
  ]);

  const placeItem = (place) => {
    return (
      <TouchableWithoutFeedback>
        <Place>
          <PlaceCover source={place.cover} />

          <PlaceInfo>
            <NameTab>
              <Text black small bold>
                {place.title}
              </Text>
            </NameTab>
            <PlaceDescription>
              <Text black>{tourGuide.tourPlaces[place.title]}</Text>
            </PlaceDescription>
            <BookingContainer>
              <Text black>~2hr 30min</Text>
              <Text small orange>
                from 150 THB
              </Text>
              <BookNowButton>
                <Text black>Book Now</Text>
              </BookNowButton>
            </BookingContainer>
          </PlaceInfo>
        </Place>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <TourGuideProfileContainer
    // scrollEventThrottle={1}
    // onScroll={Animated.event([
    //   { nativeEvent: { contentOffset: { y: scrollY } } },
    // ])}
    // onScroll={(event) => scrollY.setValue(event.nativeEvent.contentOffset.y)}
    // <Animated.View style={{ transform: [{ translateY: translateY }] }}>
    // </Animated.View>
    >
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={32} color="#fff" />
      </BackButton>
      <ScrollContainer>
        <StatusBar />
        <Banner>
          <VideoPlayer source={videoPlayer} />
          <Header>
            <Animated.View
              style={{
                height: profileImageHeight,
                width: profileImageHeight,
                marginTop: -50,
                overFlow: "hidden",
              }}
            >
              <ProfileImage source={tourGuide.photo} />
            </Animated.View>
            <ProfileInfo>
              <Text white title>
                {tourGuide.name}
              </Text>
            </ProfileInfo>
            <MessageIcon>
              <Entypo name="message" size={vh(4)} color="#fff" />
            </MessageIcon>
          </Header>
          <RecentPhotosContainer>
            <Text large> {tourGuide.name}'s recent photos</Text>
            <FavouriteGuides
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {tourGuide.photos.map((photo, index) => {
                return <RecentGuidePhotoImage key={index} source={photo} />;
              })}
            </FavouriteGuides>
          </RecentPhotosContainer>
        </Banner>
        <AboutMeContainer>
          <Text small black>
            About me
          </Text>
          <Text black style={{ marginTop: 8 }}>
            {tourGuide.description}
          </Text>
        </AboutMeContainer>
        <AttractionPlacesContainer>
          <Text black medium style={{ marginLeft: 14 }}>
            Attraction Places
          </Text>
          <Places
            data={places.filter((place) =>
              tourGuide.places.includes(place.title)
            )}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => placeItem(item)}
            scrollEventThrottle={16}
          />
        </AttractionPlacesContainer>
      </ScrollContainer>
    </TourGuideProfileContainer>
  );
};

const TourGuideProfileContainer = styled.View`
  background-color: #f3f3f3;
  flex: 1;
`;

const ScrollContainer = styled.ScrollView``;

const Banner = styled.View`
  background-color: #abd3c6;
  border-radius: 8px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const VideoPlayer = styled.Image`
  width: 100%;
  height: 220px;
`;

const Header = styled.View`
  margin: 16px 18px 2px 18px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;

const ProfileInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

const ProfileImage = styled.Image`
  border-radius: 100px;
  flex: 1;
  width: null;
  height: null;
`;

const MessageIcon = styled.View`
  border-radius: 100px;
  background-color: #b0c9e4;
  height: ${vh(5.5)}px;
  width: ${vh(5.5)}px;
  justify-content: center;
  align-items: center;
`;

const RecentPhotosContainer = styled.View`
  margin: 18px;
`;

const FavouriteGuides = styled.ScrollView``;

const RecentGuidePhotoImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 12px;
  margin: 12px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 28px;
  z-index: 10;
  padding: 10px 20px;
`;

const AboutMeContainer = styled.View`
  background-color: white;
  border-radius: 12px;
  margin: 24px;
  padding: 12px;
`;

const AttractionPlacesContainer = styled.View`
  padding: 32px 12px;
  background-color: #ede3da;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

const Places = styled.FlatList`
  margin-top: 12px;
  flex: 1;
`;

const Place = styled.View`
  margin-bottom: 24px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;

const PlaceCover = styled.Image`
  height: 250px;
  width: 94%;
  align-self: center;
  border-radius: 12px;
`;

const NameTab = styled.View`
  background-color: #fff;
  align-self: flex-start;
  height: 30px;
  margin-top: -30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0px 12px;
  align-items: center;
  justify-content: space-between;
`;

const PlaceInfo = styled.View`
  background-color: #fff;
  border-radius: 12px;
  width: 94%;
  margin-top: -50px;
  align-self: center;
  padding: 8px;
  border-radius: 12px;
  justify-content: center;
`;

const PlaceDescription = styled.View`
  margin: 0px 12px 0px 12px;
`;

const BookingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
`;

const BookNowButton = styled.TouchableOpacity`
  background-color: #abd3c6;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 6px 6px;
`;
