import React, { useState } from "react";
import styled from "styled-components";
import { StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";

import noMessages from "../../assets/noMessages.png";
import Text from "../Text";

export default MessageScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");
  const [placeHolderText, setPlaceHolderText] = useState("Search Chat");
  const updateSearchInput = (input) => setSearchInput(input);
  const updatePlaceHolderText = (input) => setPlaceHolderText(input);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <PlaceContainer>
        <SafeAreaView />
        <StatusBar />
        <Banner>
          <SearchBar>
            <SearchInput
              placeholder={placeHolderText}
              placeholderTextColor="#5a5757"
              onFocus={() => updatePlaceHolderText("")}
              onChangeText={updateSearchInput}
              value={searchInput}
              onEndEditing={() => updatePlaceHolderText("Search Chat")}
            />
            <Ionicons name="ios-search" size={24} color="#5a5757" />
          </SearchBar>
        </Banner>
        <MessageImage source={noMessages} />
        <Button onPress={() => navigation.navigate("TourScreen")}>
          <Text large> Find a Tour Guide </Text>
        </Button>
      </PlaceContainer>
    </TouchableWithoutFeedback>
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
`;

const SearchBar = styled.View`
  margin: 30px 38px 18px 48px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 6px 10px 6px 18px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchInput = styled.TextInput`
  font-size: 18px;
  flex: 1;
`;

const MessageImage = styled.Image`
  margin-top: 100px;
  width: ${vh(30)}px;
  height: ${vh(30)}px;
  align-self: center;
`;

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  padding: ${vh(1)}px ${vw(4)}px;
  background-color: #f1b986ff;
  border-radius: 100px;
  align-self: center;
`;
