import React, { useState } from "react";
import {
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import styled from "styled-components";
import {
  Ionicons,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { ButtonGroup } from "react-native-elements";
import BottomSheet from "reanimated-bottom-sheet";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { widthPercentageToDP as vw } from "react-native-responsive-screen";

import Text from "../Text";
import tourGuides from "../../tourGuideData";

const tourGuideItem = (tourGuide, navigation) => {
  return (
    <TourGuide
      onPress={() =>
        navigation.navigate("TourGuideScreen", { tourGuide: tourGuide })
      }
    >
      <Profile>
        <GuideImage source={tourGuide.photo} />
        <FlagImage source={tourGuide.nationality} />
        <RatingContainer>
          <FontAwesome name="star" size={18} color="#f1c232" />
          <Rating>
            <Text>{tourGuide.rating}</Text>
          </Rating>
        </RatingContainer>
      </Profile>
      <ProfileInfo>
        <InfoHeader>
          <Text black large>
            {tourGuide.name}
          </Text>
          <Ionicons name="ios-heart-empty" size={22} />
        </InfoHeader>
        <Text black>
          <Feather name="clock" size={18} color="#000" />{" "}
          <Text medium orange>
            {tourGuide.category.price}
          </Text>{" "}
          THB per hr
        </Text>
        <Text black>
          <MaterialIcons name="record-voice-over" size={18} color="#000" />{" "}
          {tourGuide.languages.toString().replace(/,/g, ", ")}
        </Text>
      </ProfileInfo>
    </TourGuide>
  );
};

export default TourScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");
  const updateSearchInput = (input) => setSearchInput(input);

  const [placeHolderText, setPlaceHolderText] = useState("Search Tour Guide");
  const updatePlaceHolderText = (input) => setPlaceHolderText(input);

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(2);
  const updateButtonIndex = (index) => setSelectedButtonIndex(index);

  const [age, setAge] = React.useState([18, 40]);
  const changeAge = (values) => setAge(values);

  const [price, setPrice] = React.useState([100, 350]);
  const changePrice = (values) => setPrice(values);

  const convertIndexToGender = (index) => {
    switch (index) {
      case 0:
        return "M";
      case 1:
        return "F";
      case 2:
        return "";
    }
  };
  const gender = convertIndexToGender(selectedButtonIndex);

  // Arguments: [gender, min age, max age, min price, max price]
  const [filters, setFilters] = React.useState(["", 18, 50, 100, 350]);
  const changeFilters = (values) => setFilters(values);

  let bottomSheet = React.createRef();

  const clearFilters = () => {
    updateButtonIndex(2);
    changeAge([18, 50]);
    changePrice([100, 350]);
  };

  const renderHeader = () => (
    <PanelHeader>
      <PanelHandle />
    </PanelHeader>
  );

  const renderInner = () => {
    return (
      <BlurView intensity={100}>
        <Panel>
          <FilterHeader>
            <Text black medium>
              Filters
            </Text>
            <ClearButton onPress={() => clearFilters()}>
              <Text grey small>
                Clear
              </Text>
            </ClearButton>
          </FilterHeader>
          <GenderContainer>
            <Text black>Gender</Text>
          </GenderContainer>
          <ButtonGroup
            onPress={(index) => updateButtonIndex(index)}
            selectedIndex={selectedButtonIndex}
            buttons={["Male", "Female", "Both"]}
            containerBorderRadius={8}
            innerBorderStyle={styles.buttonInnerBorder}
            containerStyle={styles.buttonGroupContainer}
            selectedButtonStyle={styles.selectedButton}
            textStyle={{ fontFamily: "Comfortaa_400Regular" }}
            buttonStyle={{ backgroundColor: "#ccccccff" }}
          />
          <SliderContainer>
            <AgeContainer>
              <Text black>Age</Text>
              <Text black>{`${age[0]} - ${age[1]}`}</Text>
            </AgeContainer>
            <MultiSlider
              isMarkersSeparated={true}
              values={[age[0], age[1]]}
              sliderLength={vw(75)}
              onValuesChange={changeAge}
              min={18}
              max={50}
              step={1}
              customMarker={{ backgroundColor: "#f1b986" }}
              selectedStyle={styles.selectedBar}
              unselectedStyle={styles.unselectedBar}
              markerStyle={styles.marker}
              pressedMarkerStyle={styles.pressedMarker}
              snapped={false}
            />
            <PriceContainer>
              <Text black>Price Range</Text>
              <Text black>{`${price[0]} - ${price[1]} THB`}</Text>
            </PriceContainer>
            <MultiSlider
              isMarkersSeparated={true}
              values={[price[0], price[1]]}
              sliderLength={vw(75)}
              onValuesChange={changePrice}
              min={0}
              max={500}
              step={1}
              customMarker={{ backgroundColor: "#f1b986" }}
              selectedStyle={styles.selectedBar}
              unselectedStyle={styles.unselectedBar}
              markerStyle={styles.marker}
              pressedMarkerStyle={styles.pressedMarker}
              snapped
            />
          </SliderContainer>
          <ApplyFilterButton
            onPress={() => {
              bottomSheet.current.snapTo(1);
              changeFilters([gender, age[0], age[1], price[0], price[1]]);
            }}
          >
            <Text black>Apply Filter</Text>
          </ApplyFilterButton>
        </Panel>
      </BlurView>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <TourGuidesContainer>
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
              onEndEditing={() => updatePlaceHolderText("Search Tour Guide")}
            />
            <Ionicons name="ios-search" size={24} color="#5a5757" />
          </SearchBar>
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons name="md-arrow-back" size={32} color="#ffffff" />
          </BackButton>
        </Banner>

        <FilterButton onPress={() => bottomSheet.current.snapTo(0)}>
          <Text small>Filter{"  "}</Text>
          <FontAwesome name="filter" size={16} color="white" />
        </FilterButton>
        <TourGuides
          data={tourGuides.filter(
            (guide) =>
              guide.name.toLowerCase().includes(searchInput.toLowerCase()) &&
              guide.category.gender.includes(filters[0]) &&
              guide.category.age <= filters[2] &&
              guide.category.age >= filters[1] &&
              guide.category.price <= filters[4] &&
              guide.category.price >= filters[3]
          )}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => tourGuideItem(item, navigation)}
        ></TourGuides>
        <BottomSheet
          ref={bottomSheet}
          snapPoints={[410, 0]}
          renderHeader={renderHeader}
          renderContent={renderInner}
          initialSnap={1}
          enabledContentGestureInteraction={false}
          enabledContentTapInteraction={false}
          enabledInnerScrolling={false}
        />
      </TourGuidesContainer>
    </TouchableWithoutFeedback>
  );
};

const SafeAreaView = styled.SafeAreaView`
  background-color: #f1b986ff;
`;

const TourGuidesContainer = styled.View`
  background-color: #f3f3f3ff;
  flex: 1;
`;

const Banner = styled.View`
  background-color: #f1b986ff;
`;

const SearchBar = styled.View`
  margin: 34px 38px 18px 58px;
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

const TourGuides = styled.FlatList`
  margin: 0px 8px 4px 8px;
  flex: 1;
  padding: 12px;
`;

const TourGuide = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 16px;
`;

const GuideImage = styled.Image`
  height: 85px;
  width: 85px;
  border-radius: 100px;
`;

const Profile = styled.View`
  align-items: center;
`;

const ProfileInfo = styled.View`
  flex: 1;
  padding: 8px;
  margin-left: 24px;
`;

const InfoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const FlagImage = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 100px;
  align-self: flex-end;
  margin-top: -24px;
`;

const RatingContainer = styled.View`
  padding-top: 4px;
  flex-direction: row;
  align-items: center;
`;
const Rating = styled.View`
  background-color: #f1c232;
  align-self: flex-start;
  margin-left: 2px;
  border-radius: 4px;
  padding: 0px 4px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 28px;
  z-index: 10;
  padding: 10px 20px;
`;

const FilterButton = styled.TouchableOpacity`
  align-self: flex-end;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: #b0c9e4;
  padding: 4px 16px;
  margin: 12px 24px 0px 0px;
`;

const Panel = styled.View`
  height: 600px;
  padding: 10px 20px;
  background-color: #d9d9d99a;
`;

const PanelHeader = styled.View`
  background-color: #e9e9e9;
  padding-top: 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

const PanelHandle = styled.View`
  width: 15%;
  height: 8px;
  border-radius: 4px;
  background-color: #00000040;
  margin-bottom: 10px;
  align-self: center;
`;

const ApplyFilterButton = styled.TouchableOpacity`
  margin-top: 20px;
  width: 85%;
  background-color: #f1b986ff;
  border-radius: 8px;
  padding: 7px 16px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const FilterHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
`;

const ClearButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 2%;
  right: 10%;
`;

const SliderContainer = styled.View`
  align-self: center;
`;

const GenderContainer = styled.View`
  flex-direction: row;
  align-self: center;
  width: 85%;
  justify-content: space-between;
`;

const AgeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  buttonInnerBorder: {
    color: "#ff00",
  },
  buttonGroupContainer: {
    height: 34,
    borderRadius: 8,
    width: "85%",
    backgroundColor: "#cccccc",
    borderColor: "#ff00",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: "#b0c9e4",
    borderRadius: 8,
  },
  selectedBar: {
    backgroundColor: "#b0c9e4",
    height: 5,
  },
  unselectedBar: {
    backgroundColor: "silver",
    height: 5,
  },
  pressedMarker: {
    backgroundColor: "#f1b986",
    height: 30,
    width: 30,
  },
  marker: { backgroundColor: "#f1b986", height: 20, width: 20 },
});
