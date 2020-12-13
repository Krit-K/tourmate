import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Platform, StatusBar } from "react-native";

export default reviewCard = (/*name, rating,*/ { source }) => (
  <ReviewCard>
    <Image source={source} />
  </ReviewCard>
);

const ReviewCard = styled.View``;

const Image = styled.Image`
  width: 40px;
  height: 40px;
`;
