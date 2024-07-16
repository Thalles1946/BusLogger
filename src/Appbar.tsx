import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function BusAppbar() {
  return (
    <Appbar.Header style={style.header}>
      <Appbar.Action color="black" icon="history" onPress={() => {}} />
      <Appbar.Action color="black" icon="bus" onPress={() => {}} />
      <Appbar.Action color="black" icon="ray-start-arrow" onPress={() => {}} />
    </Appbar.Header>
  );
}

const style = StyleSheet.create({
  header: {
    width: "auto",
    backgroundColor: "#354866",
    display: "flex",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
  },
});
