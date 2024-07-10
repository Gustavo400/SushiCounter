import { StyleSheet } from "react-native";
import COLORS from "../style-variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303030",
    alignItems: "center",
    justifyContent: "center",
  },
  tamagoImage: {
    width: 166,
    height: 100,
  },
  playerCountContainer: {
    flexDirection: "row",
  },
  playerCount: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: COLORS.coolGray,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
  },
  playerCountText: {
    textAlign: "center",
    color: COLORS.peachYellow,
    fontWeight: "700",
    fontSize: 24,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.BittersweetOrange,
  },
});

export default styles;
