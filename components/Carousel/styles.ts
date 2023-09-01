import { styled } from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
`;

export const WrapperIndicator = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: -15px;
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
  elevation: 1;
`;
