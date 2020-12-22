import React from "react";
import styled from "styled-components/native";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import Text from "../components/Text";

export default reviewCard = ({ users, place }) =>
  users.map((user) => (
    <ReviewCard key={user.id}>
      <HeaderContainer>
        <Image source={user.photo} />
        <RatingContainer>
          <Text black>{user.name}</Text>
          <FontAwesome name="star" size={18} color="#f1c232" />
          <Rating>
            <Text>{user.reviews[place].rating}</Text>
          </Rating>
          <Text black>{user.reviews[place].date}</Text>
        </RatingContainer>
      </HeaderContainer>
      <Text black>{user.reviews[place].review}</Text>
    </ReviewCard>
  ));

const ReviewCard = styled.View`
  padding: ${vh(2)}px 0px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  padding: ${vw(1)}px;
`;

const Image = styled.Image`
  width: ${vw(15)}px;
  height: ${vw(15)}px;
  border-radius: 100px;
`;

const RatingContainer = styled.View`
  justify-content: space-evenly;
  padding-top: 4px;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

const Rating = styled.View`
  background-color: #f1c232;
  margin-left: 2px;
  border-radius: 4px;
  padding: 0px 4px;
`;
