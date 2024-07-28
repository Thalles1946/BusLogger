import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function BusAppbar({ setPage }: any) {
  return (
    <Appbar.Header style={style.header}>
      <Appbar.Action
        color="black"
        icon="history"
        size={40}
        onPress={() => {
          console.log("hist");

          setPage(1);
        }}
      />
      <Appbar.Action
        color="black"
        icon="bus"
        size={40}
        onPress={() => {
          setPage(2);
        }}
      />
      <Appbar.Action
        color="black"
        icon="ray-start-arrow"
        size={40}
        onPress={() => {
          setPage(3);
        }}
      />
    </Appbar.Header>
  );
}

const style = StyleSheet.create({
  header: {
    paddingBottom: 28,
    height: 40,
    backgroundColor: "#354866",
    display: "flex",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
  },
});
