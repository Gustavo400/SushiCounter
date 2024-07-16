import { StyleSheet } from "react-native";
import Colors from "../design";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bittersweetOrange,
    alignItems: "center",
    justifyContent: "center",
  },
  displayText: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontSize: 24,
  },
});

export default styles;
