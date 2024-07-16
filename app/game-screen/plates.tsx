import { Image, Text, View } from "react-native";
import styles from "./plates-design";
import { PlatesScreenProps } from "../nav-types";

export default function PlatesScreen({ route, navigation }: PlatesScreenProps) {
  const playerCount = route.params.numberOfPlayers;

  return (
    <View style={styles.container}>
      <Text>This is empty for now, {playerCount} players</Text>
    </View>
  );
}
