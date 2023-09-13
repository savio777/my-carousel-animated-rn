import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ImageSourcePropType } from "react-native";

import { Image, Description, Title } from "./styles";
import { textMock } from "../../mock";

interface ItemListProps {
  width: number;
  image: ImageSourcePropType;
  index: number;
  activeIndex: Animated.SharedValue<number>;
}

const ItemList: React.FC<ItemListProps> = React.memo(
  ({ index, activeIndex, width, image }) => {

    const rStyle = useAnimatedStyle(() => {
      const isVisible = activeIndex.value === index;

      return {
        height: withTiming(isVisible ? 160 : 130),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.9),
          },
        ],
      };
    }, []);

    return (
      <Animated.View style={[{ width, marginRight: 8 }, rStyle]}>
        <Image width={width} source={image}>
          <Title>{textMock.title}</Title>
          <Description>{textMock.subtitle}</Description>
        </Image>
      </Animated.View>
    );
  }
);

export default ItemList;
