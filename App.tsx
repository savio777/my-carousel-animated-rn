import React from "react";
import { StatusBar } from "expo-status-bar";
import { styled } from "styled-components/native";

import Carousel from "./components/Carousel";
import CarouselAnimated from "./components/CarouselAnimated";
import CarouselVerticalAnimated from "./components/CarouselVerticalAnimated";
import { mock } from "./mock";

export const Container = styled.View`
  flex: 1;
  background-color: #333333;
`;

export default function App() {
  return (
    <Container>
      <CarouselVerticalAnimated data={mock} />

      <Carousel data={mock} />

      <CarouselAnimated data={mock} />

      <StatusBar style="light" />
    </Container>
  );
}
