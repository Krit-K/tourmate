import React from "react";
import styled from "styled-components";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";

import Text from "../components/Text";

export default SignInScreen = () => {
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
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Password</AuthTitle>
          <AuthField
            autocapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            autoFocus={true}
            secureTextEntry={true}
          />
        </AuthContainer>
      </Auth>

      <SignInContainer>
        <Text bold center>
          Sign In
        </Text>
      </SignInContainer>

      <SignUp>
        <Text black center>
          New to tourmate?{" "}
          <Text bold color="#8022d9">
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
  background-color: #8022d9;
  border-radius: 6px;
`;

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
