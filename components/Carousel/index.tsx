import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  ImageSourcePropType,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { Container, Dot, Image, WrapperIndicator } from "./styles";

interface ICarouselProps {
  data: { id: string; image: ImageSourcePropType }[];
}

const Carousel: React.FC<ICarouselProps> = ({ data }) => {
  const flatlistRef = useRef<ScrollView>();

  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === data.length - 1) {
        flatlistRef?.current?.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef?.current?.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (_, index: number) => ({
    length: width,
    offset: width * index,
    index: index,
  });

  const handleScroll = (event) => {
    // Get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    console.log({ scrollPosition });
    // Get the index of current active item

    const index = scrollPosition / width;

    console.log({ index });
    // Update the index

    setActiveIndex(index);
  };

  return (
    <Container>
      <FlatList
        ref={flatlistRef}
        keyExtractor={(item) => item.id}
        data={data}
        getItemLayout={getItemLayout}
        onScroll={handleScroll}
        renderItem={({ item }) => <Image width={width} source={item.image} />}
        horizontal
        pagingEnabled
        // todo: fazer flatlist não pegar todo o height
      />

      <WrapperIndicator>
        {data.map((_, index) => (
          <Dot key={String(index)} active={activeIndex === index} />
        ))}
      </WrapperIndicator>
    </Container>
  );
};

export default Carousel;
