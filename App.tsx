import React from "react";
import { StatusBar } from "expo-status-bar";
import { styled } from "styled-components/native";

import Carousel from "./components/Carousel";
import CarouselAnimated from "./components/CarouselAnimated";
import { mock } from "./mock";

export const Container = styled.View`
  flex: 1;
  background-color: gray;
`;

export default function App() {
  return (
    <Container>
      <Carousel data={mock} />

      <CarouselAnimated data={mock} />

      <StatusBar style="light" />
    </Container>
  );
}
