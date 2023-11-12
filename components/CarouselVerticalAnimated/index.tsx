import React, { useRef } from "react";
import { useSharedValue } from "react-native-reanimated";
import {
  Animated,
  FlatList,
  ImageSourcePropType,
  ViewToken,
} from "react-native";

import { Container } from "./styles";
import ItemList from "./ItemList";
import HeaderAnimated from "./HeaderAnimated";

interface ICarouselProps {
  data: { id: string; image: ImageSourcePropType }[];
}

const CarouselVerticalAnimated: React.FC<ICarouselProps> = ({ data }) => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <HeaderAnimated value={scrollOffsetY} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        contentContainerStyle={{ paddingTop: 200 }}
        onViewableItemsChanged={({ viewableItems: value }) => {
          viewableItems.value = value;
        }}
        renderItem={({ item }) => (
          <ItemList item={item} viewableItems={viewableItems} />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
    </Container>
  );
};

export default CarouselVerticalAnimated;
