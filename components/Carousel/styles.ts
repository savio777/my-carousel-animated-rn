import { styled } from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  max-height: 250px;
`;

export const WrapperIndicator = styled.View`
  position: absolute;
  bottom: 34px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Image = styled.Image<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 200px;
  border-radius: 10px;
`;

export const Dot = styled.View<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#000" : "#ccc")};
  width: 10px;
  height: 10px;
  border-radius: 20px;
  border: 0.2px solid #fff;
  elevation: 1;
`;
