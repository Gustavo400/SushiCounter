import { StyleSheet } from "react-native";
import Colors from "../design";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D5D5D",
  },
  textBox: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontSize: 24,
  },
  plateBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  plateTouchable: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  plate: {
    height: 100,
    width: 100,
    margin: 10,
  },
});

export default styles;
