import React from "react";
import { StatusBar } from "expo-status-bar";
import { styled } from "styled-components/native";
import Carousel from "./components/Carousel";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Carousel
        data={[
          {
            id: "cad20a6d-e486-491b-8249-f8a67eb2894e",
            image: {
              uri: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
          },
          {
            id: "5a67b924-9cee-4918-af8a-335803f4a65b",
            image: {
              uri: "https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
          },
          {
            id: "45c3640d-1c77-4173-be04-5efd594744bc",
            image: {
              uri: "https://plus.unsplash.com/premium_photo-1690442876996-98fcedf7f140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
          },
          {
            id: "d4d8ebbd-d82f-4ca2-ad53-b2193cd0dad5",
            image: {
              uri: "https://plus.unsplash.com/premium_photo-1674500508085-91d82f78fdb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
            },
          },
          {
            id: "3586a9f2-e17a-4b06-a6ed-f325a8517506",
            image: {
              uri: "https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
          },
          {
            id: "c36e5bc3-b3fd-4341-ab5b-f0ccc980bb2c",
            image: {
              uri: "https://images.unsplash.com/photo-1682685797736-dabb341dc7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
          },
        ]}
      />
      <StatusBar style="auto" />
    </Container>
  );
}
