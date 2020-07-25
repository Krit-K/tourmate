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

export default MeScreen = ({ navigation }) => {
  return (
    <PlaceContainer>
      <StatusBar />
      <Banner>
        <Header>
          <ProfileInfo>
            <Text white title>
              Jennie Kim
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
                    <Divider />
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
      </Banner>
      <ButtonContainer>
        <ButtonColumn>
          <Button>
            <Feather name="map-pin" size={18} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                Visited Place
              </Text>
            </TextContainer>
          </Button>
          <Button>
            <SimpleLineIcons name="wallet" size={18} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                My Wallet
              </Text>
            </TextContainer>
          </Button>
          <Button>
            <FontAwesome name="sliders" size={18} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                General
              </Text>
            </TextContainer>
          </Button>
        </ButtonColumn>
        <ButtonColumn>
          <Button>
            <SimpleLineIcons name="settings" size={20} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 12 }}>
                Edit Profile
              </Text>
            </TextContainer>
          </Button>
          <Button>
            <Octicons name="gift" size={23} color="black" />
            <TextContainer>
              <Text black medium style={{ marginLeft: 14 }}>
                Refer a Friend
              </Text>
            </TextContainer>
          </Button>
          <Button>
            <SimpleLineIcons name="question" size={20} color="black" />
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

const PlaceContainer = styled.View`
  background-color: #f3f3f3ff;
  flex: 1;
`;

const Banner = styled.View`
  background-color: #f1b986ff;
  border-bottom-left-radius: 38px;
  border-bottom-right-radius: 38px;
`;

const Header = styled.View`
  margin: 26px 18px 0px 18px;
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
  width: 100px;
  height: 100px;
  border-radius: 100px;
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

const FavourtieGuidesContainer = styled.View`
  margin: 4px 18px 18px 18px;
`;

const FavouriteGuides = styled.ScrollView``;

const FavouriteGuideContainer = styled.View`
  padding: 8px;
`;

const FavouriteGuide = styled.TouchableOpacity`
  background-color: #fff;
  height: 105px;
  width: 150px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  align-items: center;
  margin-bottom: 4px;
`;

const FavouriteGuideInfo = styled.View`
  background-color: #ede3daff;
  height: 47px;
  width: 150px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const FavouriteGuideImage = styled.Image`
  margin: 3px 8px 0px 8px;
  height: 100px;
  width: 100px;
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

const Divider = styled.View`
  width: 100%;
  border-bottom-color: #f1b986ff;
  border-bottom-width: 3px;
  margin-top: 8px;
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
