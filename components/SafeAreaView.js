import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Platform, StatusBar } from "react-native";

export default SafeArea = ({ ...props }) => (
  <SafeAreaView {...props}>{props.children}</SafeAreaView>
);

const SafeAreaView = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  ${({ green, white }) => {
    switch (true) {
      case green:
        return `background-color : #abd3c6`;
      default:
        return `background-color : #f3f3f3`;
    }
  }}
`;
