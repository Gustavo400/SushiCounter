import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum StackRoutes {
  Home = "Home",
  Plates = "Plates",
}

export type RootStackParamList = {
  Home: {};
  Plates: { numberOfPlayers: number };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  StackRoutes.Home
>;

export type PlatesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  StackRoutes.Plates
>;
