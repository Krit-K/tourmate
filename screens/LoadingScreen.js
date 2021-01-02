import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

import { UserContext } from "../context/UserContext";

import Text from "../components/Text";

export default LoadingScreen = () => {
  const [_, setUser] = useContext(UserContext);
  useEffect(() => {
    setTimeout(async () => {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }, 1500);
  }, []);

  return (
    <Container>
      <Text black title>
        Loading...
      </Text>
      <LottieView
        source={require("../assets/animations/loadingPaperPlane.json")}
        autoPlay
        loop
        style={{ width: "100%" }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* background-color: #222222; */
`;
