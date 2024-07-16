import { View, TouchableOpacity, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./HomeScreen.styles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/sushi-unstretched.png")}
        style={styles.tamagoImage}
      />
      <Text style={styles.text}>How many players?</Text>
      <View style={styles.playerCountContainer}>
        <TouchableOpacity
          style={styles.playerCount}
          onPress={() => navigation.navigate("Plates", { numberOfPlayers: 1 })}
        >
          <Text style={styles.playerCountText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playerCount}
          onPress={() => navigation.navigate("Plates", { numberOfPlayers: 2 })}
        >
          <Text style={styles.playerCountText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playerCount}
          onPress={() => navigation.navigate("Plates", { numberOfPlayers: 3 })}
        >
          <Text style={styles.playerCountText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playerCount}
          onPress={() => navigation.navigate("Plates", { numberOfPlayers: 4 })}
        >
          <Text style={styles.playerCountText}>4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.playerCountContainer}>
        <TouchableOpacity
          style={styles.playerCount}
          onPress={() => navigation.navigate("Plates", { numberOfPlayers: 5 })}
        >
          <Text style={styles.playerCountText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playerCount}
          onPress={() => navigation.navigate("Plates", { numberOfPlayers: 6 })}
        >
          <Text style={styles.playerCountText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playerCount}
          onPress={() => navigation.navigate("Plates", { numberOfPlayers: 7 })}
        >
          <Text style={styles.playerCountText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playerCount}
          onPress={() => navigation.navigate("Plates", { numberOfPlayers: 8 })}
        >
          <Text style={styles.playerCountText}>8</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
