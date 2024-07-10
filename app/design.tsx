import { StyleSheet } from "react-native";

const COLORS = {
  sageGreen: "#C9CBA3",
  peachYellow: "#FFE1AB",
  BittersweetOrange: "#E26D5C",
  frenchBlue: "#1C77C3",
  pictonBlue: "#39A9DB",
  coolGray: "#7E7F9A",
  wisteriaPurple: "#BDADEA",
  lilacPurple: "#BEA2C2",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    color: COLORS.sageGreen,
    fontWeight: "700",
    fontSize: 24,
  },
  // textBox: {
  //   borderWidth: 1,
  //   borderColor: COLORS.coolGray,
  //   color: "#cccccc",
  //   paddingHorizontal: 5,
  //   height: 30,
  //   width: "90%",
  // },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.BittersweetOrange,
  },
});

export default styles;
