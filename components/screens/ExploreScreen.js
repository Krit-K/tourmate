import React, { useState, useRef } from "react";
import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import styled from "styled-components";
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { SearchBar } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Text from "../Text";
import categoryList from "../../categories";
import places from "../../exploreData";

export default ExploreScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const placesRef = useRef();

  const updateSearchInput = (input) => setSearchInput(input);

  const changeCategory = (category) => {
    placesRef.current.scrollToOffset({ x: 0, y: 0 });
    setSelectedCategory(category);
  };

  const placeItem = (place) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("PlaceScreen", { place: place })}
      >
        <Place
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 10,
          }}
        >
          <PlaceCover source={place.cover} />
          <LinearGradient
            colors={["transparent", "#000"]}
            locations={[0, 0.6]}
            style={{
              width: "100%",
              marginTop: -50,
              alignSelf: "center",
              padding: 8,
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RatingContainer>
              <FontAwesome name="star" size={18} color="#f1c232" />
              <Rating>
                <Text>{place.rating}</Text>
              </Rating>
            </RatingContainer>
            <PlaceTitle>
              <Text medium bold>
                {place.title}
              </Text>
              <Text small>{place.teaser}</Text>
            </PlaceTitle>
          </LinearGradient>
        </Place>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <SafeAreaView />
        <StatusBar barStyle="light-content" />
        <Banner>
          <SearchBar
            placeholder={"Search Attraction Places"}
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
        <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryList.map((category, index) => {
            return (
              <Category
                key={index}
                selected={selectedCategory === category ? true : false}
                onPress={() => changeCategory(category)}
              >
                <CategoryName
                  selected={selectedCategory === category ? true : false}
                >
                  {category}
                </CategoryName>
              </Category>
            );
          })}
        </Categories>
        <Places
          data={places.filter((place) => {
            return (
              (place.category.includes(selectedCategory) ||
                selectedCategory === "All") &&
              place.title.toLowerCase().includes(searchInput.toLowerCase())
            );
          })}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => placeItem(item)}
          ref={placesRef}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

const SafeAreaView = styled.SafeAreaView`
  background-color: #abd3c6;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3ff;
`;

const Banner = styled.View`
  background-color: #abd3c6;
`;

const Categories = styled.ScrollView`
  margin-top: 8px;
  flex-grow: 0;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.selected ? "#76a5af" : "#f3f3f3ff")};
  border-color: #76a5af;
  border-width: 1px;
  border-radius: 20px;
`;

const CategoryName = styled(Text)`
  color: ${(props) => (props.selected ? "#fff" : "black")};
  font-weight: ${(props) => (props.selected ? "300" : "300")};
`;

const Places = styled.FlatList`
  margin-top: 12px;
  flex: 1;
`;

const Place = styled.View`
  margin-bottom: 24px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  align-self: center;
  width: 90%;
`;

const PlaceCover = styled.Image`
  height: 250px;
  width: 100%;
  align-self: center;
  border-radius: 12px;
`;

const PlaceTitle = styled.View`
  margin: 0px 48px 0px 12px;
`;

const RatingContainer = styled.View`
  padding-top: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 14%;
`;
const Rating = styled.View`
  background-color: #f1c232;
  align-self: flex-start;
  margin-left: 2px;
  border-radius: 4px;
  padding: 0px 4px;
`;
