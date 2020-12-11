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
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from "react-native-responsive-screen";
import { SearchBar } from "react-native-elements";
import { BlurView } from "expo-blur";
import { ButtonGroup } from "react-native-elements";
import BottomSheet from "reanimated-bottom-sheet";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import Text from "../Text";
import SafeAreaView from "../SafeAreaView";
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
          <Text medium green>
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
  let bottomSheet = React.createRef();

  const [searchInput, setSearchInput] = useState("");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(2);
  const [age, setAge] = React.useState([18, 40]);
  const [price, setPrice] = React.useState([100, 350]);

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
  const updateSearchInput = (input) => setSearchInput(input);
  const updateButtonIndex = (index) => setSelectedButtonIndex(index);
  const changeAge = (values) => setAge(values);
  const changePrice = (values) => setPrice(values);

  const clearFilters = () => {
    updateButtonIndex(2);
    changeAge([18, 40]);
    changePrice([100, 350]);
  };

  const [isFilterSheetOpen, setIsFilterSheetOpen] = React.useState(false);
  const toggleFilterSheetOpen = () => {
    if (isFilterSheetOpen) {
      setIsFilterSheetOpen(false);
      bottomSheet.current.snapTo(1);
    } else {
      setIsFilterSheetOpen(true);
      bottomSheet.current.snapTo(0);
    }
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
              customMarker={{ backgroundColor: "#abd3c6" }}
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
              customMarker={{ backgroundColor: "#abd3c6" }}
              selectedStyle={styles.selectedBar}
              unselectedStyle={styles.unselectedBar}
              markerStyle={styles.marker}
              pressedMarkerStyle={styles.pressedMarker}
              snapped
            />
          </SliderContainer>
        </Panel>
      </BlurView>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <TourGuidesContainer>
        <SafeAreaView green />
        <StatusBar translucent backgroundColor="transparent" />
        <Banner>
          <SearchBar
            placeholder={"Search Tour Guide"}
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
              paddingLeft: vw(15),
              paddingRight: vw(8),
              paddingVertical: vh(2),
              backgroundColor: "#abd3c6",
              borderBottomColor: "transparent",
              borderTopColor: "transparent",
            }}
          />
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons name="md-arrow-back" size={32} color="#ffffff" />
          </BackButton>
        </Banner>

        <FilterButton onPress={() => toggleFilterSheetOpen()}>
          <Text small>Filter{"  "}</Text>
          <FontAwesome name="filter" size={16} color="white" />
        </FilterButton>
        <TourGuides
          data={tourGuides.filter(
            (guide) =>
              guide.name.toLowerCase().includes(searchInput.toLowerCase()) &&
              guide.category.gender.includes(gender) &&
              guide.category.age <= age[1] &&
              guide.category.age >= age[0] &&
              guide.category.price <= price[1] &&
              guide.category.price >= price[0]
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

const TourGuidesContainer = styled.View`
  background-color: #f3f3f3ff;
  flex: 1;
`;

const Banner = styled.View`
  background-color: #abd3c6;
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
  top: ${vh(1.5)}px;
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
  background-color: #e9e9e9;
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
    backgroundColor: "#abd3c6",
    height: 30,
    width: 30,
  },
  marker: { backgroundColor: "#abd3c6", height: 20, width: 20 },
});
