import { ImageBackgroundProps, StyleSheet } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px 8px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 17px;
  font-weight: bold;
  color: white;
  padding: 12px;

  text-shadow: -1px 1px 10px rgba(0, 0, 0, 1);
`;

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  color: white;
  font-weight: bold;
  padding: 12px;

  text-shadow: -1px 1px 10px rgba(0, 0, 0, 1);
`;

export const Image = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 10 },
} as ImageBackgroundProps)<{
  width: number;
}>`
  width: 100%;
  height: 120px;
`;

export const stylesHeader = StyleSheet.create({
  content: {
    width: "100%",
    borderRadius: 10,
    marginHorizontal: 24,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    alignItems: "center",
    left: 0,
    right: 0,
    marginBottom: 6,
    borderRadius: 10,
    zIndex: 111,
    marginHorizontal: 24,
  },
  title: {
    color: "#ffff",
    fontWeight: "bold",
    height: 24,
    marginTop: 16,
  },
});
