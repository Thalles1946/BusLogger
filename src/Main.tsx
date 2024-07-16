import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import BusAppbar from "./Appbar";

export default function Main() {
  return (
    <View style={styles.container}>
      <BusAppbar />
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    color: "white",
  },
});
