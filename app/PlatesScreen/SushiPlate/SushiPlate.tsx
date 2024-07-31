import { View } from "react-native";
import styles from "./SushiPlate.styles";
import Plate from "../../../assets/plate";

export default function SushiPlate() {
  return (
    <View style={styles.plate}>
      <Plate />
    </View>
  );
}
