import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
