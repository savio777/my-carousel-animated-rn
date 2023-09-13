import React from "react";
import { useSharedValue } from "react-native-reanimated";
import { FlatList, ImageSourcePropType, ViewToken } from "react-native";

import { Container } from "./styles";
import ItemList from "./ItemList";

interface ICarouselProps {
  data: { id: string; image: ImageSourcePropType }[];
}

const CarouselVerticalAnimated: React.FC<ICarouselProps> = ({ data }) => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        onViewableItemsChanged={({ viewableItems: value }) => {
          viewableItems.value = value;
        }}
        renderItem={({ item }) => (
          <ItemList item={item} viewableItems={viewableItems} />
        )}
      />
    </Container>
  );
};

export default CarouselVerticalAnimated;
