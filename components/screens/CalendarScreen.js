import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

import Text from "../Text";

export default CalendarScreen = ({ navigation }) => {
  const currentDay = new Date().getDate().toString().padStart(2, "0");
  const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const currentYear = new Date().getFullYear();
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

  return (
    <PlaceContainer>
      <SafeAreaView />
      <StatusBar barStyle="default" />
      <Banner>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={32} color="#76a5af" />
        </BackButton>
        <Text title bold green style={{ paddingLeft: 10 }}>
          Calendar
        </Text>
      </Banner>
      <InformationContainer>
        <Calendar
          horizontal={true}
          pagingEnabled={true}
          minDate={"2019-01-01"}
          maxDate={"2021-12-31"}
          onDayPress={(day) => {}}
          monthFormat={"yyyy MM"}
          onMonthChange={(month) => {}}
          hideExtraDays={false}
          disableMonthChange={true}
          firstDay={1}
          markedDates={{
            [currentDate]: {
              selected: true,
              selectedColor: "#b0c9e4",
            },
          }}
          style={{ borderTopLeftRadius: 22, borderTopRightRadius: 22 }}
        />
        <UpcomingScheduleContainer>
          <Text black medium>
            Upcoming Schedule
          </Text>
          <MaterialIcons name="location-off" size={45} color="black" />
          <Button onPress={() => navigation.navigate("Explore")}>
            <Text large>Explore more places</Text>
          </Button>
        </UpcomingScheduleContainer>
      </InformationContainer>
    </PlaceContainer>
  );
};

const SafeAreaView = styled.SafeAreaView`
  background-color: #f3f3f3;
`;

const PlaceContainer = styled.View`
  background-color: #f3f3f3;
  flex: 1;
`;

const Banner = styled.View`
  flex-direction: row;
  align-items: center;
  height: 10%;
  padding-left: 50px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 15%;
  z-index: 10;
  padding: 10px 20px;
`;

const InformationContainer = styled.View`
  background-color: #ede3da;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 30px;
  flex: 1;
`;

const UpcomingScheduleContainer = styled.View`
  margin-top: 3px;
  padding: 10px;
  align-items: center;
  background-color: #fff;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  justify-content: space-evenly;
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  padding: 2px 18px 2px 18px;
  background-color: #abd3c6;
  border-radius: 100px;
  align-self: center;
`;
