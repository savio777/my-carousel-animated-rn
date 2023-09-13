import React from "react";
import {
  FlatList,
  ImageSourcePropType,
  useWindowDimensions,
} from "react-native";

import { Container } from "./styles";
import { useSharedValue } from "react-native-reanimated";
import ItemList from "./ItemList";

interface ICarouselProps {
  data: { id: string; image: ImageSourcePropType }[];
}

const CarouselAnimated: React.FC<ICarouselProps> = ({ data }) => {
  const { width } = useWindowDimensions();
  const activeIndex = useSharedValue(0);

  const WIDTH_IMAGE = width * 0.6;

  const getItemLayout = (_, index: number) => ({
    length: WIDTH_IMAGE,
    offset: WIDTH_IMAGE * index,
    index: index,
  });

  const handleScroll = (event) => {
    // Get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // Get the index of current active item

    const index = scrollPosition / WIDTH_IMAGE;

    // Update the index
    activeIndex.value = Math.round(index);
  };

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item, index }) => (
          <ItemList
            index={index}
            activeIndex={activeIndex}
            width={WIDTH_IMAGE}
            image={item.image}
          />
        )}
        getItemLayout={getItemLayout}
        onScroll={handleScroll}
        horizontal
      />
    </Container>
  );
};

export default CarouselAnimated;
