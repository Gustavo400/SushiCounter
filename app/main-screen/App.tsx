import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./main-design";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlatesScreen from "../game-screen/plates";

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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Plates" component={PlatesScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
