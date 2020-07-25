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
      <StatusBar />
      <Banner>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={32} color="#f1b986" />
        </BackButton>
        <Text title bold orange>
          Calendar
        </Text>
      </Banner>
      <InformationContainer>
        <Calendar
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Initially visible month. Default = Date()
          // current={"2020-06-19"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2019-01-01"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2021-12-31"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            // console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            // console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
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

const PlaceContainer = styled.View`
  background-color: #f3f3f3ff;
  flex: 1;
`;

const Banner = styled.View`
  flex-direction: row;
  align-items: center;
  height: 13%;
  padding-left: 50px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: 10px;
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
  background-color: #f1b986ff;
  border-radius: 100px;
  align-self: center;
`;
