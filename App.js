import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./App/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 20,
    paddingTop: 20,
  },
});
