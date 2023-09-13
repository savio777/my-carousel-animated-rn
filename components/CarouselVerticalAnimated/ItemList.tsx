import React from "react";

import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import {
  ImageSourcePropType,
  ViewToken,
  useWindowDimensions,
} from "react-native";

import { Description, Image, Title } from "./styles";
import { textMock } from "../../mock";

interface ItemListProps {
  item: { id: string; image: ImageSourcePropType };
  viewableItems: Animated.SharedValue<ViewToken[]>;
}

const ItemList: React.FC<ItemListProps> = React.memo(
  ({ item, viewableItems }) => {
    const { width } = useWindowDimensions();

    const WIDTH_IMAGE = width * 0.885;

    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((item) => item.isViewable)
          .find((viewableItem) => viewableItem.item.id === item.id)
      );

      return {
        marginBottom: 8,
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    }, []);

    return (
      <Animated.View style={rStyle}>
        <Image width={WIDTH_IMAGE} source={item.image}>
          <Title>{textMock.title}</Title>
          <Description>{textMock.subtitle}</Description>
        </Image>
      </Animated.View>
    );
  }
);

export default ItemList;
