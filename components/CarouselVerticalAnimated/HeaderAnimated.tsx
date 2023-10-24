import { Animated, Image, Text, View } from "react-native";
import { stylesHeader } from "./styles";

const Header_Max_Height = 200;
const Header_Min_Height = 72;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const HeaderAnimated: React.FC = ({ value }: any) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ["#181D31", "#678983"],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        stylesHeader.header,
        {
          height: animatedHeaderHeight,
          backgroundColor: animatedHeaderColor,
          marginBottom: 6,
          borderRadius: 10,
        },
      ]}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1697618365363-1f4638b9c7d5?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={stylesHeader.content}
      />

      <Text style={stylesHeader.title}>Header Content</Text>
    </Animated.View>
  );
};

export default HeaderAnimated;
