import { Dimensions } from "react-native";

export const vw = (percentage) =>
  (Dimensions.get("window").width / 100) * percentage;

export const vh = (percentage) =>
  (Dimensions.get("window").height / 100) * percentage;
