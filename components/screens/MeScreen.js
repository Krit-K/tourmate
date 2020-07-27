import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import {
  Feather,
  FontAwesome,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import profileImage from "../../assets/jennie.png";
import tourGuides from "../../tourGuideData";
import Text from "../Text";
import { vw, vh } from "../Viewport";

export default MeScreen = ({ navigation }) => {
  return (
    <PlaceContainer>
      <SafeAreaView />
      <StatusBar />
      <Banner></Banner>
      <Header>
        <ProfileInfo>
          <Text white title>
            {"\n"}Jennie Kim
          </Text>
          <Text white large>
            ID: BK1996
          </Text>
        </ProfileInfo>
        <ProfileImage source={profileImage} />
      </Header>
      <FavourtieGuidesContainer>
        <Text large> My Favourite Tour Guides</Text>
        <FavouriteGuides
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {tourGuides.map((tourGuide, index) => {
            return (
              <FavouriteGuideContainer key={index}>
                <FavouriteGuide
                  onPress={() =>
                    navigation.navigate("TourGuideScreen", {
                      tourGuide: tourGuide,
                    })
                  }
                >
                  <FavouriteGuideImage source={tourGuide.photo} />
                  <FlagImage source={tourGuide.nationality} />
                </FavouriteGuide>
                <FavouriteGuideInfo>
                  <RatingContainer>
                    <FontAwesome name="star" size={18} color="#f1c232" />
                    <Rating>
                      <Text>{tourGuide.rating}</Text>
                    </Rating>
                  </RatingContainer>
                  <Text black small>
                    {tourGuide.name}
                  </Text>
                </FavouriteGuideInfo>
              </FavouriteGuideContainer>
            );
          })}
        </FavouriteGuides>
      </FavourtieGuidesContainer>

      <ButtonContainer>
        <ButtonColumn>
          <Button>
            <Feather name="map-pin" size={vw(8)} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                Visited Place
              </Text>
            </TextContainer>
          </Button>
          <Button>
            <SimpleLineIcons name="wallet" size={vw(8)} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                My Wallet
              </Text>
            </TextContainer>
          </Button>
          <Button>
            <FontAwesome name="sliders" size={vw(8)} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                General
              </Text>
            </TextContainer>
          </Button>
        </ButtonColumn>
        <ButtonColumn>
          <Button>
            <SimpleLineIcons name="settings" size={vw(8)} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                Edit Profile
              </Text>
            </TextContainer>
          </Button>
          <Button>
            <Octicons name="gift" size={vw(9)} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: vw(4) }}>
                Refer a Friend
              </Text>
            </TextContainer>
          </Button>
          <Button>
            <SimpleLineIcons name="question" size={vw(8)} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                About Us
              </Text>
            </TextContainer>
          </Button>
        </ButtonColumn>
      </ButtonContainer>
    </PlaceContainer>
  );
};

const SafeAreaView = styled.SafeAreaView`
  background-color: #f1b986ff;
`;

const PlaceContainer = styled.View`
  background-color: #f3f3f3ff;
  flex: 1;
`;

const Banner = styled.View`
  background-color: #f1b986ff;
  border-bottom-left-radius: 38px;
  border-bottom-right-radius: 38px;
  height: 54%;
  width: 100%;
  position: absolute;
`;

const Header = styled.View`
  margin: 26px 18px ${vw(4)}px 18px;
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
  height: ${vw(30)}px;
  width: ${vw(30)}px;
  border-radius: 100px;
`;

const FavourtieGuidesContainer = styled.View`
  margin: 4px 18px 18px 18px;
`;

const FavouriteGuides = styled.ScrollView``;

const FavouriteGuideContainer = styled.View`
  padding: ${vh(2)}px ${vh(1)}px 0px 0px;
  justify-content: center;
`;

const FavouriteGuide = styled.TouchableOpacity`
  background-color: #fff;
  padding: ${vw(1)}px ${vw(5)}px;
  border-top-left-radius: ${vw(6)}px;
  border-top-right-radius: ${vw(6)}px;
  margin: ${vw(0)}px ${vw(2)}px;
  margin-bottom: ${vw(1)}px;
`;

const FavouriteGuideInfo = styled.View`
  background-color: #ede3daff;
  border-bottom-left-radius: ${vw(6)}px;
  border-bottom-right-radius: ${vw(6)}px;
  margin: ${vw(0)}px ${vw(2)}px;
  padding: ${vw(1)}px ${vw(5)}px;
  justify-content: center;
  align-items: center;
`;

const FavouriteGuideImage = styled.Image`
  margin: 3px 8px 0px 8px;
  height: ${vw(35)}px;
  width: ${vw(35)}px;
  border-radius: 100px;
`;

const FlagImage = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 100px;
  align-self: flex-end;
  margin-right: 26px;
  margin-top: -24px;
`;

const RatingContainer = styled.View`
  padding-top: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Rating = styled.View`
  background-color: #f1c232;
  align-self: flex-start;
  margin-left: 2px;
  border-radius: 4px;
  padding: 0px 4px;
`;

const ButtonColumn = styled.View`
  justify-content: space-between;
  flex: 1;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 18px 8px 18px;
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #ede3daff;
  padding: 10px;
  border-radius: 10px;
  margin: 6px;
  flex: 1;
`;

const TextContainer = styled.View`
  flex: 1;
  flex-grow: 1;
  width: 0;
`;
