import React from "react";
import styled from "styled-components/native";

export default TextStyle = ({ ...props }) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text`
  font-family: "Comfortaa_400Regular";
  color: ${(props) => props.color ?? "#ffffff"};

  ${({ white, black, orange, grey }) => {
    switch (true) {
      case grey:
        return `color: #5a5757`;
      case white:
        return `color: white`;
      case black:
        return `color: black`;
      case orange:
        return `color: #ff9900`;
    }
  }}

  ${({ title, large, medium, small, mini }) => {
    switch (true) {
      case title:
        return `font-size: 26px`;
      case large:
        return `font-size: 20px`;
      case medium:
        return `font-size: 18px`;
      case small:
        return `font-size: 16px`;
      case mini:
        return `font-size: 11px`;
      default:
        return `font-size: 14px`;
    }
  }};

  ${({ light, bold, heavy }) => {
    switch (true) {
      case light:
        return `font-weight: 200`;
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
      default:
        return `font-weight: 400`;
    }
  }}

  ${({ center, right }) => {
    switch (true) {
      case center:
        return `text-align: center`;
      case right:
        return `text-align: right`;
      default:
        return `text-align: left`;
    }
  }}
`;
