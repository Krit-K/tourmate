import React, { useState } from "react";
import styled from "styled-components";
import { StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";
import { SearchBar } from "react-native-elements";
import Text from "../components/Text";
import SafeAreaView from "../components/SafeAreaView";

export default MessageScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");
  const updateSearchInput = (input) => setSearchInput(input);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <PlaceContainer>
        <SafeAreaView green />
        <StatusBar translucent backgroundColor="transparent" />
        <Banner>
          <SearchBar
            placeholder={"Search Chat"}
            onChangeText={updateSearchInput}
            searchIcon={{ size: 25 }}
            lightTheme
            value={searchInput}
            inputContainerStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              height: 38,
              borderRadius: 10,
            }}
            containerStyle={{
              paddingHorizontal: vw(8),
              paddingVertical: vh(2),
              backgroundColor: "#abd3c6",
              borderBottomColor: "transparent",
              borderTopColor: "transparent",
            }}
          />
        </Banner>
        <MessageIconContainer>
          <Entypo name="chat" size={vw(33)} color="#999999" />
        </MessageIconContainer>
        <Button onPress={() => navigation.navigate("TourScreen")}>
          <Text large> Find a Tour Guide </Text>
        </Button>
      </PlaceContainer>
    </TouchableWithoutFeedback>
  );
};

const PlaceContainer = styled.View`
  background-color: #f3f3f3ff;
  flex: 1;
`;

const Banner = styled.View`
  background-color: #abd3c6;
`;

const MessageIconContainer = styled.View`
  align-self: center;
  margin-top: ${vh(15)}px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  padding: ${vh(0.8)}px ${vw(4)}px;
  background-color: #76a5af;
  border-radius: 100px;
  align-self: center;
`;
