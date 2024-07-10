import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from "./main-design";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/sushi-unstretched.png")}
        style={styles.tamagoImage}
      />
      <Text style={styles.text}>How many players?</Text>
      <View style={styles.playerCountContainer}>
        <TouchableOpacity style={styles.playerCount}>
          <Text style={styles.playerCountText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerCount}>
          <Text style={styles.playerCountText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerCount}>
          <Text style={styles.playerCountText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerCount}>
          <Text style={styles.playerCountText}>4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.playerCountContainer}>
        <TouchableOpacity style={styles.playerCount}>
          <Text style={styles.playerCountText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerCount}>
          <Text style={styles.playerCountText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerCount}>
          <Text style={styles.playerCountText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerCount}>
          <Text style={styles.playerCountText}>8</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
