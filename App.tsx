import { PaperProvider, Text } from "react-native-paper";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BusAppbar from "./src/Appbar";

export default function App() {
  return (
    <SafeAreaProvider style={style.container}>
      <View>
        <Text style={styles.text}>Hello World</Text>
      </View>
      <View style={styles.bottomBar}>
        <BusAppbar />
      </View>
    </SafeAreaProvider>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7298d6",
  },
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
  },
  text: {
    color: "white",
  },
  bottomBar: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
