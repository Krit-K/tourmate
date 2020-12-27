import React, { useState } from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";

import Text from "../components/Text";

export default SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState();

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      return status;
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Image,
        allowEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setProfilePhoto(result.uri);
      }
    } catch (error) {
      console.log("Error @pickIamge: ", error);
    }
  };

  const addProfilePhoto = async () => {
    const status = await getPermission();

    if (status !== "granted") {
      alert("We need permission to access your camera roll.");
      return;
    }
    pickImage();
  };

  return (
    <Container>
      <Main>
        <Text title black center>
          Sign Up to get started
        </Text>
      </Main>
      <ProfilePhotoContainer onPress={addProfilePhoto}>
        {profilePhoto ? (
          <ProfilePhoto source={{ uri: profilePhoto }} />
        ) : (
          <DefaultProfilePhoto>
            <Feather name="plus" size={24} color="#fff" />
          </DefaultProfilePhoto>
        )}
      </ProfilePhotoContainer>

      <Auth>
        <AuthContainer>
          <AuthTitle>Username</AuthTitle>
          <AuthField
            autocapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="email-address"
            onChangeText={(username) => setUsername(username.trim())}
            value={username}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Email Adress</AuthTitle>
          <AuthField
            autocapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email.trim())}
            value={email}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Password</AuthTitle>
          <AuthField
            autocapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password.trim())}
            value={password}
          />
        </AuthContainer>
      </Auth>

      <SignUpContainer disabled={loading}>
        {loading ? (
          <Loading />
        ) : (
          <Text bold center>
            Sign Up
          </Text>
        )}
      </SignUpContainer>

      <SignIn onPress={() => navigation.navigate("SignIn")}>
        <Text black center>
          Already have an account?{" "}
          <Text bold color="#8022d9">
            Sign In
          </Text>
        </Text>
      </SignIn>

      <HeaderGraphic>
        <RightCircle />

        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: ${vh(20)}px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
  background-color: #e1e2e6;
  width: ${vh(9)}px;
  height: ${vh(9)}px;
  border-radius: 40px;
  align-self: center;
  margin-top: ${vh(3)}px;
  overflow: hidden;
`;
const DefaultProfilePhoto = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ProfilePhoto = styled.Image`
  flex: 1;
`;

const Auth = styled.View`
  margin: ${vh(1.5)}px ${vh(3)}px ${vh(3)}px;
`;

const AuthContainer = styled.View`
  margin-bottom: ${vh(5)}px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: ${vh(1.5)}px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: ${vh(6)}px;
`;

const SignUpContainer = styled.TouchableOpacity`
  margin: 0 ${vh(3)}px;
  height: ${vh(6)}px;
  align-items: center;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#fff",
  size: "small",
}))``;

const SignIn = styled.TouchableOpacity`
  margin-top: ${vh(2)}px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: ${vh(-5)}px;
  z-index: -100;
`;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: ${vw(100)}px;
  height: ${vw(100)}px;
  border-radius: 200px;
  right: ${vw(-20)}px;
  top: ${vh(-25)}px;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: ${vw(50)}px;
  height: ${vw(50)}px;
  border-radius: 100px;
  left: ${vw(-10)}px;
  top: ${vh(-5)}px;
`;

const StatusBar = styled.StatusBar``;
