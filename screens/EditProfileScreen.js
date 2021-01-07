import React, { useContext } from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import profilePhoto from "../assets/jennie.png";
import { heightPercentageToDP as vh } from "react-native-responsive-screen";

import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

import Text from "../components/Text";
import SafeAreaView from "../components/SafeAreaView";

export default EditProfileScreen = ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logout = async () => {
    const loggedOut = await firebase.logout();

    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };
  return (
    <EditProfileContainer>
      <SafeAreaView />

      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Banner>
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons name="md-arrow-back" size={32} color="#76a5af" />
          </BackButton>
          <Text title bold green style={{ paddingLeft: vh(2) }}>
            Edit Profile
          </Text>
        </Banner>
        <BackgroundContainer>
          <TopContainer>
            <ProfilePhotoContainer>
              <ProfilePhoto source={profilePhoto} />
              <Text black style={{ marginBottom: vh(1) }}>
                Edit
              </Text>
            </ProfilePhotoContainer>
            <Button>
              <OptionContainer>
                <Text black small>
                  Name
                </Text>
                <Text grey small>
                  Jennie Kim{"   >"}
                </Text>
              </OptionContainer>
            </Button>
            <Button>
              <OptionContainer>
                <Text black small>
                  ID
                </Text>
                <Text grey small>
                  BK1996{"   >"}
                </Text>
              </OptionContainer>
            </Button>
          </TopContainer>
          <UpperMiddleContainer>
            <Button>
              <OptionContainer>
                <Text black small>
                  Phone Number
                </Text>
                <Text grey small>
                  {">"}
                </Text>
              </OptionContainer>
              <Text grey small>
                +66 xx xxx xxxx
              </Text>
            </Button>
            <Button>
              <OptionContainer>
                <Text black small>
                  Email Address
                </Text>
                <Text grey small>
                  {">"}
                </Text>
              </OptionContainer>
              <Text grey small>
                jennie.kim@gmail.com
              </Text>
            </Button>
            <Button>
              <OptionContainer>
                <Text black small>
                  Password
                </Text>
                <Text grey small>
                  {">"}
                </Text>
              </OptionContainer>
              <Text grey small>
                Change Password
              </Text>
            </Button>
          </UpperMiddleContainer>
          <LowerMiddleContainer>
            <Button>
              <OptionContainer>
                <Text black small>
                  Nationality
                </Text>
                <Text grey small>
                  Korean{"   >"}
                </Text>
              </OptionContainer>
            </Button>
            <Button>
              <OptionContainer>
                <Text black small>
                  Birthday
                </Text>
                <Text grey small>
                  16/02/1996{"   >"}
                </Text>
              </OptionContainer>
            </Button>
          </LowerMiddleContainer>
          <BottomContainer>
            <LogoutButton
              onPress={() => {
                navigation.navigate("AppScreens");
                logout();
              }}
            >
              <Text green center>
                LOGOUT
              </Text>
            </LogoutButton>
          </BottomContainer>
        </BackgroundContainer>
      </ScrollView>
    </EditProfileContainer>
  );
};

const EditProfileContainer = styled.View`
  background-color: #f3f3f3;
  flex: 1;
`;

const ScrollView = styled.ScrollView``;

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

const ProfilePhoto = styled.Image`
  width: ${vh(15)}px;
  height: ${vh(15)}px;
  border-radius: 100px;
  margin-bottom: ${vh(1)}px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  width: ${vh(15)}px;
`;

const Button = styled.TouchableOpacity`
  padding: ${vh(1.5)}px 0px;
`;

const OptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TopContainer = styled.View`
  background-color: #fff;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  padding: 12px;
`;

const UpperMiddleContainer = styled.View`
  margin-top: 3px;
  background-color: #fff;
  padding: 12px;
`;

const LowerMiddleContainer = styled.View`
  margin-top: 3px;
  background-color: #fff;
  padding: 12px;
`;

const LogoutButton = styled.TouchableOpacity`
  padding: ${vh(0.5)}px 0px;
`;

const BottomContainer = styled.View`
  margin-top: 3px;
  padding: 12px;
  background-color: #fff;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  margin-bottom: ${vh(5)}px;
`;
