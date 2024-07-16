import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function BusAppbar() {
  return (
    <Appbar.Header style={style.header}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content titleStyle={style.text} title="Bus Logger" />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}

const style = StyleSheet.create({
  header: {
    width: "auto",
    backgroundColor: "#354866",
  },
  text: {
    color: "white",
  },
});
