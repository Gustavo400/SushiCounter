import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./PlatesScreen.styles";
import { PlatesScreenProps } from "../../navigation/nav-types";
import Colors from "../design";
import SushiPlate from "../../assets/sushi-plate";
import { useState } from "react";

type PlayerData = {
  id: number;
  sushiCount: number;
};

export default function PlatesScreen({ route }: PlatesScreenProps) {
  const playerCount = route.params.numberOfPlayers;
  const initialGameData: PlayerData[] = Array.from(
    { length: playerCount },
    (_, index) => ({
      id: index + 1,
      sushiCount: 0,
    })
  );
  const [gameData, setGameData] = useState<PlayerData[]>(initialGameData);

  // ordered array of colors for the plate backgrounds
  const colorsArr = Object.values(Colors);

  const incrementSushi = (index: number) => {
    let updatedGameData = gameData;
    updatedGameData[index].sushiCount++;
    setGameData([...updatedGameData]);
  };

  return (
    <FlatList
      style={styles.container}
      numColumns={playerCount > 4 ? 2 : 1}
      data={gameData}
      scrollEnabled={false}
      contentContainerStyle={{ display: "flex", flex: 1 }}
      renderItem={({ index, item }) => (
        <View
          style={[
            styles.plateBox,
            { backgroundColor: colorsArr[index], flex: 1 },
          ]}
          key={index}
        >
          <TouchableOpacity
            style={styles.plateTouchable}
            onPress={() => incrementSushi(index)}
          >
            <View style={styles.textBox}>
              <Text style={styles.displayText}>Player {item.id}</Text>
              <Text style={styles.displayText}>{item.sushiCount}</Text>
              <View style={styles.plate}>
                <SushiPlate />
              </View>
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
