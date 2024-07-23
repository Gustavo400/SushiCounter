import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./PlatesScreen.styles";
import { PlatesScreenProps } from "../../navigation/nav-types";
import Colors from "../design";

export default function PlatesScreen({ route, navigation }: PlatesScreenProps) {
  const playerCount = route.params.numberOfPlayers;
  const colorsArr = Object.values(Colors);
  const data = Array.from({ length: playerCount }, (_, index) => ({
    key: `Player ${index + 1}`,
  }));

  return (
    <FlatList
      style={styles.container}
      numColumns={playerCount > 4 ? 2 : 1}
      data={data}
      scrollEnabled={false}
      contentContainerStyle={{ display: "flex", flex: 1 }}
      renderItem={({ index, item }) => (
        <View
          style={[
            styles.plateBox,
            { backgroundColor: colorsArr[index], flex: 1 },
          ]}
        >
          <TouchableOpacity style={styles.plateTouchable}>
            <View style={styles.textBox}>
              <Text style={styles.displayText}>{item.key}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      CellRendererComponent={({ children }) => (
        <View style={{ flex: 1, display: "flex" }} children={children} />
      )}
    />
  );
}
