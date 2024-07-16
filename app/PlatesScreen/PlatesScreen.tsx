import { Image, Text, View } from "react-native";
import styles from "./PlatesScreen.styles";
import { PlatesScreenProps } from "../../navigation/nav-types";

export default function PlatesScreen({ route, navigation }: PlatesScreenProps) {
  const playerCount = route.params.numberOfPlayers;

  return (
    <View style={styles.container}>
      <Text style={styles.displayText}>
        This is empty for now, {playerCount} players
      </Text>
    </View>
  );
}
