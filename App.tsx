import { PaperProvider } from "react-native-paper";
import Main from "./src/Main";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={style.container}>
      <Main />
    </SafeAreaProvider>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7298d6",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
