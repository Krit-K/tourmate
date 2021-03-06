import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";

import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext } from "../context/UserContext";

import Text from "../components/Text";

export default SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  const signIn = async () => {
    setLoading(true);

    try {
      await firebase.signIn(email, password);

      const uid = firebase.getCurrentUser().uid;
      const userInfo = await firebase.getUserInfo(uid);

      setUser({
        username: userInfo.username,
        email: userInfo.email,
        uid,
        profilePhotoUrl: userInfo.profilePhotoUrl,
        isLoggedIn: true,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Main>
        <Text title black center>
          Welcome back
        </Text>
      </Main>
      <Auth>
        <AuthContainer>
          <AuthTitle>Email Address</AuthTitle>
          <AuthField
            autocapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            autoFocus={true}
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

      <SignInContainer onPress={signIn} disabled={loading}>
        {loading ? (
          <Loading />
        ) : (
          <Text bold center>
            Sign In
          </Text>
        )}
      </SignInContainer>

      <SignUp onPress={() => navigation.navigate("SignUp")}>
        <Text black center>
          New to Tourmate?{"  "}
          <Text bold orange>
            Sign Up
          </Text>
        </Text>
      </SignUp>

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

const Auth = styled.View`
  margin: ${vh(6)}px ${vh(3)}px ${vh(3)}px;
`;

const AuthContainer = styled.View`
  margin-bottom: ${vh(5)}px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 48px;
`;

const SignInContainer = styled.TouchableOpacity`
  margin: 0 ${vh(3)}px;
  height: ${vh(5)}px;
  align-items: center;
  justify-content: center;
  background-color: #abd3c6;
  border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#fff",
  size: "small",
}))``;

const SignUp = styled.TouchableOpacity`
  margin-top: ${vh(2)}px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: ${vh(-5)}px;
  z-index: -100;
`;

const RightCircle = styled.View`
  background-color: #ece4dc;
  position: absolute;
  width: ${vw(100)}px;
  height: ${vw(100)}px;
  border-radius: 200px;
  right: ${vw(-20)}px;
  top: ${vh(-25)}px;
`;

const LeftCircle = styled.View`
  background-color: #abd3c6;
  position: absolute;
  width: ${vw(50)}px;
  height: ${vw(50)}px;
  border-radius: 100px;
  left: ${vw(-10)}px;
  top: ${vh(-5)}px;
`;

const StatusBar = styled.StatusBar``;
