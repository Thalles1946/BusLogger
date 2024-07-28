import { PaperProvider, Text } from "react-native-paper";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BusAppbar from "./src/Appbar";
import { useState } from "react";
import History from "./src/History";
import Amount from "./src/Amount";
import Lines from "./src/Lines";

export default function App() {
  const [page, setPage] = useState(0);
  return (
    <SafeAreaProvider style={style.container}>
      <View>
        {page === 1 && <History />}
        {page === 2 && <Amount />}
        {page === 3 && <Lines />}
        <Text style={styles.text}>Hello World</Text>
      </View>
      <View style={styles.bottomBar}>
        <BusAppbar setPage={setPage} />
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
    paddingTop: 0,
  },
});
