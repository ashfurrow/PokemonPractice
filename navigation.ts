import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  List: undefined;
  Detail: { name: string; url: string };
};
export type Navigation<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T, undefined>;
export type NavigationProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
